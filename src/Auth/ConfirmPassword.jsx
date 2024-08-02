import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/confirmpassword.css'; // Create this CSS file

const ConfirmPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Handle password reset logic here
    console.log('Password has been reset:', formData.newPassword);
    // Navigate to a success page or login page
    navigate('/signin');
  };

  return (
    <div className="confirmpassword-container">
      <div className="confirmpassword-form">
        <header className="confirmpassword-header">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722374889/SB_LOGO_yixwfz.svg"
            alt="Horizon Logo"
            className="confirmpassword-logo"
          />
          <h1>Reset Password</h1>
          <p>Enter your new password below.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="btn-primary">
            Confirm Password
          </button>
        </form>
        <div className="signin-prompt">
          Remember your password? <a href="/signin">Sign in</a>
        </div>
      </div>
      <div className="confirmpassword-image">
        <img
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1722404737/9951f78474309b2ddc3d44cc201c51be_kkjnqk.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default ConfirmPassword;
