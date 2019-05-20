const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", (req, res)=>{
    axios
    .get("https://api.meetup.com/sandiegojs/events?&sign=true&photo-host=public&page=20")
    .then(result => res.send(result.data));
});

module.exports = app;
