const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", auth, (req, res) => {
  res.json([
    { date: "2025-11-10", description: "Grocery Store", amount: -54.23 },
    { date: "2025-11-08", description: "Salary", amount: 2500.00 },
    { date: "2025-11-05", description: "Electric Bill", amount: -120.00 }
  ]);
});

module.exports = router;
