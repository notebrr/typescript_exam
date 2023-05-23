// import { movies, categories } from '../data';
import { Movie, Args, Context } from '../types';
import movieModel from '../models/Movie';
export default {
    // movies: (parent, args, context) => movies,
    movies: async (_parent:never, _args:Args) => await movieModel.find().populate('category'),
    movie: async (_parent:never, { id }:Args) => await movieModel.findById(id).populate('category'),
}
