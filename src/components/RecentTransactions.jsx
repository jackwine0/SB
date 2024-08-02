import React from 'react';
import '../css/RecentTransactions.css';

const transactions = [
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
];

const bankTabs = [
  { initials: "CB", name: "Chase Bank" },
  { initials: "WB", name: "Wells Fargo" },
  { initials: "BOA", name: "Bank of America" },
];

const RecentTransactions = () => {
  return (
    <div className="recent-transactions">
      <div className="header">
        <h2>Recent Transactions</h2>
        <button className="view-all-button">View All</button>
      </div>
      <div className="bank-tabs">
        {bankTabs.map((bank, index) => (
          <div key={index} className="bank-tab">
            {bank.name}
          </div>
        ))}
      </div>
      <div className="bank-info">
        <div className="bank-profile">
          <div className="bank-avatar">CB</div>
          <div className="bank-details">
            <span className="bank-name">Chase Bank</span>
            <span className="bank-amount"><p>$12,345.67</p></span>
          </div>
          <div className="account-type">Checking</div>
        </div>
        <div className="transactions-table">
          <table>
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
              {transactions.map((transaction, index) => (
                <tr key={index} className={transaction.amount.startsWith('-') ? 'debit' : 'credit'}>
                  <td>
                    <div className="transaction-avatar">
                      {transaction.transaction[0]}
                    </div>
                    <span>{transaction.transaction}</span>
                  </td>
                  <td className={`amount ${transaction.amount.startsWith('-') ? 'negative' : 'positive'}`}>
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
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
