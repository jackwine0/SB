import React from 'react';
import BankCardsCarousel from '../components/BankCardsCarousel';
import BudgetSection from '../components/BudgetSection';
import '../css/Profile.css';

const Profile = () => {
  const user = {
    name: 'Akande Samuel',
    email: 'user@example.com',
    avatar: 'https://via.placeholder.com/100', // Replace with actual image URL or path
  };

  return (
    <div className="profile">
      <div className="header-image">
        <img src={user.avatar} alt="Avatar" className="profile-avatar" />
      </div>
      <div className="profile-info">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div className="profile-section">
        <h3>My Banks</h3>
        <div className="bank-cards">
          <BankCardsCarousel />
        </div>
      </div>
      <div className="profile-section">
        <h3>My budgets</h3>
        <BudgetSection />
      </div>
    </div>
  );
};

export default Profile;
