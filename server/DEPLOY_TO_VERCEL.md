# Deploy Express Server to Vercel

## 📋 Prerequisites
- Your Express server code is in the `server` folder
- You have a Vercel account
- Your client-side is already deployed on Vercel

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"

2. **Import Repository**
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Other
   - **Root Directory:** Click "Edit" and select `server`
   - **Build Command:** Leave empty or use `npm install`
   - **Output Directory:** Leave empty
   - **Install Command:** `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy your server URL (e.g., `https://your-server.vercel.app`)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to server folder**
   ```bash
   cd server
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **your-server-name**
   - Directory? **./server** (or just press Enter if already in server folder)
   - Override settings? **N**

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 🔧 After Deployment

### Update Client Environment Variables

1. **Copy your server URL** from Vercel (e.g., `https://your-server.vercel.app`)

2. **Update Client Environment Variables:**
   - Go to your client project in Vercel Dashboard
   - Go to Settings → Environment Variables
   - Update or add:
     ```
     NEXT_PUBLIC_API_URL=https://your-server.vercel.app
     ```
   - Click "Save"

3. **Redeploy Client:**
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Click "Redeploy"

## ✅ Test Your API

Visit these URLs to test:
- `https://your-server.vercel.app/api/items` - Should return all items
- `https://your-server.vercel.app/api/items/1` - Should return item 1

## 🐛 Troubleshooting

### CORS Issues
If you get CORS errors, the server already has CORS enabled. Make sure your client URL is correct.

### 404 Errors
- Check that `vercel.json` exists in the server folder
- Verify the routes in `vercel.json` are correct

### Server Not Starting
- Check Vercel logs in the dashboard
- Ensure all dependencies are in `package.json`
- Verify `server.js` exports the app correctly

## 📝 Important Notes

- Vercel serverless functions have a 10-second timeout on Hobby plan
- The in-memory database will reset on each deployment
- For persistent data, consider using a database (MongoDB, PostgreSQL, etc.)

## 🎉 Success!

Once deployed, your full-stack app is live:
- **Client:** https://your-client.vercel.app
- **Server:** https://your-server.vercel.app
