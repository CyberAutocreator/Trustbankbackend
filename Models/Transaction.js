const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    recipientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    amount: {
        type: Number,
        required: true // stored in cents
    },

    currency: {
        type: String,
        default: "USD"
    },

    type: {
        type: String,
        enum: ["debit", "credit"],
        required: true
    },

    description: {
        type: String,
        default: "Money Transfer"
    },

    status: {
        type: String,
        enum: ["success", "failed", "pending"],
        default: "success"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
