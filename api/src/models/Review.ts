import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    reviewerName: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comments: String,
});

const reviewModel = mongoose.model('Review', reviewSchema);

export default  reviewModel;
