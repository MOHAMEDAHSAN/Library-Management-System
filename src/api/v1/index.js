const express = require('express');
const librarySystemRouter = require('./routes/librarySystem.routes');

const router = express.Router();

router.use('/library', librarySystemRouter);

module.exports = router;
