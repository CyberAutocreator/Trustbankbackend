const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path as needed
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    console.log("Connected to DB for migration...");
    
    // Update all users to USD and $ symbol
    const result = await User.updateMany({}, {
        $set: {
            currency: "USD",
            symbol: "$"
        }
    });

    console.log(`${result.modifiedCount} users updated to USD.`);
    process.exit();
})
.catch(err => console.log(err));
