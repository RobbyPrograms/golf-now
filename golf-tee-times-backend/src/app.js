// src/app.js
const express = require('express');
const teeTimesRoutes = require('./routes/teeTimesRoutes');

const app = express();

app.use('/api/tee-times', teeTimesRoutes);

module.exports = app;