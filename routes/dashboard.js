const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", auth, (req, res) => {
  res.json({
    name: "Ruth Allen",
    accounts: [
      { type: "Checking", balance: 4200.75 },
      { type: "Savings", balance: 12500.00 }
    ]
  });
});

module.exports = router;
