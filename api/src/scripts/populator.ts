import mongoose from 'mongoose';

import { moviesData, reviewsData, categoriesData } from '../data';
import Category from "../models/Category";
import Movie from '../models/Movie';
import Review from '../models/Review';

const populateDB = async () => {
    try {
        // Connect to the database
        await mongoose.connect('mongodb+srv://rasmustaul:ax2@typescript.4hupe0d.mongodb.net/?retryWrites=true&w=majority', {
        });

        // Insert the category data into the database
        const createdCategories = await Category.insertMany(categoriesData);

        // Create a map of category names to their IDs
        const categoryMap = new Map();
        createdCategories.forEach(category => {
            categoryMap.set(category.name, category._id);
        });

        // Assign categoryId to movies and insert them into the database
        const moviesWithCategoryIds = moviesData.map(movie => ({
            ...movie,
            category: categoryMap.get(movie.category), // replace category name with its ID
        }));
        const createdMovies = await Movie.insertMany(moviesWithCategoryIds);

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
