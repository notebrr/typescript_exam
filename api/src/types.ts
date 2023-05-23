type Movie = {
    id: string;
    title: string;
    director: string;
    url: string;
    description: string;
    categoryId: string;
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
    input: Movie;
};

export type { Movie, Context, Args, Category };
