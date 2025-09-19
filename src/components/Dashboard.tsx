import React from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
      navigate('/login');
    } catch (error: any) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dev@Deakin Dashboard</h1>
        <button onClick={handleSignOut} className="header-sign-out-btn">
          Sign Out
        </button>
      </header>
      
      <main className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome back!</h2>
          <p>Email: {user.email}</p>
          <p>User ID: {user.uid}</p>
        </div>
        
        <div className="features-section">
          <h3>Available Features</h3>
          <div className="feature-cards">
            <div className="feature-card">
              <h4>🎓 Learning Resources</h4>
              <p>Access coding tutorials and learning materials</p>
            </div>
            <div className="feature-card">
              <h4>💼 Job Board</h4>
              <p>Find the latest development opportunities</p>
            </div>
            <div className="feature-card">
              <h4>👥 Community</h4>
              <p>Connect with other developers</p>
            </div>
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
