const express = require("express");

const app = express();
const PORT = 3000;

app.get("/api", (req, res) => {
    res.json({
        email: "olumideolubosede@gmail.com", // Replace with your registered email
        timestamp: new Date().toISOString(),
        github_url: "https://github.com/yourusername/hng12-api" // Replace with your GitHub repo URL
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

