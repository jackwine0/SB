import React from 'react';
import '../css/BudgetSection.css';

const budgets = [
  {
    emoji: '📺',
    title: 'Subscriptions',
    amountLeft: 25,
    color: 'linear-gradient(135deg, #006d32, #00c853)',
  },
  {
    emoji: '🍔',
    title: 'Food and booze',
    amountLeft: 120,
    color: 'linear-gradient(135deg, #ff6b6b, #ff4757)',
  },
  {
    emoji: '💰',
    title: 'Savings',
    amountLeft: 50,
    color: 'linear-gradient(135deg, #a5d6a7, #00c853)',
  },
];

const BudgetSection = () => {
  return (
    <div className="budget-list">
      {budgets.map((budget, index) => (
        <div className="budget-card" key={index}>
          <div className="budget-header">
            <span className="emoji">{budget.emoji}</span>
            <h4>{budget.title}</h4>
            <p className="amount-left">${budget.amountLeft} left</p>
          </div>
          <div
            className="progress-bar"
            style={{ background: budget.color }}
          />
        </div>
      ))}
    </div>
  );
};

export default BudgetSection;
