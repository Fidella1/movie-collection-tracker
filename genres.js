import express from 'express';
import Genre from '../models/Genre.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const genre = new Genre(req.body);
    const saved = await genre.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  const genres = await Genre.find();
  res.json(genres);
});

// Add this GET by ID route
router.get('/:id', async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    res.json(genre);
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
});

export default router;
