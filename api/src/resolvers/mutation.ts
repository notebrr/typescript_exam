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

  deleteMovie: async (_parent: never, { id }: Args, { movies }: Context) => {
    const index = await movieModel.findByIdAndDelete(id);
    if (index === null) {
      return false;
    }
    return true;
  },

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
};
