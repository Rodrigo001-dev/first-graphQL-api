import 'reflect-metadata';

import path from 'node:path';

import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { AppointmentsResolver } from './resolvers/appointments-resolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      AppointmentsResolver,
    ],
    // o emitSchemaFile quer dizer que vai ser gerado um arquivo com oschema graphQL
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });
  
  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen();

  console.log(`🚀 HTTP server running on ${url}`);
}

bootstrap();