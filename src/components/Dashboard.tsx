import React from 'react';
import { authenticationService } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

/**
 * Dashboard Component - Protected user interface for authenticated users
 * 
 * This component serves as the main dashboard after successful authentication.
 * Features include:
 * - User information display
 * - Sign-out functionality (MAIN REQUIREMENT for Task 9.1C)
 * - Feature cards showing available Dev@Deakin services
 * - Automatic redirect for unauthenticated users
 */
const Dashboard: React.FC = () => {
  const navigate = useNavigate(); // React Router navigation hook
  const currentAuthenticatedUser = authenticationService.currentUser; // Get currently logged in user

  /**
   * MAIN REQUIREMENT: Sign-out functionality for Task 9.1C
   * This function safely logs out the user and redirects to login page
   */
  const handleUserSignOut = async () => {
    try {
      await signOut(authenticationService);
      console.log('User successfully signed out from dashboard');
      navigate('/login'); // Redirect to login page after successful sign-out
    } catch (signOutError: any) {
      console.error('Error occurred during sign-out from dashboard:', signOutError);
    }
  };

  // Security check: If no user is authenticated, redirect to login
  if (!currentAuthenticatedUser) {
    navigate('/login');
    return null; // Don't render anything while redirecting
  }

  // Main dashboard interface for authenticated users
  return (
    <div className="dashboard-container">
      {/* Header section with title and sign-out button */}
      <header className="dashboard-header">
        <h1>Dev@Deakin Dashboard</h1>
        {/* MAIN REQUIREMENT: Sign-out button prominently displayed in header */}
        <button onClick={handleUserSignOut} className="header-sign-out-btn">
          Sign Out
        </button>
      </header>
      
      {/* Main content area */}
      <main className="dashboard-content">
        {/* Welcome section displaying user information */}
        <div className="welcome-section">
          <h2>Welcome back!</h2>
          <p>Email: {currentAuthenticatedUser.email}</p>
          <p>User ID: {currentAuthenticatedUser.uid}</p>
        </div>
        
        {/* Features section showcasing Dev@Deakin services */}
        <div className="features-section">
          <h3>Available Features</h3>
          <div className="feature-cards">
            {/* Learning Resources Card */}
            <div className="feature-card">
              <h4>🎓 Learning Resources</h4>
              <p>Access coding tutorials and learning materials</p>
            </div>
            {/* Job Board Card */}
            <div className="feature-card">
              <h4>💼 Job Board</h4>
              <p>Find the latest development opportunities</p>
            </div>
            {/* Community Card */}
            <div className="feature-card">
              <h4>👥 Community</h4>
              <p>Connect with other developers</p>
            </div>
            {/* Progress Tracking Card */}
            <div className="feature-card">
              <h4>📊 Progress Tracking</h4>
              <p>Monitor your learning progress</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
