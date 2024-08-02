import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/forgotpassword.css'; // Create this CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset request here
    console.log('Password reset requested for:', email);
    // Navigate to confirmation page or display success message
    navigate('/reset-confirmation');
  };

  return (
    <div className="forgotpassword-container">
      <div className="forgotpassword-form">
        <header className="forgotpassword-header">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722374889/SB_LOGO_yixwfz.svg"
            alt="Horizon Logo"
            className="forgotpassword-logo"
          />
          <h1>Forgot Password</h1>
          <p>Enter your email address to reset your password.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Reset Password
          </button>
        </form>
        <div className="signin-prompt">
          Remember your password? <a href="/signin">Sign in</a>
        </div>
      </div>
      <div className="forgotpassword-image">
        <img
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1722404737/9951f78474309b2ddc3d44cc201c51be_kkjnqk.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
