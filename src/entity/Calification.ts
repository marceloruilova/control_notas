import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  Timestamp,
} from "typeorm";
import {
  Contains,
  Length,
  IsDate,
  IsDateString,
  IsNumberString,
  isDateString,
} from "class-validator";
import { Student } from "./Student";
import { Course } from "./Course";

@Entity()
export class Calification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  note: number;

  @Column()
  description: string;

  @Column()
  percentage: number;

  @OneToOne(() => Course) // specify inverse side as a second parameter
  course: Course;

  @OneToMany(() => Student, (student) => student.califications, {
    cascade: true,
  })
  students: Student[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
