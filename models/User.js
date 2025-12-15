const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0.00 },
    // UPDATE THESE DEFAULTS BELOW
    currency: { type: String, default: 'USD' }, 
    symbol: { type: String, default: '$' },
    accountNumber: { type: String },
    status: { type: String, default: 'active' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
