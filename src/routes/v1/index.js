const express = require('express');
const router = express.Router();

const {InfoController} = require('../../controllers')

const airplaneRouter = require('./airplane-routes')

const cityRouter = require('./city-routes');
const airportRouter = require('./airport-routes');

router.use('/airplane', airplaneRouter);
router.use('/cities', cityRouter);
router.use('/airport', airportRouter);

router.get('/info', InfoController.info);


module.exports = router;