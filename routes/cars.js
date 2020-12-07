const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const axios = require('axios');

// Gets all cars
router.get('/', async (req, res) => {

  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.json({ message: err });
  }
});

// Gets a  specific car
router.get('/:carId', async (req, res) => {
  try {
    const car = await Car.findById(req.params.carId);
    res.json(car);
  } catch (err) {
    res.json({ message: err });
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
    const savedCar = await car.save();
    res.json(savedCar);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a car
router.delete('/:carId', async (req, res) => {
  console.log('del')
  try {
    const removedCar = await Car.remove({ _id: req.params.carId });
    res.json(removedCar);
  } catch (error) {
    res.json({ message: err });
  }
});



module.exports = router;
