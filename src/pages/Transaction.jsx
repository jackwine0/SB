// src/components/Transaction.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardNumber from '../components/Cardnumber';
import '../css/RecentTransactions.css';

const allTransactions = [
  {
    transaction: "Spotify",
    amount: "-$15.00",
    status: "Processing",
    date: "Wed 1:00pm",
    category: "Subscriptions",
  },
  {
    transaction: "James Aaron",
    amount: "+$88.00",
    status: "Declined",
    date: "Fri 2:45am",
    category: "Deposit",
  },
  {
    transaction: "Alexa Doe",
    amount: "+$88.00",
    status: "Success",
    date: "Wed 2:45am",
    category: "Deposit",
  },
  {
    transaction: "JSM Pro",
    amount: "-$18.99",
    status: "Processing",
    date: "Mon 1:10pm",
    category: "Subscriptions",
  },
  {
    transaction: "Fresh F&V",
    amount: "-$88.00",
    status: "Success",
    date: "Tue 12:15pm",
    category: "Groceries",
  },
  {
    transaction: "Figma",
    amount: "+$18.99",
    status: "Processing",
    date: "Tue 8:10pm",
    category: "Income",
  },
  {
    transaction: "Sam Sulek",
    amount: "-$40.20",
    status: "Declined",
    date: "Tue 5:43am",
    category: "Food and dining",
  },
  {
    transaction: "Lezak Julius",
    amount: "-$100.20",
    status: "Declined",
    date: "Tue 5:43am",
    category: "School fees",
  },
  // Add more transactions as needed
];

const Transaction = ({ title, subtitle }) => {
  const [transactions, setTransactions] = useState(allTransactions);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);
  const [filter, setFilter] = useState("");

  // Get current transactions
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleNext = () => {
    if (currentPage < Math.ceil(transactions.length / transactionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    if (selectedFilter === "All") {
      setTransactions(allTransactions);
    } else {
      setTransactions(
        allTransactions.filter(
          (transaction) => transaction.status === selectedFilter
        )
      );
      setCurrentPage(1); // Reset to the first page after filtering
    }
  };

  const cardNumber = "1234567890123456";

  return (
    <div className="home-content">
      <div className="welcome">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="transaction-history">
        <div className="filter-section">
          <select value={filter} onChange={handleFilterChange}>
            <option value="All">Select Bank</option>
            <option value="Success">Access Bank</option>
            <option value="Processing">UBA</option>
            <option value="Declined">First Bank</option>
          </select>
        </div>
        <div className="account-card">
          <div className="account-info">
            <h2>Chase</h2>
            <p>Chase Growth Savings Account</p>
            <button>
              Current Balance: <span>$41,382.80</span>
            </button>
            <CardNumber cardNumber={cardNumber} />
          </div>
        </div>
        <div className="trans">
          <h3>Transaction History</h3>
        </div>
        <div className="filter-section">
          <select value={filter} onChange={handleFilterChange}>
            <option value="All">Apply Filter</option>
            <option value="Success">Success</option>
            <option value="Processing">Processing</option>
            <option value="Declined">Declined</option>
          </select>
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
            {currentTransactions.map((item, index) => (
              <tr key={index} className={`status-${item.status.toLowerCase()}`}>
                <td>{item.transaction}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
                <td>{item.date}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button
            className="prev"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from(
            { length: Math.ceil(transactions.length / transactionsPerPage) },
            (_, i) => (
              <span
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </span>
            )
          )}
          <button
            className="next"
            onClick={handleNext}
            disabled={
              currentPage === Math.ceil(transactions.length / transactionsPerPage)
            }
          >
            Next
          </button>
        </div>
        <Link to="/Budget">
          <button className="budget-button">Budget</button>
        </Link>
      </div>
    </div>
  );
};

export default Transaction;
