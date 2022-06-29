import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';
import { createContext, createSchema } from './graphql';

(async () => {
  const schema = await createSchema();
  const context = createContext();

  const server = new ApolloServer({ schema, context: () => context, cache: 'bounded' });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
