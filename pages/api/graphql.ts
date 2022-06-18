import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../graphql/schema';
import Cors from 'micro-cors';
import { resolvers } from '../../graphql/resolvers'
import prisma from '../../lib/prisma'

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
