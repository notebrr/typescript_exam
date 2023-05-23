// import { movies, categories } from '../data';
import { Movie, MovieArgs, Context } from '../types';
import movieModel from '../models/Movie';

    export default {
        movies: async (_parent:never, _args:MovieArgs) => await movieModel.find().populate('reviews'),
        movie: async (_parent:never, { id }:MovieArgs) => await movieModel.findById(id).populate('reviews'),
    }
