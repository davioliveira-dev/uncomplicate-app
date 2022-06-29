import { CreateUserResolver, DeleteUserResolver, FindManyUserResolver, FindUniqueUserResolver, UpdateUserResolver } from '@generated/type-graphql';
import { buildSchema } from 'type-graphql';

export async function createSchema() {
  const schema = await buildSchema({
    resolvers: [FindUniqueUserResolver, FindManyUserResolver, CreateUserResolver, UpdateUserResolver, DeleteUserResolver],
  });

  return schema;
}
