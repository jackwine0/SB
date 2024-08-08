// src/pages/Transaction.jsx

import React, { useState } from 'react';
import './Transaction.css';

const transactionsData = [
  { transaction: "Spotify", amount: "-$15.00", status: "Processing", date: "Wed 1:00pm", category: "Subscriptions" },
  { transaction: "James Aaron", amount: "+$88.00", status: "Declined", date: "Fri 2:45am", category: "Deposit" },
  { transaction: "Alexa Doe", amount: "+$88.00", status: "Success", date: "Wed 2:45am", category: "Deposit" },
  { transaction: "JSM Pro", amount: "-$18.99", status: "Processing", date: "Mon 1:10pm", category: "Subscriptions" },
  { transaction: "Fresh F&V", amount: "-$88.00", status: "Success", date: "Tue 12:15pm", category: "Groceries" },
  { transaction: "Figma", amount: "+$18.99", status: "Processing", date: "Tue 8:10pm", category: "Income" },
  { transaction: "Sam Sulek", amount: "-$40.20", status: "Declined", date: "Tue 5:43am", category: "Food and dining" },
  { transaction: "Lezak Julius", amount: "-$100.20", status: "Declined", date: "Tue 5:43am", category: "School fees" },
];

const Transaction = ({ title, subtitle }) => {
  const [selectedAccount, setSelectedAccount] = useState("Chase Growth Savings Account");

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  return (
    <div className="transaction-container">
      <div className="transaction-header">
        <div className="welcome">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <select className="account-select" value={selectedAccount} onChange={handleAccountChange}>
          <option value="Chase Growth Savings Account">Chase Growth Savings Account</option>
          <option value="Bank of America">Bank of America</option>
          <option value="Wells Fargo">Wells Fargo</option>
          {/* Add more accounts as needed */}
        </select>
      </div>

      <section className="account-section">
        <div className="account-details">
          <h2>Chase Bank</h2>
          <p>Chase Growth Savings Account</p>
        </div>
        <div className="balance-box">
          <p>Current Balance</p>
          <h3>$10,000.00</h3>
        </div>
      </section>

      <div className="transaction-body">
        <div className="transaction-controls">
          <h3>Transaction History</h3>
          <div className="filter-box">Filter</div>
        </div>

        <table className="transaction-table">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction, index) => (
              <tr key={index}>
                <td>
                  <div className="transaction-name">
                    <div className="avatar">{transaction.transaction.charAt(0)}</div>
                    <span>{transaction.transaction}</span>
                  </div>
                </td>
                <td className={`amount ${parseFloat(transaction.amount) < 0 ? 'negative' : 'positive'}`}>
                  {transaction.amount}
                </td>
                <td className="status">
                  <span className={`status-dot ${transaction.status.toLowerCase()}`}></span>
                  {transaction.status}
                </td>
                <td>{transaction.date}</td>
                <td className="category">{transaction.category}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button className="prev-button">Prev</button>
          <div className="page-numbers">
            <button className="page-number">1</button>
            <button className="page-number">2</button>
            <button className="page-number">3</button>
            <button className="page-number">4</button>
          </div>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
