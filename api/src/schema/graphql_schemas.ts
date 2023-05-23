const typeDefs = `
type Movie {
  id: ID!
  category: Category
  title: String!
  director: String!
  url: String
  description: String
}

type Category {
  id: ID!
  name: String!
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
  categoryId: ID
}
`;

export default typeDefs;
