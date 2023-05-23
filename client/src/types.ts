type Movie = {
    _id?: string;
    category?: {
        name: string;
    };
    title: string;
    director: string;
    rating_average: number;
    url: string;
    description: string;
}

type User = {
    isLoggedin: boolean;
    email: string;
    password: string;
    roles:{
        role: string
    }
}
export type {Movie, User}