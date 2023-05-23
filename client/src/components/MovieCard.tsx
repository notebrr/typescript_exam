import { Movie } from '../types';
import myLogo from "../assets/logo.png";
import React, { useState } from "react";
import { useQuery,useMutation } from "@apollo/client"
import { getMovies, updateMovie } from "../queries/queries";

import { useNavigate } from "react-router-dom";

export default ({movie}: { movie: Movie }) => {
    const { data, loading, error } = useQuery(getMovies);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const [execUpdateMovie, { data: updateData, loading: updateLoading, error: updateError }] = useMutation(updateMovie);


    if (loading) { return <p>Loading...</p> }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredMovies = searchTerm === "" ? "" : data?.movies.filter((movie: any) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleButtonClick = async (id: number) => {
        console.log(`Button clicked for movie with ID ${id}`);
        navigate(`/update-movie/${id}`)

    };


    return (
        <div>
            <div style={{paddingBottom:"10px"}}>
                <a href="/">
                    <img src={myLogo} className="app logo" alt="App logo" />
                </a>
            </div>
            <h1>Movie app</h1>
            <div className="card" style={{paddingBottom:"10px", paddingTop:"40px"}}>
                <input
                    type="text"
                    className={"searchField"}
                    autoFocus={true}
                    placeholder={"Search movie"}
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {filteredMovies && filteredMovies.map((movie: any) =>
                    <div key={movie.id} style={{color:"black"}}>
                        <br/>
                        <img src={movie.url} alt="Image not found" style={{maxWidth:"100px"}}/>
                        <br/>
                        {movie.category}
                        <br/>
                        <br/>
                        {movie.title}
                        <br/>
                        <br/>
                        {movie.description}

                        <br/>
                        <br/>
                        <hr/>
                    </div>
                )}
                {data && data.movies.map((movie: any) => (
                    <div key={movie.id} style={{ color: "black" }}>
                        {movie.title}
                        <button onClick={() => handleButtonClick(movie.id)}>Button</button>
                    </div>
                ))}
            </div>
            <div style={{marginBottom:"20px"}}>
                <a href="/create-movie">Create Movie</a>
                <br/>
                <a href="/delete-movie">Delete Movie</a>
            </div>
        </div>
    );
}