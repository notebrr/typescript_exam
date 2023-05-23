import { Document } from "mongoose";


interface Category extends Document {
    id: ObjectId;
    name: string;
}

interface Review extends Document {
    id?: ObjectId;
    reviewerName: string;
    rating: number;
    comments: string;
}

interface Movie extends Document {
    id: ObjectId;
    title: string;
    director: string;
    reviews?: Review[];
    category?: Category;
    url: string;
    description: string;
}

type Context = {
    movies: Partial<Movie>[];
    reviews: Partial<Review>[];
};

interface MovieArgs {
    id: string;
    input: Partial<Movie>;
};

interface ReviewArgs {
    movieId: string;
    input: Partial<Review>;
};

export type { Movie, Context, MovieArgs, ReviewArgs, Review, Category };
