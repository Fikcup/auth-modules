import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("formquestions")
export class FormQuestion {
  @PrimaryGeneratedColumn({ name: "Id", type: "int" })
  id!: number;

  @Column({ name: "FormId", type: "int" })
  formId!: number;

  @CreateDateColumn({ name: "CreatedAt", type: "timestamp", nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ name: "UpdatedAt", type: "timestamp", nullable: true })
  updatedAt!: Date | null;

  @DeleteDateColumn({ name: "DeletedAt", type: "timestamp", nullable: true })
  deletedAt!: Date | null;
}
