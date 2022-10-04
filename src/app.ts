import "reflect-metadata";
import express, { Express, Request, Response, NextFunction } from "express";
import { PORT } from "./config";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { TaskResolver } from "./resolvers/tast";

async function main() {
  const app: Express = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TaskResolver],
      validate: false,
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World");
    next();
  });
  app.listen(PORT, () => console.log("App started running on port + " + PORT));
}

main().catch((err: Error) => console.error("Some error occured" + err));
