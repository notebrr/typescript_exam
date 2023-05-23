const typeDefs = `
type Movie {
  id: ID!
  title: String!
  director: String!
  url: String
  description: String
  reviews: [Review!]!
}

type Review {
  id: ID!
  reviewerName: String!
  rating: Int!
  comments: String!
}

type Query {
  movies: [Movie!]!
  movie(id: ID): Movie
}

type Mutation {
  createMovie(input: MovieInput!): Movie
  deleteMovie(id: ID!): Boolean
  updateMovie(id: ID!, input: MovieInput!): Movie
  createReview(movieId: ID!, input: ReviewInput!): Review
}

input MovieInput {
  title: String!
  director: String!
  url: String
  description: String
}

input ReviewInput {
  reviewerName: String!
  rating: Int!
  comments: String!
}
`;

export default typeDefs;
