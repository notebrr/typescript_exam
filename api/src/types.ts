type Movie = {
    id: string;
    title: string;
    director: string;

};

type Context = {
    movies: Movie[];
};
type Args = {
    id: string;
    input: Movie
};
export type { Movie, Context, Args };