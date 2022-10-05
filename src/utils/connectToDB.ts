import { createConnection } from "typeorm";
import { DATABASE, PASSWORD } from "../config";
import { TaskEntity } from "../entities/Task";

export default async function connectToDB() {
  try {
    const conn = await createConnection({
      type: "postgres",
      database: DATABASE,
      entities: [TaskEntity],
      username: "postgres",
      password: PASSWORD,
      logging: true,
      //used to create migration that are
      synchronize: true,
    });
    if (conn) {
      console.log("Successfully connected to the database.");
    }
  } catch (error) {
    console.log("Had an error when connecting to the database : ", error);
  }
}
