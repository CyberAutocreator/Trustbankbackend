const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    accountNumber: {
        type: String,
        unique: true,
        required: true
    },

    balance: {
        type: Number,
        default: 0 // stored in cents for accuracy
    },

    currency: {
        type: String,
        default: "USD"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Auto‑generate account number if missing
UserSchema.pre('save', function (next) {
    if (!this.accountNumber) {
        this.accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    }
    next();
});

module.exports = mongoose.model('User', UserSchema);
