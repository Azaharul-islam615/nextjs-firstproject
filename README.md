# ShopHub - Next.js E-Commerce Application

A modern e-commerce application built with Next.js 16 (App Router), featuring authentication, product management, and a beautiful user interface.

##  Features

### Core Features
- **Landing Page**: Beautiful homepage with 7 sections (Hero, Features, Categories, Stats, Testimonials, Newsletter, CTA)
- **Authentication**: NextAuth.js integration with credential and Google OAuth support
- **Product Listing**: Browse all products fetched from Express.js API
- **Product Details**: View detailed information about each product
- **Protected Routes**: Add new products (requires authentication)
- **Toast Notifications**: Real-time feedback for user actions
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS

### Pages & Routes

| Route | Access | Description |

| `/` | Public | Landing page with 7 sections + Navbar + Footer |
| `/login` | Public | Login page with credential & Google OAuth |
| `/items` | Public | Product listing page |
| `/items/[id]` | Public | Individual product details |
| `/add-item` | Protected | Add new product (authenticated users only) |

##  Technologies Used

- **Frontend**: Next.js 16 (App Router), React 19
- **Styling**: Tailwind CSS 4
- **Authentication**: NextAuth.js
- **Backend API**: Express.js
- **Notifications**: React Hot Toast
- **Image Optimization**: Next.js Image component

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Clone and Install Dependencies

```bash
# Install Next.js dependencies
npm install

# Install Express server dependencies
cd server
npm install
cd ..
```

### Step 2: Start the Express Server

```bash
cd server
npm start
```

The Express server will run on `http://localhost:5000`

### Step 3: Start the Next.js Development Server

In a new terminal:

```bash
npm run dev
```

The Next.js app will run on `http://localhost:3000`

### Step 4: Access the Application

Open your browser and navigate to `http://localhost:3000`

## 🔐 Authentication

### Mock Login Credentials
- **Email**: `user@example.com`
- **Password**: `password123`

### Google OAuth (Optional)
To enable Google login:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project and enable Google+ API
3. Create OAuth 2.0 credentials
4. Add credentials to `.env.local`:
   ```
   GOOGLE_CLIENT_ID=your-client-id
   GOOGLE_CLIENT_SECRET=your-client-secret
   ```


## 🎯 Feature Implementation Details

### 1. Landing Page (7 Sections)
- **Hero Section**: Eye-catching banner with CTA
- **Features Section**: Key benefits (Fast Delivery, Secure Payment, Quality Products)
- **Categories Section**: Product categories
- **Stats Section**: Business metrics
- **Testimonials Section**: Customer reviews
- **Newsletter Section**: Email subscription
- **CTA Section**: Final call-to-action

### 2. Authentication System
- **NextAuth.js** for session management
- **Credential Provider** with hardcoded mock login
- **Google OAuth Provider** (optional)
- Session stored in cookies
- Protected routes with automatic redirect

### 3. Product Management
- **Express.js API** serving product data
- **In-memory database** for demo purposes
- **CRUD operations** (Create, Read)
- **Image optimization** with Next.js Image component

### 4. Protected Routes
- Middleware checks authentication status
- Redirects unauthenticated users to login
- Toast notifications for feedback

### 5. UI/UX Enhancements
- **Responsive design** for all screen sizes
- **Tailwind CSS** for modern styling
- **Toast notifications** for user feedback
- **Loading states** for better UX
- **Hover effects** and smooth transitions

##  API Endpoints

### Express Server (Port 5000)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all products |
| GET | `/api/items/:id` | Get single product |
| POST | `/api/items` | Add new product (requires auth) |

##  Usage Guide

1. **Browse Products**: Visit `/items` to see all products
2. **View Details**: Click any product to see full details
3. **Login**: Click "Login" in navbar, use demo credentials
4. **Add Product**: After login, click "Add Product" in navbar
5. **Logout**: Click "Logout" button in navbar

##  Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components
- Configure Tailwind in `tailwind.config.js`

### Products
- Edit `server/server.js` to modify initial products
- Add more fields to product schema
- Implement database integration (MongoDB, PostgreSQL, etc.)

### Authentication
- Add more OAuth providers in NextAuth config
- Implement user registration
- Add role-based access control

##  Notes

- The Express server must be running for product features to work
- Mock authentication uses hardcoded credentials (not for production)
- Images are loaded from Unsplash (requires internet connection)
- Session expires when browser is closed (can be configured)

##  Troubleshooting

**Products not loading?**
- Ensure Express server is running on port 5000
- Check console for CORS errors

**Login not working?**
- Verify credentials: `user@example.com` / `password123`
- Check `.env.local` file exists

**Images not displaying?**
- Check internet connection (Unsplash images)
- Verify `next.config.mjs` has correct image domains

##  License

This project is created for educational purposes.

## 👨 Author

Built with Next.js 16 and Express.js
