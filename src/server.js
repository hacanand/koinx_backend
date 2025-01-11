require("dotenv").config();
const cron = require("node-cron");
const connectDB = require("./config/db");
const fetchCryptoData = require("./jobs/fetchCrypto");
const app = require("./app");

const PORT = process.env.PORT || 3000;

connectDB();

// run the during the starting of the server
// fetchCryptoData();
cron.schedule("0 */2 * * *", fetchCryptoData); // Run the job every 2 hours
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Crypto API" });
// });
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
