import Movie from '../models/Movie';

const movies = async () => {
    return await Movie.find();

}