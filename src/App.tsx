import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import './App.css';

/**
 * Main App Component - Dev@Deakin Authentication Application
 * 
 * This is the root component for Task 9.1C which implements:
 * - Firebase Authentication system
 * - Sign-out functionality (MAIN REQUIREMENT)
 * - Protected routing between login and dashboard
 * - Modern React with TypeScript
 * 
 * Routes:
 * - /login: Authentication page (login/register)
 * - /dashboard: Protected dashboard for authenticated users
 * - /: Root redirect to login page
 */
function DevDeakinApp() {
  return (
    <Router>
      <div className="App">
        {/* Application routing configuration */}
        <Routes>
          {/* Login/Registration route */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Protected dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Default route - redirect to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default DevDeakinApp;
