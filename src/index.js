require('dotenv').config();

const express = require('express');
const http = require('http');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const mongoose = require('mongoose');
const { connectMongo } = require('./config/mongo');
const v1Router = require('./api/v1');

const app = express();


app.use(express.json());  // 👈 this line is required to parse JSON bodies



// CORS setup
const allowedOrigins = process.env.ORIGINS
  ? process.env.ORIGINS.split(',').map((o) => o.trim())
  : [];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

// Rate limiting in production
if (process.env.NODE_ENV !== 'development') {
  const limiter = rateLimit({
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // default 15 min
    max: Number(process.env.RATE_LIMIT_MAX) || 100, // default 100 requests
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use(limiter);
}

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.use('/api/v1', v1Router);


const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectMongo();
    console.log('MongoDB Connected:', mongoose.connection.readyState === 1);

  
      http.createServer(app).listen(PORT, () => {
        console.log(`HTTP server running on port ${PORT}`);
      });
    
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

startServer();

