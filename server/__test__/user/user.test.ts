import { createMocks, MockedServerType, PrismaMockType, UserType } from '../singleton';

describe('List all users', () => {
  let server: MockedServerType;
  let prisma: PrismaMockType;
  let mockedUser: UserType;

  beforeAll(async () => {
    const { mockedServer, prismaMock } = await createMocks();
    server = mockedServer;
    prisma = prismaMock;
  });
  // list all (empty) users
  // list all with orderBy
  // list one (id not found, cpf not found, email found)
  // create one (email fail, cpf fail)
  // update one (email fail, cpf fail)
  // delete one (id not found)

  it('should return a list of users', async () => {
    const result = await server.executeOperation({
      query: `
        query User {
          users {
            id
            email
            name
            cpf
          }
        }
      `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.users).toBeInstanceOf(Array);
    expect(result.data?.users?.length).toBeGreaterThan(0);
    expect(result.data?.users[0]).toHaveProperty('id');
    expect(result.data?.users[0]).toHaveProperty('email');
    expect(result.data?.users[0]).toHaveProperty('cpf');
  });

  it('should return a list of users with orderBy', async () => {
    const result = await server.executeOperation({
      query: `
        query User {
          users(orderBy: { id: desc }) {
            id
            email
            name
            cpf
          }
        }
      `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.users).toBeInstanceOf(Array);
    expect(result.data?.users?.length).toBeGreaterThan(0);
    expect(result.data?.users[0]).toHaveProperty('id');
    expect(result.data?.users[0]).toHaveProperty('email');
    expect(result.data?.users[0]).toHaveProperty('cpf');
  });

  it('should create a user', async () => {
    const result = await server.executeOperation({
      query: `
        mutation User {
          createUser(data: {
            email: "test@email.com"
            name: "Test User"
            cpf: "123.456.789-10"
          }) {
            id
            email
            name
            cpf
          }
        }
      `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.createUser).toHaveProperty('id');
    expect(result.data?.createUser).toHaveProperty('email');
    expect(result.data?.createUser).toHaveProperty('name');
    expect(result.data?.createUser).toHaveProperty('cpf');
    mockedUser = result.data?.createUser;
  });

  it('should list one user', async () => {
    const result = await server.executeOperation({
      query: `
        query User {
          user(where: { id: "${mockedUser.id}" }) {
            id
            email
            name
            cpf
          }
        }
      `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.user).toHaveProperty('id');
    expect(result.data?.user).toHaveProperty('email');
    expect(result.data?.user).toHaveProperty('name');
    expect(result.data?.user).toHaveProperty('cpf');
  });

  it('should update one user', async () => {
    const newEmail = 'newEmail@email.com';
    const newName = 'New Name';
    const newCpf = '987.654.321-00';

    const result = await server.executeOperation({
      query: `
        mutation User {
          updateUser(where: { id: "${mockedUser.id}" }, data: {
            email: { set: "${newEmail}" }
            name: { set: "${newName}" }
            cpf: { set: "${newCpf}" }
          }) {
            id
            email
            name
            cpf
          }
        }
      `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.updateUser).toHaveProperty('id');
    expect(result.data?.updateUser).toHaveProperty('email');
    expect(result.data?.updateUser).toHaveProperty('name');
    expect(result.data?.updateUser).toHaveProperty('cpf');
    expect(result.data?.updateUser.email).toBe(newEmail);
    expect(result.data?.updateUser.name).toBe(newName);
    expect(result.data?.updateUser.cpf).toBe(newCpf);
  });

  it('should delete one user', async () => {
    const result = await server.executeOperation({
      query: `
        mutation User {
          deleteUser(where: { id: "${mockedUser.id}" }) {
            id
            email
            name
            cpf
          }
        }
      `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.deleteUser).toHaveProperty('id');
    expect(result.data?.deleteUser).toHaveProperty('email');
    expect(result.data?.deleteUser).toHaveProperty('name');
    expect(result.data?.deleteUser).toHaveProperty('cpf');
  });
});
