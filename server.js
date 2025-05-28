// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import genreRoutes from './routes/genres.js';
import movieRoutes from './routes/movies.js';

// Load environment variables early
dotenv.config({path: './config/.env'});


const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/genres', genreRoutes);
app.use('/api/movies', movieRoutes);

// Basic root route
app.get('/', (req, res) => {
  res.send('Movie Collection Tracker API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
