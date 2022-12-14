import "reflect-metadata";
import express, { Express, Request, Response, NextFunction } from "express";
import { PORT } from "./config";
import { ApolloServer, ExpressContext } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { TaskResolver } from "./resolvers/tast";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import connectToDB from "./utils/connectToDB";

async function main() {
  const app: Express = express();

  await connectToDB();

  const apolloServer: ApolloServer<ExpressContext> = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TaskResolver],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(PORT, () => console.log("App started running on port + " + PORT));
}

main().catch((err: Error) => console.error("Some error occured" + err));
