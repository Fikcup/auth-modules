import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { booleanTransformer } from "@synconset/typeormutils";
import { FormQuestion } from "./formQuestion";

@Entity("forms")
export class Form {
  @PrimaryGeneratedColumn({ name: "Id", type: "int" })
  id!: number;

  @Column({ name: "UserId", type: "int" })
  userId!: number;

  @Column({
    name: "Enabled",
    nullable: false,
    type: "tinyint",
    transformer: booleanTransformer,
    default: () => false,
  })
  active!: boolean;

  @OneToMany(() => FormQuestion, (formQuestions) => formQuestions.formId)
  @JoinColumn([{ name: "id", referencedColumnName: "formId" }])
  questions!: FormQuestion[];

  @CreateDateColumn({ name: "CreatedAt", type: "timestamp", nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ name: "UpdatedAt", type: "timestamp", nullable: true })
  updatedAt!: Date | null;

  @DeleteDateColumn({ name: "DeletedAt", type: "timestamp", nullable: true })
  deletedAt!: Date | null;
}
