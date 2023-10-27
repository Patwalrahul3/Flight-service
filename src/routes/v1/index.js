const express = require('express');
const router = express.Router();

const {InfoController} = require('../../controllers')

const airplaneRouter = require('./airplane-routes')

const cityRouter = require('./city-routes');

router.use('/airplane', airplaneRouter);
router.use('/cities', cityRouter);

router.get('/info', InfoController.info);


module.exports = router;