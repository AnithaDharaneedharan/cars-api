const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const carsRoute = require('./routes/cars');
app.use('/cars', carsRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log('connect to db');
  }
);

app.get('/', (req, res) => {
  res.send('we are home');
});

app.listen(8000);
