import { MouseEvent, useEffect, useState } from "react";
import { useQuery } from "urql";
import { User } from "../../types/User";
import { Button } from "../common/Button/styles";
import { NewUserForm } from "../NewUserForm";
import { UserComponent } from "../User";
import { GET_USERS } from "./queries";
import { OrderedList } from "./styles";

type QueryResult = {
  users: User[];
};

export function UsersList() {
  const [{ fetching, data, error }] = useQuery<QueryResult>({
    query: GET_USERS,
  });
  const [showCreateUserForm, setShowCreateUserForm] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>{"Error :("}</p>;
  if (!data?.users || !users) return <p>No users</p>;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowCreateUserForm(!showCreateUserForm);
    return;
  };

  const handleNewUser = (newUser: User) => {
    if (users) {
      setUsers([...users, newUser]);
      setShowCreateUserForm(false);
    }
  };

  const handleDeletedUser = (id: string) => {
    if (users) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <OrderedList>
      {users.map((user) => (
        <UserComponent
          user={user}
          key={user.id}
          handleDeletedUser={handleDeletedUser}
        />
      ))}
      {showCreateUserForm && <NewUserForm getCreatedUser={handleNewUser} />}
      <Button type="button" onClick={handleClick}>
        {showCreateUserForm ? "Cancelar" : "Criar novo usuário"}
      </Button>
    </OrderedList>
  );
}
