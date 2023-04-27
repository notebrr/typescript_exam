// import { movies, ratings } from '../data';
import { Movie, Context, Args } from '../types';

export default {
  createMovie: (_parent: undefined, { input }: Args, { movies }: Context) => {
    if ('director' in input) {
      const newMovie: Movie = {
        id: String(movies.length + 1),
        title: input.title,
        director: input.director,
      };
      movies.push(newMovie);
      return newMovie;
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
