const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

// Global Setting for Currency
const APP_CURRENCY = {
    code: 'USD',
    symbol: '$'
};

// Middleware to inject currency settings into local variables
app.use((req, res, next) => {
    res.locals.currency = APP_CURRENCY.code;
    res.locals.symbol = APP_CURRENCY.symbol;
    next();
});

// Your existing routes
app.use('/api/users', require('./routes/user'));
app.use('/api/transactions', require('./routes/transfer'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`TrustBank Backend running on port ${PORT} in USD mode`));
