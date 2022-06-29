import { MouseEvent, useRef } from "react";
import { toast } from "react-toastify";
import { useMutation } from "urql";
import { User } from "../../types/User";
import { CREATE_USER } from "./mutations";
import { Button, Input, ListItem } from "./styles";

type Props = {
  getCreatedUser: (newUser: User) => void;
};

export function NewUserForm({ getCreatedUser }: Props) {
  const [, submitCreatedUser] = useMutation<User>(CREATE_USER);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);

  const handleCreateUser = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const cpf = cpfRef.current?.value;

    if (!name) {
      return toast.error("Preencha o campo nome");
    }

    if (!email) {
      return toast.error("Preencha o campo email");
    }

    if (!cpf) {
      return toast.error("Preencha o campo cpf");
    }

    const newUser = {
      name,
      email,
      cpf,
    };

    submitCreatedUser(newUser);
    getCreatedUser(newUser as User);
    return toast.success("Usuário criado com sucesso.");
  };

  return (
    <ListItem>
      <Input
        type="text"
        name="nome"
        placeholder="Digite o nome do aluno"
        ref={nameRef}
      />
      <Input
        type="text"
        name="email"
        placeholder="Digite o email do aluno"
        inputMode="email"
        ref={emailRef}
      />
      <Input
        type="text"
        name="cpf"
        placeholder="Digite o CPF do aluno"
        inputMode="numeric"
        ref={cpfRef}
      />
      <Button type="button" onClick={handleCreateUser}>
        Criar
      </Button>
    </ListItem>
  );
}
