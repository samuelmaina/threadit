import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { TaskEntity } from "../entities/Task";

@Resolver()
export class TaskResolver {
  @Query(() => String)
  hello(): string {
    return "hello world";
  }

  @Query(() => [TaskEntity])
  async getAllTasks(): Promise<TaskEntity[]> {
    return await TaskEntity.find({});
  }

  @Query(() => TaskEntity, { nullable: true })
  async getTaskById(
    @Arg("id", () => Int) id: number
  ): Promise<TaskEntity | null> {
    return await TaskEntity.findOneBy({ id });
  }

  @Mutation(() => TaskEntity)
  async createTask(
    @Arg("title", () => String) title: string
  ): Promise<TaskEntity> {
    return await TaskEntity.create({ title, isCompleted: false }).save();
  }
}
