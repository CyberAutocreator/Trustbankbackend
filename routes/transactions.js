const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

// Fake transaction generator
router.get('/transactions', verifyToken, (req, res) => {
  const transactions = [];

  for (let i = 0; i < 100; i++) {
    transactions.push({
      id: i + 1,
      date: new Date(Date.now() - i * 86400000).toISOString().split('T')[0],
      amount: (Math.random() * 10000).toFixed(2),
      type: Math.random() > 0.5 ? 'credit' : 'debit',
      description: `Transaction #${i + 1}`
    });
  }

  res.json({
    totalBalance: 560000,
    totalTransactions: 990453,
    recent: transactions
  });
});

module.exports = router;
