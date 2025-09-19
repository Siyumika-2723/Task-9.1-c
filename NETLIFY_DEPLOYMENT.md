# Netlify Deployment Guide

## Prerequisites
- Your React app is built (`npm run build` completed successfully)
- You have a GitHub account
- Your code is pushed to a GitHub repository

## Step-by-Step Deployment to Netlify

### 1. Push to GitHub
First, make sure your code is in a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit - Dev@Deakin app with Firebase auth"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 2. Sign up/Login to Netlify
- Go to https://netlify.com
- Sign in with your GitHub account

### 3. Deploy from GitHub
1. Click "New site from Git"
2. Choose "GitHub" as your Git provider
3. Select your repository from the list
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version** (if needed): 18 or latest

### 4. Deploy
- Click "Deploy site"
- Wait for the build to complete (usually 2-3 minutes)
- Your app will be available at a URL like: `https://amazing-app-name.netlify.app`

### 5. Configure Firebase (IMPORTANT!)
After deployment, you need to:

1. Go to your Firebase Console
2. In Authentication > Settings > Authorized domains
3. Add your Netlify domain (e.g., `amazing-app-name.netlify.app`)
4. This allows Firebase auth to work on your deployed domain

### 6. Test Your Deployment
1. Visit your Netlify URL
2. Try registering a new account
3. Log in with the account
4. Test the sign-out functionality
5. Verify it redirects properly

## Troubleshooting

### Common Issues:
1. **Build fails**: Check that all dependencies are in package.json
2. **Firebase auth fails**: Ensure your domain is added to Firebase authorized domains
3. **Routing issues**: Add `_redirects` file in public folder with: `/* /index.html 200`

### Firebase Configuration:
Make sure your Firebase config in `src/firebase/firebaseConfig.ts` has the correct values from your Firebase project.

## Automatic Deploys
Once connected, any push to your main branch will automatically trigger a new deployment on Netlify.

## Custom Domain (Optional)
You can configure a custom domain in Netlify's site settings under "Domain management".
