import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

import schemaGraphql from './schema.graphql';

import resolversMap from '../resolvers/resolversMap';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: schemaGraphql,
  resolvers: resolversMap,
});

export default schema;
