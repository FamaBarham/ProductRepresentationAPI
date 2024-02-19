// const { ApolloServer } = require('@apollo/server');
// const { startStandaloneServer } = require('@apollo/server/standalone');
// const { buildSubgraphSchema } = require("@apollo/subgraph");
// const { readFileSync } = require('fs');
// const gql = require('graphql-tag');
// const typeDefs = gql(readFileSync('./src/definitions.graphql', { encoding: 'utf-8' }));
// const resolvers = require('src/resolvers');
// const productDefAPI = require('src/productDataSource');
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from "@apollo/subgraph";
import { readFileSync } from "fs";
import gql from "graphql-tag";
import resolvers from "./resolvers.js";
import ProductAPI from "./productDataSource.js";
const typeDefs = gql(readFileSync('./src/definitions.graphql', { encoding: 'utf-8' }));
async function startApolloServer() {
    const server = new ApolloServer({ schema: buildSubgraphSchema({ typeDefs, resolvers }) });
    const port = 4001;
    const subgraphName = 'Product Definition';
    try {
        const { url } = await startStandaloneServer(server, {
            context: async () => {
                return {
                    dataSources: {
                        productDefAPI: new ProductAPI(),
                    },
                };
            },
            listen: { port },
        });
        console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
    }
    catch (err) {
        console.error(err);
    }
}
startApolloServer();
