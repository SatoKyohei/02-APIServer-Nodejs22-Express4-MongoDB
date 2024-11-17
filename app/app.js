const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// MongoDB設定
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sokxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "DB connection error:"));
db.once("open", () => console.log("DB connection successful"));

// ルーティング設定
const router = require('./routes/v1/');
app.use('/api/v1/', router);


app.listen(port, () =>
    console.log(`Express Server listening on port ${port}!`)
);


