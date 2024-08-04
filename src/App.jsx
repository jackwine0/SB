import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';
import ConfirmPassword from './Auth/ConfirmPassword';
import Sidebar from './components/sidebar/sidebar';
import Home from './pages/Home';
import Budget from './pages/Budget';
import Transaction from './pages/Transaction';
import Transfer from './pages/Transfer';
import MyBanks from './pages/mybanks';
import Advice from './pages/Advice';
import Profile from './components/Profile';

const ProtectedRoute = ({ children }) => {
  // Logic for checking authentication can be added here
  const isAuthenticated = true; // Replace with actual authentication logic

  return isAuthenticated ? (
    <div className="app-container">
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  ) : (
    <Signin />
  );
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landingpage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />

      {/* Protected Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home
              title="Welcome Samuel"
              subtitle="Access & manage your account and transactions efficiently."
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/budget"
        element={
          <ProtectedRoute>
            <Budget title="Budget" subtitle="Plan your finances wisely." />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transaction"
        element={
          <ProtectedRoute>
            <Transaction
              title="Transaction history"
              subtitle="Gain Insights and Track Your Transactions Over Time"
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transfer"
        element={
          <ProtectedRoute>
            <Transfer
              title="Payment Transfer"
              subtitle="Please provide any specific details or notes related to the payment transfer"
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mybanks"
        element={
          <ProtectedRoute>
            <MyBanks
              title="My Bank Accounts"
              subtitle="Effortlessly Manage Your Banking Activities"
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/advice"
        element={
          <ProtectedRoute>
            <Advice
              title="Financial Advice"
              subtitle="Get personalized financial advice."
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile title="Profile" subtitle="Manage your personal profile." />
          </ProtectedRoute>
        }
      />

      {/* Catch-All Route */}
      <Route path="*" element={<Landingpage />} /> {/* Redirects to Landingpage or a 404 page */}
    </Routes>
  );
}

export default App;
