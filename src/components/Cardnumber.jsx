// src/components/CardNumber.jsx

import React from 'react';

const Cardnumber = ({ cardNumber }) => {
  const maskedNumber =
    cardNumber.slice(0, 3) +
    cardNumber.slice(3, -3).replace(/\d/g, '*') +
    cardNumber.slice(-3);
  
  return (
    <div>
      <p>Card number: {maskedNumber}</p>
    </div>
  );
};

export default Cardnumber;
