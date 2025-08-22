const mongoose = require('mongoose');
const { logger } = require('./logger');

const MONGO_URI = process.env.MONGODB_URI;

async function connectMongo() {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error({ err }, 'MongoDB connection error');
    process.exit(1);
  }
}
module.exports = { connectMongo, mongoose };
