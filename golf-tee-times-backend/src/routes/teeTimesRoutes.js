// src/routes/teeTimesRoutes.js
const express = require('express');
const router = express.Router();
const { getTeeTimes } = require('../controllers/teeTimesController');

router.get('/', getTeeTimes);

module.exports = router;