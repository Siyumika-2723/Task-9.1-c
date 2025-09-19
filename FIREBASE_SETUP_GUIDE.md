# 🔧 How to Fix Firebase API Key Error

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name (e.g., "deakin-auth-app")
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project, click "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Click "Email/Password"
5. Enable the first option (Email/Password)
6. Click "Save"

## Step 3: Get Your Firebase Configuration

1. Click the gear icon ⚙️ next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon `</>` to add a web app
5. Enter app nickname (e.g., "Dev@Deakin Web App")
6. Click "Register app"
7. Copy the config object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
  measurementId: "G-ABC123XYZ"
};
```

## Step 4: Update Your .env File

Open the `.env` file in your project root and replace the placeholder values:

```env
REACT_APP_FIREBASE_API_KEY=AIzaSyC...  # Your actual API key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abc123
REACT_APP_FIREBASE_MEASUREMENT_ID=G-ABC123XYZ
```

## Step 5: Restart Your Development Server

After updating the `.env` file:

1. Stop the current server (Ctrl+C in terminal)
2. Restart it: `npm start`
3. The Firebase error should be gone!

## Step 6: Test Authentication

1. Try registering a new account
2. Try logging in
3. Test the sign-out functionality

## 🔒 Security Note

- The `.env` file is already added to `.gitignore`
- Never commit your actual Firebase credentials to Git
- For production deployment on Netlify, you'll set these as environment variables in Netlify's dashboard

## 📞 Need Help?

If you still see errors after following these steps:
1. Check the browser console for detailed error messages
2. Verify all environment variables are correctly set
3. Make sure you've enabled Email/Password authentication in Firebase Console
