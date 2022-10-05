import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { TaskEntity } from "../entities/Task";

@Resolver()
export class TaskResolver {
  @Query(() => String)
  hello(): string {
    return "hello world";
  }

  @Mutation(() => TaskEntity)
  async createTask(
    @Arg("title", () => String) title: string
  ): Promise<TaskEntity> {
    return await TaskEntity.create({ title, isCompleted: false }).save();
  }
}
