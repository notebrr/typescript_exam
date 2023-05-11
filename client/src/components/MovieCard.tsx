import { Movie } from '../types';
import myLogo from "../assets/logo.png";
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { getMovies, updateMovie } from "../queries/queries";
import { useNavigate } from "react-router-dom";

export default ({ movie }: { movie: Movie }) => {
    const { data, loading, error } = useQuery(getMovies);
    const navigate = useNavigate();
    const [execUpdateMovie, { data: updateData, loading: updateLoading, error: updateError }] = useMutation(updateMovie);

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleButtonClick = async (id: number) => {
        console.log(`Button clicked for movie with ID ${id}`);
        navigate(`/update-movie/${id}`)

    };


    return (
        <div>
            <div>
                <a href="/">
                    <img src={myLogo} className="app logo" alt="App logo" />
                </a>
            </div>
            <h1>Movie app</h1>
            <div className="card">
                <input type="text" className="searchField" autoFocus={true} placeholder="Search movie" />

                {data && data.movies.map((movie: any) => (
                    <div key={movie.id} style={{ color: "black" }}>
                        {movie.title}
                        <button onClick={() => handleButtonClick(movie.id)}>Button</button>
                    </div>
                ))}
            </div>

            <div>
                <a href="/create-movie">Create Movie</a>
            </div>
        </div>
    );
}
