const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

(async () => {
  console.log('Populating database...');

  const prisma = new PrismaClient();

  const hasUsers = await prisma.user.count();

  if (hasUsers && hasUsers > 0) {
    return;
  }

  const randomNumber = (numberLength = 3) => faker.random.numeric(numberLength);

  const data = Array.from({ length: 10 }).map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    cpf: `${randomNumber()}.${randomNumber()}.${randomNumber()}-${randomNumber(2)}`,
  }));

  await prisma.user.createMany({
    data,
  });

  await prisma.$disconnect();

  console.log('Database populated!');
})();
