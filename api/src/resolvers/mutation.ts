import { Movie, Review, Context, MovieArgs, ReviewArgs } from '../types';
import movieModel from '../models/Movie';
import reviewModel from "../models/Review";

export default {
  createMovie: async (_parent: undefined, { input }: MovieArgs, { movies }: Context) => {
    if ('director' in input) {
      return await movieModel.create(input);
    } else {
      return null;
    }
  },

  deleteMovie: async (_parent: never, { id }: MovieArgs, { movies }: Context) => {
    const index = await movieModel.findByIdAndDelete(id);
    if (index === null) {
      return false;
    }
    return true;
  },

  updateMovie: async (_parent: never, { id, input }: MovieArgs, _context: Context) => {
    try {
      const updatedMovie = await movieModel.findByIdAndUpdate(id, input, { new: true });

      if (!updatedMovie) {
        throw new Error('Movie not found');
      }

      return updatedMovie;
    } catch (error) {
      throw new Error('Failed to update movie');
    }
  },
  

  createReview: async (_parent: never, { movieId, input }: ReviewArgs, { movies }: Context) => {
    const movie = await movieModel.findById(movieId);
    if (!movie) {
      throw new Error('Movie not found');
    }

    // Create a new review object in the database
    const review = await reviewModel.create(input);

    // Save the review id to the movie's reviews array
    movie.reviews.push(review._id);

    // Save the movie document with the new review id
    await movie.save();

    // Return the created review
    return review;
  },

};
