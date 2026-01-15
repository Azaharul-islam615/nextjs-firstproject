# Complete Deployment Guide

## 🎯 Current Status
✅ Client deployed to Vercel
⏳ Server needs to be deployed

## 🚀 Quick Deploy Server to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   ```
   https://vercel.com/dashboard
   ```

2. **Add New Project**
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Root Directory**
   - Click "Edit" next to Root Directory
   - Select `server` folder
   - This tells Vercel to deploy only the server folder

4. **Configure Settings**
   - Framework Preset: **Other**
   - Build Command: Leave empty
   - Output Directory: Leave empty
   - Install Command: `npm install`
   - Root Directory: `server`

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Copy your server URL

### Method 2: Via Command Line

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to server folder
cd server

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔗 Connect Client and Server

### Step 1: Get Server URL
After deployment, copy your server URL:
```
https://your-server-name.vercel.app
```

### Step 2: Update Client Environment Variables

1. Go to your **client project** in Vercel Dashboard
2. Click on "Settings" → "Environment Variables"
3. Find `NEXT_PUBLIC_API_URL` or add it:
   ```
   NEXT_PUBLIC_API_URL=https://your-server-name.vercel.app
   ```
4. Click "Save"

### Step 3: Redeploy Client

1. Go to "Deployments" tab
2. Click "..." on the latest deployment
3. Click "Redeploy"
4. Wait for redeployment to complete

## ✅ Test Your Deployment

### Test Server API
Visit these URLs in your browser:
```
https://your-server-name.vercel.app/api/items
https://your-server-name.vercel.app/api/items/1
```

You should see JSON data.

### Test Client
Visit your client URL:
```
https://your-client-name.vercel.app
```

- Go to Products page
- Products should load from your deployed server
- Click on a product to see details

## 📋 Checklist

- [ ] Server deployed to Vercel
- [ ] Server URL copied
- [ ] Client environment variable updated with server URL
- [ ] Client redeployed
- [ ] Server API tested (returns JSON)
- [ ] Client tested (products load)
- [ ] Product details page works
- [ ] Login works
- [ ] Add product works (if logged in)

## 🎉 You're Done!

Your full-stack application is now live on Vercel!

**Client:** https://your-client.vercel.app
**Server:** https://your-server.vercel.app

## 📝 Important Notes

### Data Persistence
- The current server uses in-memory storage
- Data will reset on each deployment
- For production, consider using:
  - MongoDB Atlas (free tier)
  - PostgreSQL (Vercel Postgres)
  - Supabase (free tier)

### Environment Variables Needed

**Client (.env.local):**
```env
NEXTAUTH_URL=https://your-client.vercel.app
NEXTAUTH_SECRET=your-secret-key
NEXT_PUBLIC_API_URL=https://your-server.vercel.app
```

**Server (if needed):**
```env
NODE_ENV=production
```

## 🐛 Common Issues

### Issue: Products not loading
**Solution:** Check that `NEXT_PUBLIC_API_URL` is set correctly and client is redeployed

### Issue: CORS errors
**Solution:** Server already has CORS enabled. Check server logs in Vercel dashboard

### Issue: 404 on API routes
**Solution:** Verify `vercel.json` exists in server folder

### Issue: Server timeout
**Solution:** Vercel has 10-second timeout. Optimize your API endpoints

## 🆘 Need Help?

Check Vercel logs:
1. Go to your server project in Vercel
2. Click "Deployments"
3. Click on latest deployment
4. Click "View Function Logs"

## 🔄 Future Deployments

Every time you push to GitHub:
- Vercel automatically deploys both client and server
- No manual steps needed
- Check deployment status in Vercel dashboard
