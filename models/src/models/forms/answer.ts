import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum SpendingValue {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

@Entity("answers")
export class Answer {
  @PrimaryGeneratedColumn({ name: "Id", type: "int" })
  id!: number;

  @Column({ name: "QuestionId", type: "int" })
  questionId!: number;

  @Column({ name: "Text", type: "varchar", length: 250, nullable: false })
  text!: string;

  @Column({ name: "Amount", type: "float" })
  amount!: number;

  @Column({ name: "SpendingValue", type: "enum", enum: SpendingValue })
  type!: SpendingValue;
}
