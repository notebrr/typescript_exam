// import { movies, ratings } from '../data';
import { Movie, Context, Args } from '../types';
  export default {
    createMovie: (_parent:Movie, { input }:Args, {movies}:Context) => {
      if('director' in input){ // input is a Movie
        const newMovie: Movie = {
          id: String(movies.length + 1),
          title: input.title,
          director: input.director,
        };
        console.log('input: ', input, newMovie);
        movies.push(newMovie);
        return newMovie;
      } else {
        return null;
      }
      
    },

    deleteMovie: (_parent:never, { id }:Args, {movies}:Context) => {
      const index = movies.findIndex(person => person.id === id);
      if (index === -1) {
        return false; // person not found
      }
      movies.splice(index, 1);
      return true; // deletion successful
    },
    updateMovie: (_parent: never, { id, input }:Args, {movies}:Context) => {
      const index = movies.findIndex(person => person.id === id);
      if (index === -1) {
        return null; // person not found
      }
      const movie = movies[index];
      const updatedMovie = { ...movie, ...input };
      movies[index] = updatedMovie;
      return updatedMovie;
    }
  }