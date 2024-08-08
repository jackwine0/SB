import React, { useState } from 'react';
import BudgetCard from '../../components/BudgetCard';
import './Budget.css';

const emojis = ['💻', '🍔', '💰', '📚', '🏋️‍♂️', '🎮', '🏠', '🚗', '✈️'];

const Budget = ({ title, subtitle }) => {
  const [budgets, setBudgets] = useState([]);
  const [newBudget, setNewBudget] = useState({
    emoji: emojis[0],
    title: '',
    total: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBudget({ ...newBudget, [name]: value });
  };

  const addBudget = () => {
    if (newBudget.title && newBudget.total > 0) {
      setBudgets([...budgets, { ...newBudget, total: parseInt(newBudget.total), amount: 0 }]);
      setNewBudget({ emoji: emojis[0], title: '', total: 0 });
    }
  };

  const updateBudgetAmount = (index) => {
    const amountSpent = prompt('Enter amount spent:', 0);
    if (amountSpent !== null) {
      const updatedBudgets = budgets.map((budget, i) =>
        i === index ? { ...budget, amount: budget.amount + parseInt(amountSpent) } : budget
      );
      setBudgets(updatedBudgets);
    }
  };

  return (
    <div className="budget-container">
      <div className="budget-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="budget-inputs">
        <select
          name="emoji"
          value={newBudget.emoji}
          onChange={handleInputChange}
        >
          {emojis.map((emoji, index) => (
            <option key={index} value={emoji}>
              {emoji}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="title"
          placeholder="Budget Title"
          value={newBudget.title}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="total"
          placeholder="Total Budget"
          value={newBudget.total}
          onChange={handleInputChange}
        />
        <button onClick={addBudget}>Add Budget</button>
      </div>
      <div className="budgets-grid">
        {budgets.map((budget, index) => (
          <BudgetCard
            key={index}
            {...budget}
            onClick={() => updateBudgetAmount(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Budget;
