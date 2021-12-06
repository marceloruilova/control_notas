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

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  grade: string;

  @Column()
  level: string;

  @Column()
  floor: number;

  @Column()
  percentage: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
