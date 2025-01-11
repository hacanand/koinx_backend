const express = require("express");
const statsRoute = require("./routes/stats");
const deviationRoute = require("./routes/deviation");

const app = express();

app.use(express.json());

app.use("/api", statsRoute);
app.use("/api", deviationRoute);

app.use((req, res) => res.status(404).json({ error: "Route not found" }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Crypto API" });
}
);

module.exports = app;
