export const GET_USERS = `
  {
    users(orderBy: { created_at: asc }) {
      id
      email
      name
      cpf
      created_at
      updated_at
    }
  }
`;
