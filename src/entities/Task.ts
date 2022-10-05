import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field(() => String)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => String)
  updatedAt: Date;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => Boolean)
  isCompleted: boolean;
}
