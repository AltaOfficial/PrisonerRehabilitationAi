const express = require('express');
const app = express();
const requests = require('request')
require("dotenv").config();
const apiRoute = require('./routes/api');

// middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is the backend");
});

// routes 
app.use('/api', apiRoute);

app.listen(5000, () => console.log("Server started on port 5000"));