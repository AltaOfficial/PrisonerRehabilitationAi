const express = require('express');
const app = express();
require("dotenv").config();
const apiRoute = require('./api/api');
const cors = require("cors");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {
    res.send("This is the backend");
});

// routes 
app.use('/api', apiRoute);

app.listen(process.env.PORT, () => console.log("Server started on port 5000"));