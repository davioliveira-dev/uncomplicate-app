import { Main, Title } from "./App.styles";
import { UsersList } from "./components/UsersList";
import { globalStyles } from "./themes";

function App() {
  globalStyles();

  return (
    <Main>
      <Title>Para editar qualquer usuário, basta clicar e digitar {":)"}</Title>
      <UsersList />
    </Main>
  );
}

export default App;
