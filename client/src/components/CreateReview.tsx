import {useParams} from "react-router-dom";
import React, { useState } from 'react';
import myLogo from "../assets/logo.png";
import {useMutation} from "@apollo/client";
import {createReview} from "../queries/queries";

function CreateReview() {
    const [execCreateReview, {data, loading, error}] = useMutation(createReview)
    const colorBlack = { color: 'black' };
    const { id } = useParams<{ id: string }>();

    const [review, setReview] = useState({
        reviewerName: '',
        rating: 0,
        comments: '',
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setReview((prevReview) => ({ ...prevReview, [name]: name === 'rating' ? parseInt(value, 10) : value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await execCreateReview({
            variables: {
                movieId: id,
                input: {
                    reviewerName: review.reviewerName,
                    rating: review.rating,
                    comments: review.comments,
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
                <label htmlFor="reviewerName" style={colorBlack}>Reviewer Name:</label>
                <input id="reviewerName" name="reviewerName" style={{color:'black', backgroundColor:'white'}} value={review.reviewerName} onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="rating" style={colorBlack}>Rating:</label>
                <input type="number" id="rating" name="rating" style={{color:'black', backgroundColor:'white'}} value={review.rating} onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="comments" style={colorBlack}>Review Comments:</label>
                <textarea id="comments" name="comments" style={{color:'black', backgroundColor:'white'}} value={review.comments} onChange={handleChange} />
                <br/>
                <br/>
                <button type="submit">Add Review</button>
            </form>

        </div>
    );
}

export default CreateReview;
