import { Movie } from '../types';
import myLogo from "../assets/logo.png";
import React from "react";
import {useQuery} from "@apollo/client"
import {getMovies} from "../queries/queries";
export default ({movie}: { movie: Movie }) => {
    const {data, loading, error} = useQuery(getMovies)
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
                <input type="text" className={"searchField"} autoFocus={true} placeholder={"Search movie"}/>

                {data && data.movies.map((movie: any) => <div key={movie.id} style={{color:"black"}}>{movie.title}</div>)}
            </div>

        </div>
    )
}