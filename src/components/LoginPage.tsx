import React, { useState } from 'react';
import { authenticationService } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

// Interface for LoginPage component props (currently empty but good practice)
interface LoginPageProps {}

/**
 * LoginPage Component - Main authentication interface for Dev@Deakin
 * 
 * This component handles:
 * - User login with email/password
 * - User registration with email/password
 * - Sign-out functionality (MAIN REQUIREMENT for Task 9.1C)
 * - Toggling between login and registration modes
 * - Real-time authentication state monitoring
 */
const LoginPage: React.FC<LoginPageProps> = () => {
  // State variables for form management
  const [userEmail, setUserEmail] = useState(''); // User's email input
  const [userPassword, setUserPassword] = useState(''); // User's password input
  const [isLoginMode, setIsLoginMode] = useState(true); // Toggle between login/register
  const [authenticationError, setAuthenticationError] = useState(''); // Error messages
  const [currentUser, setCurrentUser] = useState<any>(null); // Currently logged in user
  const navigate = useNavigate(); // React Router navigation hook

  /**
   * Effect hook to monitor authentication state changes
   * This runs when the component mounts and listens for auth state changes
   */
  React.useEffect(() => {
    const unsubscribeFromAuthChanges = authenticationService.onAuthStateChanged((currentUserState) => {
      setCurrentUser(currentUserState);
    });
    return () => unsubscribeFromAuthChanges(); // Cleanup subscription on unmount
  }, []);

  /**
   * Handles form submission for both login and registration
   * @param e - Form submit event
   */
  const handleAuthenticationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthenticationError(''); // Clear any previous errors

    try {
      if (isLoginMode) {
        // User wants to log in with existing account
        const userCredential = await signInWithEmailAndPassword(authenticationService, userEmail, userPassword);
        console.log('User successfully logged in:', userCredential.user);
        navigate('/dashboard'); // Redirect to dashboard after successful login
      } else {
        // User wants to create a new account
        const userCredential = await createUserWithEmailAndPassword(authenticationService, userEmail, userPassword);
        console.log('User successfully registered:', userCredential.user);
        navigate('/dashboard'); // Redirect to dashboard after successful registration
      }
    } catch (authError: any) {
      // Handle authentication errors (invalid credentials, weak password, etc.)
      setAuthenticationError(authError.message);
      console.error('Authentication error occurred:', authError);
    }
  };

  /**
   * MAIN REQUIREMENT: Sign-out functionality for Task 9.1C
   * This function logs out the current user and redirects to login page
   */
  const handleUserSignOut = async () => {
    try {
      await signOut(authenticationService);
      console.log('User successfully signed out');
      setCurrentUser(null); // Clear current user state
      navigate('/login'); // Redirect to login page after sign-out
    } catch (signOutError: any) {
      console.error('Error occurred during sign-out:', signOutError);
      setAuthenticationError(signOutError.message);
    }
  };

  // If user is already logged in, show the user dashboard with sign-out option
  if (currentUser) {
    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Welcome to Dev@Deakin</h2>
          <div className="user-info">
            <p>Logged in as: {currentUser.email}</p>
            <p>User ID: {currentUser.uid}</p>
          </div>
          {/* MAIN REQUIREMENT: Sign-out button for Task 9.1C */}
          <button onClick={handleUserSignOut} className="sign-out-btn">
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  // Main login/registration form interface
  return (
    <div className="login-container">
      <div className="login-form">
        {/* Dynamic title based on current mode (login or register) */}
        <h2>{isLoginMode ? 'Login to Dev@Deakin' : 'Register for Dev@Deakin'}</h2>
        
        {/* Display authentication errors to user */}
        {authenticationError && <div className="error-message">{authenticationError}</div>}
        
        {/* Main authentication form */}
        <form onSubmit={handleAuthenticationSubmit}>
          {/* Email input field */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          
          {/* Password input field */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
              placeholder="Enter your password"
              minLength={6}
            />
          </div>
          
          {/* Submit button with dynamic text */}
          <button type="submit" className="auth-btn">
            {isLoginMode ? 'Login' : 'Register'}
          </button>
        </form>
        
        {/* Toggle between login and registration modes */}
        <p className="toggle-auth">
          {isLoginMode ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setIsLoginMode(!isLoginMode)}
            className="toggle-btn"
          >
            {isLoginMode ? 'Register here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
