import Category from "./models/Category";

type Movie = {
    id: string;
    title: string;
    director: string;
    category?: Category[];
};

type Category = {
    id: string;
    name: string;
};

type Context = {
    movies: Movie[];
};
type Args = {
    id: string;
    input: Movie
};
export type { Movie, Context, Args };