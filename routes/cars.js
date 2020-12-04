const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.get('/', async (req, res) => {
  try {
      const cars = await Car.find();
      res.json(cars)
  } catch (err) {
      res.json({message: err})
  }
});

router.post('/', async (req, res) => {
  const car = new Car({
    make: req.body.make,
    model: req.body.model,
    colour: req.body.colour,
  });
  try {
    const savedPost = await car.save();
    res.send(200).json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
