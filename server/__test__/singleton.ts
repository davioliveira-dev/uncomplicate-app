import { PrismaClient, User } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import 'reflect-metadata';
import { createSchema } from '../src/graphql/schema';
import { prisma } from '../src/services/prisma';

export async function createMocks() {
  const mockedSchema = await createSchema();

  const mockedServer = new ApolloServer({
    schema: mockedSchema,
    context: () => ({ prisma: prismaMock }),
  });

  jest.mock('../src/services/prisma', () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>(),
  }));

  const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

  return { mockedServer, prismaMock };
}

export type PrismaMockType = DeepMockProxy<PrismaClient>;
export type MockedServerType = ApolloServer;
export type UserType = User;
