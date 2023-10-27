const express = require('express');
const { CityController } = require('../../controllers');
// const { AirplaneMiddlewares } = require('../../middlewares')
const router = express.Router();


// router.post('/',  AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);
router.post('/',   CityController.createCity);
router.get('/',  CityController.getCities);
router.get('/:id', CityController.getCity);
router.delete('/:id', CityController.destroyCity);

module.exports= router
