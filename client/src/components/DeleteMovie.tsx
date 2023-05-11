import { Movie } from '../types';
import myLogo from "../assets/logo.png";
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { createMovie, deleteMovie, getMovies } from "../queries/queries";

export default ({movie}: { movie: Movie }) => {
    const {data, loading, error, refetch} = useQuery(getMovies)
    const [deleteMovieExec, {deleteData}] = useMutation(deleteMovie, {
        refetchQueries: [{query: getMovies}]
    })

    if (loading) {return <p>Loading...</p>}
    return (
        <div>
            <div>
                <a href="/">
                    <img src={myLogo} className="app logo" alt="App logo" />
                </a>
            </div>
            <h1>Movie app</h1>
            <div className="card">
                {data && data.movies.map((movie: any) =>
                    <div key={movie.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'black' }}>
                        <p style={{paddingRight:'5px'}}>{movie.title}</p>
                        <button onClick={() => {
                            deleteMovieExec({ variables: { id: movie.id } }).then(r => console.log(r))
                        }}>Delete</button>
                    </div>

                )}
            </div>

            <div>
                <a href="/create-movie">Create Movie</a>
            </div>

        </div>
    )
}
