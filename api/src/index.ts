import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema/graphql_schemas';
import resolvers from './resolvers/query';
import { movies } from './data';

const mongoose = require('mongoose');

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({
            movies
        })
    });

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb+srv://rasmustaul:ax2@typescript.4hupe0d.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
}

startServer();
