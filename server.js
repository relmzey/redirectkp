const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const WEB = process.env.WEB;

app.use((req, res) => {
    if (!WEB) {
        return res.status(500).send("WEB environment variable is not set.");
    }

    res.redirect(302, WEB);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Redirect server running on port ${PORT}`);
});
