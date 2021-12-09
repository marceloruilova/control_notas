import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  ManyToMany,
  OneToMany,
  Timestamp,
} from "typeorm";
import { Contains, Length, IsDateString, Max, Min } from "class-validator";
import { Student } from "./Student";
import { Course } from "./Course";

@Entity()
export class Calification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Min(0)
  @Max(50)
  note: number;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Course)
  course: Course;

  @ManyToMany(() => Student, (student) => student.califications)
  students: Student[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
