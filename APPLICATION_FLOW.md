# ShopHub - Application Flow & Architecture

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser (Client)                         │
│                   http://localhost:3000                      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  Next.js 16 Application                      │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  App Router (src/app/)                                │  │
│  │  - Server Components (default)                        │  │
│  │  - Client Components ('use client')                   │  │
│  │  - API Routes (api/auth/[...nextauth])               │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Middleware (src/middleware.js)                       │  │
│  │  - Route Protection                                   │  │
│  │  - Authentication Check                               │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Components (src/components/)                         │  │
│  │  - Navbar (Client Component)                          │  │
│  │  - Footer (Server Component)                          │  │
│  │  - SessionProvider (Client Component)                 │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              Express.js API Server                           │
│                http://localhost:5000                         │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  REST API Endpoints                                   │  │
│  │  - GET  /api/items        (Get all products)         │  │
│  │  - GET  /api/items/:id    (Get single product)       │  │
│  │  - POST /api/items        (Create product)           │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  In-Memory Database                                   │  │
│  │  - Array of product objects                           │  │
│  │  - Persists during server runtime                     │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 🔄 User Flow Diagrams

### 1. Landing Page Flow
```
User visits "/" 
    │
    ▼
Server renders page.js
    │
    ├─► Hero Section
    ├─► Features Section (3 cards)
    ├─► Categories Section (4 categories)
    ├─► Stats Section (4 metrics)
    ├─► Testimonials Section (3 reviews)
    ├─► Newsletter Section (email form)
    └─► CTA Section
    │
    ▼
User clicks "Shop Now" or "Products"
    │
    ▼
Navigate to "/items"
```

### 2. Authentication Flow
```
User clicks "Login" in Navbar
    │
    ▼
Navigate to "/login"
    │
    ▼
User enters credentials
    │
    ├─► Option 1: Email/Password
    │   │
    │   ▼
    │   Submit to NextAuth
    │   │
    │   ▼
    │   Verify credentials (hardcoded check)
    │   │
    │   ├─► Success: Create session → Redirect to "/items"
    │   └─► Failure: Show error toast
    │
    └─► Option 2: Google OAuth
        │
        ▼
        Redirect to Google
        │
        ▼
        User authorizes
        │
        ▼
        Callback to NextAuth → Create session → Redirect to "/items"
```

### 3. Product Browsing Flow
```
User visits "/items"
    │
    ▼
Server Component fetches from Express API
    │
    ▼
GET http://localhost:5000/api/items
    │
    ▼
Express returns array of products
    │
    ▼
Server renders product grid
    │
    ▼
User clicks a product card
    │
    ▼
Navigate to "/items/[id]"
    │
    ▼
Server Component fetches single product
    │
    ▼
GET http://localhost:5000/api/items/:id
    │
    ▼
Express returns product details
    │
    ▼
Server renders product detail page
```

### 4. Add Product Flow (Protected)
```
User clicks "Add Product" in Navbar
    │
    ▼
Middleware checks authentication
    │
    ├─► Not authenticated
    │   │
    │   ▼
    │   Redirect to "/login"
    │   │
    │   ▼
    │   Show error toast
    │
    └─► Authenticated
        │
        ▼
        Navigate to "/add-item"
        │
        ▼
        User fills form
        │
        ▼
        Submit form (Client Component)
        │
        ▼
        POST http://localhost:5000/api/items
        │
        ▼
        Express adds to in-memory database
        │
        ▼
        Success response
        │
        ▼
        Show success toast
        │
        ▼
        Redirect to "/items"
```

## 🔐 Authentication Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      NextAuth.js                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Providers                                            │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │  1. Credentials Provider                        │ │  │
│  │  │     - Email: user@example.com                   │ │  │
│  │  │     - Password: password123                     │ │  │
│  │  │     - Hardcoded validation                      │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │  2. Google Provider (Optional)                  │ │  │
│  │  │     - Requires GOOGLE_CLIENT_ID                 │ │  │
│  │  │     - Requires GOOGLE_CLIENT_SECRET             │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Session Management                                   │  │
│  │  - JWT tokens                                         │  │
│  │  - Stored in HTTP-only cookies                       │  │
│  │  - Accessible via useSession() hook                  │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Callbacks                                            │  │
│  │  - jwt(): Add user ID to token                       │  │
│  │  - session(): Add user ID to session                 │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 📊 Data Flow

### Product Data Flow
```
Express Server (In-Memory)
    │
    │ Initial Data: 6 products
    │ - Wireless Headphones
    │ - Smart Watch
    │ - Laptop Backpack
    │ - Mechanical Keyboard
    │ - Portable Charger
    │ - Wireless Mouse
    │
    ▼
REST API Endpoints
    │
    ├─► GET /api/items
    │   └─► Returns: Array of all products
    │
    ├─► GET /api/items/:id
    │   └─► Returns: Single product object
    │
    └─► POST /api/items
        └─► Adds new product to array
        └─► Returns: Created product object
    │
    ▼
Next.js Server Components
    │
    ├─► /items page
    │   └─► Fetches all products
    │   └─► Renders product grid
    │
    └─► /items/[id] page
        └─► Fetches single product
        └─► Renders product details
```

## 🎨 Component Hierarchy

```
RootLayout (src/app/layout.js)
│
├─► AuthProvider (SessionProvider wrapper)
│   │
│   ├─► Navbar (Client Component)
│   │   ├─► useSession() hook
│   │   ├─► Conditional rendering based on auth
│   │   └─► Navigation links
│   │
│   ├─► Main Content (children)
│   │   │
│   │   ├─► Home Page (/)
│   │   │   └─► 7 sections (all inline)
│   │   │
│   │   ├─► Login Page (/login)
│   │   │   ├─► Login form
│   │   │   └─► Google OAuth button
│   │   │
│   │   ├─► Items Page (/items)
│   │   │   └─► Product grid (server-rendered)
│   │   │
│   │   ├─► Item Detail Page (/items/[id])
│   │   │   └─► Product details (server-rendered)
│   │   │
│   │   └─► Add Item Page (/add-item)
│   │       └─► Product form (client component)
│   │
│   ├─► Footer (Server Component)
│   │   └─► Company info & links
│   │
│   └─► Toaster (React Hot Toast)
│       └─► Global toast notifications
```

## 🛡️ Security Features

1. **Route Protection**
   - Middleware checks authentication
   - Redirects unauthenticated users
   - Protects /add-item route

2. **Session Management**
   - HTTP-only cookies
   - JWT tokens
   - Secure by default

3. **CORS Configuration**
   - Express server allows Next.js origin
   - Prevents unauthorized API access

4. **Environment Variables**
   - Sensitive data in .env.local
   - Not committed to git
   - Required for production

## 🚀 Performance Optimizations

1. **Server Components**
   - Default in Next.js 16
   - Reduced JavaScript bundle
   - Faster initial page load

2. **Image Optimization**
   - Next.js Image component
   - Automatic lazy loading
   - Responsive images

3. **Static Generation**
   - Landing page pre-rendered
   - Login page pre-rendered
   - Faster page loads

4. **Dynamic Routes**
   - Product pages server-rendered
   - Fresh data on each request
   - SEO-friendly

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS breakpoints
- Grid layouts adapt to screen size
- Touch-friendly navigation

## 🎯 Key Features Summary

✅ 7-section landing page
✅ Authentication (Credentials + Google)
✅ Public product browsing
✅ Protected product creation
✅ Toast notifications
✅ Responsive design
✅ Server & Client components
✅ Route protection
✅ Session management
✅ Express.js API
✅ In-memory database
✅ Image optimization
