import { gql } from '@apollo/client';

export const getMovies =
    gql`
    query GetMovies {
      movies{
        id
        title
      }
    }
  `;




export const createMovie = gql`
  mutation CreateMovie($input: MovieInput!) {
    createMovie(input: $input) {
      id
      title
      director
      url
      description
    }
  }
`;

export const updateMovie = gql`
  mutation UpdateMovie($id: ID!, $input: MovieInput!) {
    updateMovie(id: $id, input: $input) {
      id
      title
      director
      url
      description
    }
  }
`;

export const deleteMovie = gql`
  mutation DeleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      id
      title
      director
      url
      description
    }
  }
`;

