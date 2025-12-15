const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/send-money', async (req, res) => {
    const { amount, recipientAccount, senderId } = req.body;

    try {
        const sender = await User.findById(senderId);
        if (sender.balance < amount) {
            return res.status(400).json({ message: "Insufficient Funds" });
        }

        // Logic to deduct and credit...
        sender.balance -= parseFloat(amount);
        await sender.save();

        // Ensure the response returns the USD format
        return res.status(200).json({
            status: "Success",
            message: `Transfer of $${amount} was successful.`, // Changed from ₦ to $
            newBalance: `$${sender.balance.toFixed(2)}`
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
