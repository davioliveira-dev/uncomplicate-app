export const UPDATE_USER = `
  mutation ($id: String!, $name: String!, $email: String!, $cpf: String!) {
    updateUser (data: { name: { set: $name }, email: { set: $email }, cpf: { set: $cpf } }, where: { id: $id }) {
      id
      name
      email
      cpf
      created_at
      updated_at
    }
  }
`;

export const DELETE_USER = `
  mutation ($id: String!) {
    deleteUser (where: { id: $id }) {
      id
    }
  }
`;
