// Firebase Configuration for Dev@Deakin Authentication App
// This file sets up the connection to Firebase services for Task 9.1C

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

/**
 * Firebase Configuration Object
 * 
 * These credentials connect our Dev@Deakin app to the Firebase project.
 * The configuration includes:
 * - API Key for authentication
 * - Auth Domain for Firebase Authentication
 * - Project ID for the specific Firebase project
 * - Storage Bucket for file storage (if needed in future)
 * - Messaging Sender ID for push notifications (if needed in future)
 * - App ID for this specific web application
 * - Measurement ID for Google Analytics tracking
 */
const firebaseProjectConfiguration = {
  apiKey: "AIzaSyCu3ElqJATDPHpdpcer1Hu2khGpB3V5hf8",
  authDomain: "devdeakin-c8877.firebaseapp.com",
  projectId: "devdeakin-c8877",
  storageBucket: "devdeakin-c8877.firebasestorage.app",
  messagingSenderId: "263572093833",
  appId: "1:263572093833:web:1516e1b280a364a63a3f58",
  measurementId: "G-E0MW7VW5EZ"
};

// Initialize Firebase App with our configuration
const firebaseApp = initializeApp(firebaseProjectConfiguration);

/**
 * Firebase Authentication Service
 * 
 * This is the main authentication service used throughout the app.
 * It handles:
 * - User registration with email/password
 * - User login with email/password
 * - User sign-out functionality (MAIN REQUIREMENT for Task 9.1C)
 * - Authentication state monitoring
 */
export const authenticationService = getAuth(firebaseApp);

/**
 * Firebase Analytics Service (Optional)
 * 
 * This service can track user interactions and app usage.
 * Useful for understanding how users interact with the Dev@Deakin app.
 */
export const analyticsService = getAnalytics(firebaseApp);

// Export the main Firebase app instance
export default firebaseApp;
