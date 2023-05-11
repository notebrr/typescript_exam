import {useParams} from "react-router-dom";

import React, { useState } from 'react';
import myLogo from "../assets/logo.png";
import {useMutation, useQuery} from "@apollo/client";
import {updateMovie} from "../queries/queries";


function UpdateMovie() {
    const [execUpdateMovie, {data, loading, error}] = useMutation(updateMovie)
    const whiteBackground = { backgroundColor: 'white' };
    const colorBlack = { color: 'black' };
    const { id } = useParams<{ id: string }>();
    console.log(id)

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(movie);
        await execUpdateMovie({
            variables: {
                id: id, // Ensure the type of id is ID
                input: {

                    title: movie.title,
                    director: movie.director,
                    url: movie.url,
                    description: movie.description,
                },
            },
        });
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
                <input type="text" id="title" name="title" style={{color:'black', backgroundColor:'white'}} value={movie.title} onChange={(e) => handleChange(e)} />
                <br/>
                <br/>
                <label htmlFor="director" style={colorBlack}>Director:</label>
                <input type="text" id="director" name="director" style={{color:'black', backgroundColor:'white'}} value={movie.director} onChange={(e) => handleChange(e)} />
                <br/>
                <br/>
                <label htmlFor="url" style={colorBlack}>Image URL:</label>
                <input type="text" id="url" name="url" style={{color:'black', backgroundColor:'white'}} value={movie.url} onChange={(e) => handleChange(e)} />
                <br/>
                <br/>
                <label htmlFor="description" style={colorBlack}>Description:</label>
                <textarea id="description" name="description" style={{color:'black', backgroundColor:'white'}} value={movie.description} onChange={(e) => handleChange(e)} />
                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UpdateMovie;