import { Movie } from '../types';
import myLogo from "../assets/logo.png";
import React from "react";
export default ({movie}: { movie: Movie }) => {

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
            </div>

        </div>
    )
}