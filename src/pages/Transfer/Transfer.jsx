import React, { useState } from 'react';
import './transfer.scss'; // Assuming you save the CSS file as FundTransfer.css

function Transfer() {
  const [accountFrom, setAccountFrom] = useState('');
  const [accountTo, setAccountTo] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transferStatus, setTransferStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleTransfer = async () => {
    // Reset status and error
    setTransferStatus(null);
    setError(null);

    // Basic validation
    if (!accountFrom || !accountTo || !amount || isNaN(amount)) {
      setError('Please fill in all fields correctly.');
      return;
    }

    // Mock API call
    try {
      const response = await transferApi({ accountFrom, accountTo, amount, description });
      
      if (response.success) {
        setTransferStatus('Transfer successful!');
        // Clear the form fields after a successful transfer
        setAccountFrom('');
        setAccountTo('');
        setAmount('');
        setDescription('');
      } else {
        setError('Transfer failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  const transferApi = async ({ accountFrom, accountTo, amount, description }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };

  return (
    <div className="fund-transfer-container">
      <h2>Fund Transfer</h2>
      {error && <div className="error">{error}</div>}
      {transferStatus && <div className="success">{transferStatus}</div>}
      
      <div>
        <label>From Account</label>
        <input
          type="text"
          value={accountFrom}
          onChange={(e) => setAccountFrom(e.target.value)}
        />
      </div>
      
      <div>
        <label>To Account</label>
        <input
          type="text"
          value={accountTo}
          onChange={(e) => setAccountTo(e.target.value)}
        />
      </div>
      
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
}

export default Transfer;