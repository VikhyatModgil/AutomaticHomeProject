import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { mongooseServer } from "../mongoose/mongoose";
import config from '../config'


// Start GraphQl
export const apollo =  () => {
    
    // Create a server using expressJS
    const app = express();

    // Init the Apollo server using the "./typeDefs" and "./resovers".
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    // Make Apollo use the expressJS web server
    server.applyMiddleware({ app });

    // Start Mongoose server
    mongooseServer().then(async (mon) => {
        app.listen({ port: config.graphQlPort }, () =>
            console.log(`Starting GraphQL Server on Port: ${config.graphQlPort}${server.graphqlPath}`)
        )
    })
        
}