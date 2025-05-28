import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: String,
  year: Number,
  rating: Number,
  genreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
