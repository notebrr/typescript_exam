import { useState } from 'react'
import myLogo from './assets/logo.png'
import './App.css'
import MovieCard from "./components/MovieCard";
import Login from "./components/Login";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateMovie from "./components/CreateMovie";


const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

function App() {

  return (
    <div className="App">

        <BrowserRouter>
            <ApolloProvider client={client}>
                <Routes>
                    <Route path="/" element={<MovieCard />}/>
                    <Route path="/create-movie" element={<CreateMovie />}/>
                </Routes>
            </ApolloProvider>

        </BrowserRouter>
    </div>
  )
}

export default App
