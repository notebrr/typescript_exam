import { movies } from '../data';
import Movie from '../models/Movie';
import mongoose from 'mongoose';


const populateDB = async () => {
    try {
        // Connect to the database
        await mongoose.connect('mongodb+srv://rasmustaul:ax2@typescript.4hupe0d.mongodb.net/?retryWrites=true&w=majority', {
        });

        // Insert the movies data into the database
        await Movie.insertMany(movies);

        console.log('Data imported successfully!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

populateDB();
