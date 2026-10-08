const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "1.0.0";

app.get("/", (req, res) => {
    res.json({
        application: "DevOps CI/CD Demo",
        message: "Application is running successfully!",
        version: VERSION
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

app.get("/version", (req, res) => {
    res.json({
        version: VERSION
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});