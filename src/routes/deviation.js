const express = require("express");
const calculateSD = require("../utils/calculateSD");
const Crypto = require("../models/Crypto");
const connectDB = require("../config/db");

const router = express.Router();

router.get("/deviation", async (req, res) => {
  const { coin } = req.query;

  if (!coin) {
    return res.status(400).json({ error: "Coin is required" });
  }

    try {
      connectDB();
    const records = await Crypto.find({ coin })
      .sort({ timestamp: -1 })
      .limit(100);

    if (records.length === 0) {
      return res
        .status(404)
        .json({ error: "No data found for the requested coin" });
    }

    const prices = records.map((record) => record.price);
    const deviation = calculateSD(prices);

    res.json({ deviation });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
