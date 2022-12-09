import { ApolloServer, gql } from 'apollo-server';
import { randomUUID } from 'node:crypto';

// Utilizando a abordagem Schema first approach, que é quando eu preciso mexer 
// no Schema e depois eu vou no código
const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }

  # todas as rotas de leitura de dados
  type Query {
    # se eu não colocar o ! o GraphQL vai entender que o retorno pode não existir
    # ou seja, ele pode vir nulo
    users: [User!]!
  }

  # todas as rotas de escrita de dados
  type Mutation {
    createUser(name: String): User!
  }
`;

interface User {
  id: string;
  name: string;
}

const users: User[] = [];

const server = new ApolloServer({
  // typeDefs(typeDefinitions) nada mais é do que as rotas qua vamos ter na API
  typeDefs,
  // os resolvers do GraphQL é como se fossem os controlles do REST
  resolvers: {
    Query: {
      users: () => {
        return users
      }
    },
    Mutation: {
      createUser: (_, args) => {
        const user: User = {
          id: randomUUID(),
          name: args.name
        };
        
        users.push(user);

        return user;
      }
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 HTTP server running on ${url}`);
});