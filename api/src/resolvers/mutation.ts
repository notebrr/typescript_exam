// import { movies, ratings } from '../data';
import { Movie, Context, Args } from '../types';
import movieModel from '../models/Movie';
import categoryModel from "../models/Category";
export default {
  createMovie: async (_parent: undefined, { input }: Args, { movies }: Context) => {
    if ('director' in input && 'categoryId' in input) {
      const category = await categoryModel.findById(input.categoryId);
      if (!category) {
        throw new Error('Category not found');
      }

      const newMovie = {
        ...input,
        category: category._id,
      };

      return await movieModel.create(newMovie);
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
