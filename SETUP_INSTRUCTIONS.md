# ShopHub - Complete Setup Instructions



A complete Next.js 16 e-commerce application with:

### ✨ Features Implemented
-  Landing page with 7 sections (Hero, Features, Categories, Stats, Testimonials, Newsletter, CTA)
-  Navbar with navigation links (Home, Products, Login/Logout, Add Product)
-  Footer with company info and links
-  Authentication using NextAuth.js (Credentials + Google OAuth)
-  Mock login with hardcoded credentials
-  Session management with cookies
-  Public product listing page (fetches from Express API)
-  Public product details page
-  Protected "Add Product" page (requires authentication)
-  Toast notifications for user feedback
-  Responsive design with Tailwind CSS
-  Express.js backend API with in-memory database
-  Route protection middleware

## 🚀 How to Run

### Step 1: Start the Express Server (Backend)

Open a terminal and run:

``` command promt
cd server
npm start
```

You should see: `Server running on http://localhost:5000`

### Step 2: Start Next.js (Frontend)

Open a NEW terminal (keep the first one running) and run:

```bash
npm run dev
```

You should see: `Ready on http://localhost:3000`

### Step 3: Open the Application

Open your browser and go to: **http://localhost:3000**

## 🔑 Login Credentials

Use these credentials to test authentication:

- **Email**: `user@example.com`
- **Password**: `password123`

## 📋 Testing Checklist

1.  Visit homepage - see 7 sections with navbar and footer
2.  Click "Products" - see list of 6 products
3.  Click any product - see detailed product page
4.  Click "Login" - see login form
5.  Login with credentials above
6.  After login, see "Add Product" link in navbar
7.  Click "Add Product" - fill form and submit
8.  See success toast notification
9.  Verify new product appears in product list
10.  Click "Logout" - return to logged out state



##  Routes Summary

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Landing page with 7 sections |
| `/login` | Public | Login with credentials or Google |
| `/items` | Public | Browse all products |
| `/items/[id]` | Public | View product details |
| `/add-item` | Protected | Add new product (auth required) |

##  API Endpoints (Express Server)

| Method | Endpoint | Description |

| GET | `/api/items` | Get all products |
| GET | `/api/items/:id` | Get single product |
| POST | `/api/items` | Create new product |

##  Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **NextAuth.js** - Authentication
- **Tailwind CSS 4** - Styling
- **Express.js** - Backend API
- **React Hot Toast** - Notifications
- **js-cookie** - Cookie management

##  Troubleshooting

### Products not showing?
- Make sure Express server is running on port 5000
- Check terminal for errors

### Can't login?
- Use exact credentials: `user@example.com` / `password123`
- Check `.env.local` file exists

### Port already in use?
- Kill process on port 3000: `npx kill-port 3000`
- Kill process on port 5000: `npx kill-port 5000`

### Images not loading?
- Requires internet connection (images from Unsplash)
- Check `next.config.mjs` has correct image domains

##  Success!

If you can:
1. See the landing page with 7 sections
2. Browse products
3. Login successfully
4. Add a new product
5. See toast notifications

Then everything is working perfectly! 

##  Optional: Enable Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project and enable Google+ API
3. Create OAuth 2.0 credentials
4. Add to `.env.local`:
   ```
   GOOGLE_CLIENT_ID=your-client-id
   GOOGLE_CLIENT_SECRET=your-client-secret
   ```
5. Restart the Next.js server

## 💡 Next Steps

- Add database (MongoDB, PostgreSQL)
- Implement user registration
- Add shopping cart functionality
- Add payment integration
- Deploy to Vercel/Railway

Enjoy your new e-commerce application! 🛍️
