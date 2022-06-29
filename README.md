# Uncomplicate App

A nice project with a nice development

---

## Requerimentos

Para rodar o projeto, você irá precisar ter instalado:

1. Node.js
2. Docker
3. docker-compose

## Instalação

---

Após clonar o projeto, basta dar um comando e pronto! Tudo
automatizado.

    $ git clone https://github.com/davioliveira-dev/uncomplicate-app
    $ cd uncomplicate-app
    $ docker-compose up
    $ // aguarde o log do backend pronto na porta 4000 e pode utilizar!
    $ // Por padrão, o backend roda na porta 4000 e o front na 3000!

## Sobre o ambient de DEV

Por padrão, todos os containers rodam com a versão de build.
Caso queira configurar para o ambiente de desenvolvimento, basta realizar estes passos:

1. Comentar todo o serviço uncomplicate-app-service no arquivo `dockercompose.yml` da pasta `server`.

2. Na pasta server, rodar:

```console
  docker-compose up -d
  npm install // ou yarn
  npm run dev // ou yarn dev
```

3. Pronto! Nenhuma configuração necessária no server, vamos para o client.

4. Entrando na pasta client, basta realizar:

```console
  npm install // ou yarn
  npm run dev // ou yarn dev
```

5. Pronto! Pode aproveitar :))

## Features bacanas

---

### O Apollo Server (no back) tem cacheamento nativo de todas as requisições.

<br>

### O backend tem um arquivo chamado `populate.js`, que automaticamente gera ao menos, 10 registros dentro da base.

<br>

### O frontend tem a possibilidade de editar, excluir e criar.

<br>

### Todos os resolvers foram gerados pelo prisma, pela forte integração com o GraphQL

---

## Ferramentas utilizados

Server:

1. Apollo Server
2. GraphQL
3. TypeGraphQL
4. Prisma
5. Faker
6. Jest

Client:

1. Vite
2. Stitches
3. URQL
4. GraphQL
5. React Toastify
