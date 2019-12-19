const express = require("express");
const axios = require('axios')
const router = express.Router();


router.get("/", async function(req, res) {
    axios.get(`https://api.stocktwits.com/api/2/streams/symbol/${req.query.stockSymbol}.json`)
    .then(response => {
        res.json(response.data.messages)
    })
    .catch(e => {
        res.status(404).json({ e });
    });
});

module.exports = router;