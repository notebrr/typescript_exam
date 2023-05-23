import { Movie } from '../types';
import myLogo from "../assets/logo.png";
import React, { useState } from "react";
import { useQuery } from "@apollo/client"
import { getMovies } from "../queries/queries";

export default ({movie}: { movie: Movie }) => {
    const { data, loading, error } = useQuery(getMovies);
    const [searchTerm, setSearchTerm] = useState("");

    if (loading) { return <p>Loading...</p> }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredMovies = searchTerm === "" ? "" : data?.movies.filter((movie: any) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

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
            </div>
            <div style={{marginBottom:"20px"}}>
                <a href="/create-movie">Create Movie</a>
                <br/>
                <a href="/delete-movie">Delete Movie</a>
            </div>
        </div>
    );
}
