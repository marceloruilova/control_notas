import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  JoinTable,
  ManyToMany,
} from "typeorm";
import {
  Contains,
  Length,
  Min,
  Max,
  IsMilitaryTime,
  IsDate,
  IsDateString,
  IsNumberString,
  isDateString,
} from "class-validator";
import { Student } from "./Student";
import { Course } from "./Course";
import { Calification } from "./Calification";
import { Information } from "./Information";

@Entity()
export class Teacher extends Information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  degree: string;

  @Column()
  university: string;

  @Column()
  phd: string;

  @ManyToMany(() => Student)
  @JoinTable()
  students: Student[];

  @ManyToMany(() => Course)
  @JoinTable()
  courses: Course[];

  @ManyToMany(() => Calification)
  @JoinTable()
  califications: Calification[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
