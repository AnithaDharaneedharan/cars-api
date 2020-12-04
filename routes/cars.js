const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Gets all cars
router.get('/', async (req, res) => {
  try {
      const cars = await Car.find();
      res.send(200).json(cars);
  } catch (err) {
      res.json({message: err})
  }
});

// Gets a  specific car 
router.get('/:carId', async (req, res) => {
    try {
        const car = await Car.findById(req.params.carId);
        res.send(200).json(car);
    } catch (err) {
        res.json({message: err})
    }
  });

// Submits a car
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
