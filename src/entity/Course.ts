import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToMany,
  JoinTable,
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

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: string;

  @Column({ nullable: true })
  floor: number;

  @Column()
  percentage: number;

  @ManyToMany(() => Student, (student) => student.courses)
  @JoinTable()
  students: Student[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
