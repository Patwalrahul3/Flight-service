const express = require('express');
const router = express.Router();

const {InfoController} = require('../../controllers')

const airplaneRouter = require('./airplane-routes')

const cityRouter = require('./city-routes');
const airportRouter = require('./airport-routes');
const flightRouter = require('./flight-routes')


router.use('/airplane', airplaneRouter);
router.use('/cities', cityRouter);
router.use('/airport', airportRouter);
router.use('/flight', flightRouter )

router.get('/info', InfoController.info);


module.exports = router;