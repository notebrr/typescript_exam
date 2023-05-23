

type Movie = {
    id: string;
    title: string;
    director: string;
    reviews?: Review[];
    category?: Category;
};

type Review = {
    id?: string;
    reviewerName: string;
    rating: number;
    comments: string;
};

type Category = {
    id: string;
    name: string;
};

type Context = {
    movies: Movie[];
    reviews: Review[];
};

type MovieArgs = {
    id: string;
    input: Movie;
};

type ReviewArgs = {
    movieId: string;
    input: Review;
};

export type { Movie, Context, MovieArgs, ReviewArgs, Review, Category };

