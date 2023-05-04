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

