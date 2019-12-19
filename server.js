const express = require("express");
const router = require('express').Router();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get('/twits', (req, res) => {
  router.get(`https://api.stocktwits.com/api/2/streams/symbol/${req.body}.json`, (request, response) => {
    res.json(response);
  })
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
