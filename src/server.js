require("dotenv").config();
const cron = require("node-cron");
const connectDB = require("./config/db");
const fetchCryptoData = require("./jobs/fetchCrypto");
const app = require("./app");

const PORT = process.env.PORT || 5000;

connectDB();

cron.schedule("0 */2 * * *", fetchCryptoData);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
