import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import body_parser_pkg from 'body-parser';
const { json } = body_parser_pkg;
import express from 'express';
import cors from 'cors';
import typeDefs from './schema/graphql_schemas';
import Mutation from './resolvers/mutation';
import Query from './resolvers/query';
import { moviesData } from './data';
import usersRouter from './routes/users';
import mongoose from "mongoose";

const app = express();

interface MyContext {
  movies: typeof moviesData;
}

const httpServer = http.createServer(app);
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use('/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async() => ({
        movies: moviesData
      })},
    )
);

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 GraphQL Server ready at http://localhost:4000/graphql`);

app.get('*', function(req, res){
  res.send({ status: 404, message: 'Ressource not found' });
});

mongoose.connect('mongodb+srv://rasmustaul:ax2@typescript.4hupe0d.mongodb.net/?retryWrites=true&w=majority', {
}).then(()=>console.log("connected to database"));
