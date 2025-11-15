const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", auth, (req, res) => {
  const { amount, toAccount } = req.body;
  res.json({ message: `Transferred $${amount} to ${toAccount}` });
});

module.exports = router;
