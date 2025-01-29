const express = require("express");
const cors = require('cors');

const app = express();
// const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        email: "olumideolubosede@gmail.com",
        timestamp: new Date().toISOString(),
        github_url: "https://github.com/LordOlumide/hng_12_backend_task_0"
    });
});

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// export the app for vercel serverless functions
module.exports = app;
