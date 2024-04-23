const express = require('express');
const app = express();
const requests = require('request')
require("dotenv").config();
const apiRoute = require('./routes/api');

// middleware
app.use(express.json());

// routes 
app.use('/api', apiRoute);

app.listen(process.env.PORT, () => console.log("Server started on port 5000"));