import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Information } from "./Information";
import { Calification } from "./Calification";
import { Course } from "./Course";

@Entity()
export class Student extends Information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rules: string;

  @Column()
  uniform: string;

  @Column()
  discipline: string;

  @ManyToMany(() => Course)
  @JoinTable()
  courses: Course[];

  @ManyToOne(() => Calification, (calification) => calification.students)
  califications: Calification;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
