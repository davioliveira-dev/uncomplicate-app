import { FocusEvent, MouseEvent, useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "urql";
import { User } from "../../types/User";
import { ListItem, TrashIcon } from "../common";
import { DELETE_USER, UPDATE_USER } from "./mutations";

type Props = {
  user: User;
  handleDeletedUser: (id: string) => void;
};

export function UserComponent({ user, handleDeletedUser }: Props) {
  const [{ fetching }, handleUpdateUser] = useMutation<User>(UPDATE_USER);
  const [, submitDeletedUser] = useMutation<string>(DELETE_USER);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleEditUser = (e: FocusEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.textContent;
    const userField = e.currentTarget.id;

    if (newValue === user[userField] || !newValue) {
      return;
    }

    const newUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      [userField]: newValue,
    };

    handleUpdateUser(newUser);
    setUpdatedUser({ ...user, ...newUser });
    return toast.success("Usuário editado com sucesso.");
  };

  const handleDeleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    submitDeletedUser({ id: user.id });
    handleDeletedUser(user.id);
    return toast.success("Usuário deletado com sucesso.");
  };

  return (
    <ListItem>
      <p contentEditable onBlur={handleEditUser} id="name">
        {fetching ? "..." : updatedUser ? updatedUser.name : user.name}
      </p>
      <p contentEditable onBlur={handleEditUser} id="email">
        {fetching ? "..." : updatedUser ? updatedUser.email : user.email}
      </p>
      <p contentEditable onBlur={handleEditUser} id="cpf">
        {fetching ? "..." : updatedUser ? updatedUser.cpf : user.cpf}
      </p>
      <TrashIcon className="gg-trash" onClick={handleDeleteUser} />
    </ListItem>
  );
}
