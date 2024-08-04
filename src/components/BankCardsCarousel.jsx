import React, { useState } from 'react';
import '../css/BankCardsCarousel.css';

const BankCardsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bankCards = [
    {
      bankName: 'JS Mastery Pro.',
      cardHolder: 'ADRIAN HAJDIN',
      cardNumber: '1234 1234 1234 1234',
      expiry: '06/24',
      color: '#4a90e2',
    },
    // Additional cards can be added here
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bankCards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === bankCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {bankCards.length > 0 ? (
        <div className="card" style={{ backgroundColor: bankCards[currentIndex].color }}>
          <div className="card-details">
            <h4>{bankCards[currentIndex].bankName}</h4>
            <p>{bankCards[currentIndex].cardHolder}</p>
            <p>{bankCards[currentIndex].cardNumber}</p>
            <p>{bankCards[currentIndex].expiry}</p>
          </div>
          <div className="carousel-controls">
            <button onClick={handlePrev}>&lt;</button>
            <button onClick={handleNext}>&gt;</button>
          </div>
        </div>
      ) : (
        <div className="no-cards">No bank cards available</div>
      )}
    </div>
  );
};

export default BankCardsCarousel;
