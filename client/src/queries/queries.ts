import { gql } from '@apollo/client';

export default {
    query: gql`
    query GetMovies {
      movies{
        id
        title
      }
    }
  `;

