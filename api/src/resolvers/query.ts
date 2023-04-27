// import { movies, categories } from '../data';
import { Movie, Args, Context } from '../types';
export default {
    // movies: (parent, args, context) => movies,
    movies: (_parent:never, _args:Args, {movies}:Context) => movies,
    movie: (_parent:never, { id }:Args, {movies}:Context) => { console.log('ID: ', id); const b = movies.find((movie) => movie.id === id); console.log(b); return b; },
}