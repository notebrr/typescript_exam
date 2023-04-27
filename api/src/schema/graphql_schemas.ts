const typeDefs = `#graphql
  type Movie {
    id: ID!
    title: String!
    director: String!
    url: String
    description: String
  }

  type Query {
    movies: [Movie!]!
    movie(id: ID): Movie
  }

  type Mutation {
    createMovie(input: MovieInput!): Movie
    deleteMovie(id: ID!): Boolean
    updateMovie(id: ID!, input: MovieInput!): Movie
  }

  input MovieInput {
    title: String!
    director: String!
    url: String
    description: String
  }

`;

export default typeDefs;
