
import { moviesData, reviewsData, category } from '../data';
import Movie from '../models/Movie';
import Review from '../models/Review';
import mongoose from 'mongoose';
import Category from "../models/Category";


const populateDB = async () => {
    try {
        // Connect to the database
        await mongoose.connect('mongodb+srv://rasmustaul:ax2@typescript.4hupe0d.mongodb.net/?retryWrites=true&w=majority', {
        });

        // Insert the movies data into the database
        await Movie.insertMany(movies);
        await Category.insertMany(category);
        const createdMovies = await Movie.insertMany(moviesData);

        // Create a map of movie titles to their IDs
        const movieMap = new Map();
        createdMovies.forEach(movie => {
            movieMap.set(movie.title, movie._id);
        });

        // Loop over the reviews data, create Review instances, and assign them to movies
        for (const { movieTitle, reviews } of reviewsData) {
            const movieId = movieMap.get(movieTitle);
            for (const reviewData of reviews) {
                const review = new Review(reviewData);
                await review.save();
                await Movie.updateOne({ _id: movieId }, { $push: { reviews: review._id } });
            }
        }

        console.log('Data imported successfully!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

populateDB();
