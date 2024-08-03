import React, { useState } from 'react';
import '../css/signup.css'; // Import the CSS file for styling

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    dob: '',
    email: '',
    password: '',
    country: '', // Add country field dropdown
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      
      <div className="signup-col1">
      <div className='x1'>
        <img
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1721168513/surebanker_logo_aoy8rn.svg"
          alt="SureBanker Logo"
          className="logo"
        />
        <span className="company-name">SureBanker</span>
        <h2>Sign Up</h2>
        <p>Please enter your details.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="input-row">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="input-row">
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              {/* Add country options here */}
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
           <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/signin">Login</a>
        </p>
      </div>
      <div className="signup-col2">
        <img
          src="https://your-image-url.com/signup-background.jpg" // Update with the actual image URL
          alt="Signup Background"
          className="background-image"
        />
      </div>
    </div>
  );
};

export default Signup;
