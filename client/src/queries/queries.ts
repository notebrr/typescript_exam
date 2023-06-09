import { gql } from '@apollo/client';

export const getMovies =
    gql`
    query GetMovies {
      movies{
        id
        category {
        name
        }
        title
        director
        url
        description
      }
    }
  `;

export const getMovie = gql`
  query GetMovie($id: ID!) {
    movie(id: $id) {
      id
       category {
        name
       }
      title
      director
      url
      description
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
      category {
        id
        name
      }
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
    deleteMovie(id: $id)
  }
`;

export const createReview = gql`
mutation CreateReview($movieId: ID!, $input: ReviewInput!) {
    createReview(movieId: $movieId, input: $input) {
        id
        reviewerName
        rating
        comments
        }
}`
;


export const getCategories = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

