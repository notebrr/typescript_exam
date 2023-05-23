import React, { useState } from 'react';
import myLogo from "../assets/logo.png";
import {useMutation, useQuery} from "@apollo/client";
import {createMovie, getCategories} from "../queries/queries";

function CreateMovie() {
    const [execCreateMovie, {data, loading, error}] = useMutation(createMovie);
    const [movieCreated, setMovieCreated] = useState(false);
    const whiteBackground = { backgroundColor: 'white' };
    const colorBlack = { color: 'black' };
    const { loading: categoryLoading, error: categoryError, data: categoryData } = useQuery(getCategories);

    const [movie, setMovie] = useState({
        title: '',
        director: '',
        url: '',
        description: '',
        categoryId: ''  // Add a category field
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(movie)
        await execCreateMovie({
            variables: {
                input: {
                    title: movie.title,
                    director: movie.director,
                    url: movie.url,
                    description: movie.description,
                    categoryId: movie.categoryId,
                }
            }
        })
        ;
        setMovieCreated(true);
    };

    // Handle loading and error states
    if (categoryLoading) return <p>Loading...</p>;
    if (categoryError) return <p>Error :(</p>;

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
                {/* ...rest of your form fields */}
                <label htmlFor="category" style={colorBlack}>Category:</label>
                <select id="category" name="category" style={whiteBackground} value={movie.category} onChange={handleChange}>
                    {categoryData.categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>

            {movieCreated ? <p style={colorBlack}>Film oprettet</p> : <p></p>}
        </div>
    );
}

export default CreateMovie;
