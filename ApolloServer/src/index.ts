import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers.js';
import { ProductsDataSource } from './data_sources/products.js';
import axios from 'axios';
import { DocumentNode, GraphQLError, parse } from 'graphql';
import { buildSubgraphSchema } from '@apollo/subgraph'; 
import { join } from 'path';

interface ContextValue {
  dataSources: {
    productsAPI: ProductsDataSource;
  };
}

// Lire le contenu du fichier de schéma
const schemaFileContent = readFileSync('schema.graphql', 'utf8')
// Parser le contenu du fichier en DocumentNode
const typeDefs: DocumentNode = parse(schemaFileContent);

const server = new ApolloServer<ContextValue>({
  schema: buildSubgraphSchema({ typeDefs, resolvers }), 
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async({req,res}) => {
    
    return {
      dataSources: {
        productsAPI: new ProductsDataSource(),
      },
    };

  }
});
  
console.log(`🚀  Server ready at: ${url}`);