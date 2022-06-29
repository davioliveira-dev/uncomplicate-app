export const CREATE_USER = `
  mutation ($name: String!, $email: String!, $cpf: String!) {
    createUser (data: { name: $name, email: $email, cpf: $cpf }) {
      id
      name
      email
      cpf
      created_at
      updated_at
    }
  }
`;
