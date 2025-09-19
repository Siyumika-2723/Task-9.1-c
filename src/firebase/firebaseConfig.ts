import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu3ElqJATDPHpdpcer1Hu2khGpB3V5hf8",
  authDomain: "devdeakin-c8877.firebaseapp.com",
  projectId: "devdeakin-c8877",
  storageBucket: "devdeakin-c8877.firebasestorage.app",
  messagingSenderId: "263572093833",
  appId: "1:263572093833:web:1516e1b280a364a63a3f58",
  measurementId: "G-E0MW7VW5EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

export default app;
