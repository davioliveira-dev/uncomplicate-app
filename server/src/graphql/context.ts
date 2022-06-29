import { prisma } from '../services/prisma';

export function createContext() {
  const context = { prisma };

  return context;
}
