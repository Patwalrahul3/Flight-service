const express = require('express');
const router = express.Router();

const {InfoController} = require('../../controllers')

const airplaneRouter = require('./airplane-routes')

router.use('/airplane', airplaneRouter);

router.get('/info', InfoController.info);


module.exports = router;