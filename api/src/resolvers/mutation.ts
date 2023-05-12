// import { movies, ratings } from '../data';
import { Movie, Context, Args } from '../types';
import movieModel from '../models/Movie';
export default {
  createMovie: async (_parent: undefined, { input }: Args, { movies }: Context) => {
    if ('director' in input) {
      return await movieModel.create(input);
    } else {
      return null;
    }
  },

  deleteMovie: (_parent: never, { id }: Args, { movies }: Context) => {
    const index = movies.findIndex(movie => movie.id === id);
    if (index === -1) {
      return false;
    }
    movies.splice(index, 1);
    return true;
  },

  /*
  updateMovie: (_parent: never, { id, input }: Args, { movies }: Context) => {
    const index = movies.findIndex(movie => movie.id === id);
    if (index === -1) {
      throw new Error('Movie not found');
    }
    const movie = movies[index];
    const updatedMovie = { ...movie, ...input };
    movies[index] = updatedMovie;
    return updatedMovie;
  },

    */



  updateMovie: async (_parent: never, { id, input }: Args, _context: Context) => {
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


};
