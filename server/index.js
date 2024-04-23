const express = require('express');
const app = express();
const requests = require('request')
require("dotenv").config();
const apiRoute = require('./api/api');

// middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is the backend");
});

// routes 
app.use('/api', apiRoute);

app.listen(process.env.PORT, () => console.log("Server started on port 5000"));