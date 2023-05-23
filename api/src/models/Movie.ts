import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
});


const movieModel = mongoose.model('Movie', movieSchema);

export default movieModel;
