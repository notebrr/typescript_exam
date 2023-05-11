import React, { useState } from 'react';
import myLogo from "../assets/logo.png";
import {useMutation} from "@apollo/client";
import {createMovie} from "..";

function CreateMovie() {
    const [createMovie, {data, loading, error}] = useMutation(createMovieMutation)
    const whiteBackground = { backgroundColor: 'white' };
    const colorBlack = { color: 'black' };
    const [movie, setMovie] = useState({
        title: '',
        director: '',
        url: '',
        description: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle submitting the movie data
        console.log(movie);
    };

    return (
        <div>
            <div>
                <a href="/">
                    <img src={myLogo} className="app logo" alt="App logo" />
                    <br/>
                    <br/>
                </a>
            </div>

        <form onSubmit={handleSubmit}>
            <label htmlFor="title" style={colorBlack}>Title:</label>
            <input type="text" id="title" name="title" style={whiteBackground} value={movie.title} onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor="director" style={colorBlack}>Director:</label>
            <input type="text" id="director" name="director" style={whiteBackground} value={movie.director} onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor="url" style={colorBlack}>Image URL:</label>
            <input type="text" id="url" name="url" style={whiteBackground} value={movie.url} onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor="description" style={colorBlack}>Description:</label>
            <textarea id="description" name="description" style={whiteBackground} value={movie.description} onChange={handleChange} />
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default CreateMovie;