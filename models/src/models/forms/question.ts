import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Answer } from "./answer";

export enum QuestionType {
  FIXED = "fixed",
  ESTIMATED = "estimated",
}

@Entity("questions")
export class Question {
  @PrimaryGeneratedColumn({ name: "Id", type: "int" })
  id!: number;

  @Column({ name: "Text", type: "varchar", length: 250, nullable: false })
  text!: string;

  @OneToMany(() => Answer, (answers) => answers.questionId)
  @JoinColumn([{ name: "id", referencedColumnName: "questionId" }])
  answers!: Answer[];

  @Column({ name: "Type", type: "enum", enum: QuestionType })
  type!: QuestionType;
}
