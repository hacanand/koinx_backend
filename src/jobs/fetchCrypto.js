const axios = require("axios");
const Crypto = require("../models/Crypto");

const fetchCryptoData = async () => {
  const coins = ["bitcoin", "matic-network", "ethereum"];
  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(
        ","
      )}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
    );

    const cryptoData = coins.map((coin) => ({
      coin,
      price: data[coin].usd,
      marketCap: data[coin].usd_market_cap,
      change24h: data[coin].usd_24h_change,
    }));

    await Crypto.insertMany(cryptoData);
    console.log("Crypto data saved successfully");
  } catch (err) {
    console.error("Error fetching crypto data:", err.message);
  }
};

module.exports = fetchCryptoData;
