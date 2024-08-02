// BankCard.jsx
import React from 'react';
import '../css/bankcard.css'; // Ensure your CSS styles are in place

const BankCard = ({ type, holderName, cardNumber }) => {
  const formattedNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 - ');

  // Detect card type
  const cardType = detectCard(cardNumber);

  return (
    <div className={`cc ${cardType}`}>
      <svg width="295" height="87">
        <path d="M 0 0 C 50 50 250 0 300 87"></path>
      </svg>
      <div className="container">
        <div className="bank-name">surebank</div>
        
        <div className="circuit">
          {cardType === 'visa' && (
            <img
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722498097/Visa_Logo_PNG_cevjqq.jpg"
              alt="Visa Logo"
              className="logo"
            />
          )}
          {cardType === 'mastercard' && (
            <img
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722498097/Mastercard_PNG_ivda1e.jpg"
              alt="Mastercard Logo"
              className="logo"
            />
          )}
        </div>
      </div>
      <div className="holder">
        <span className="name">{holderName}</span>
        <span className="number">{formattedNumber}</span>
        <div className="type">{type}</div>
      </div>
    </div>
  );
};

// Function to detect card type based on number
function detectCard(input) {
  if (/^4/.test(input)) {
    return 'visa';
  } else if (/^5[1-5]/.test(input)) {
    return 'mastercard';
  }
  return 'unknown';
}

export default BankCard;
