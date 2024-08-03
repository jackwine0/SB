import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/signin.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset requested for:", email);

    // Navigate to a confirmation page or display a success message
    navigate("/confirm-password");
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <div>
        <header className="signin-header">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg"
            alt="SureBanker Logo"
            className="signin-logo"
          />
          <span>SureBanker</span>
          <h2>Forgot Password</h2>
          <p>Please enter your email to reset your password.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="rp">
            Reset Password
          </button>
        </form>
      </div>
      </div>
      <div className="signin-image">
        <img
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1722404737/9951f78474309b2ddc3d44cc201c51be_kkjnqk.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
