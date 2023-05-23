import React from 'react';
import myLogo from './assets/logo.png';
import './App.css';
import MovieCard from "./components/MovieCard";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateMovie from "./components/CreateMovie";
import UpdateMovie from "./components/UpdateMovie";
import DeleteMovie from "./components/DeleteMovie";
import CreateReview from "./components/CreateReview";


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
                    <Route path="/delete-movie" element={<DeleteMovie />}/>
                    <Route path="/update-movie/:id" element={<UpdateMovie />} />
                    <Route path="/create-review/:id" element={<CreateReview />} />
                </Routes>
            </ApolloProvider>

        </BrowserRouter>
    </div>
  )
}

export default App
