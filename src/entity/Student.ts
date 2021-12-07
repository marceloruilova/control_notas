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
import { Teacher } from "./Teacher";

@Entity()
export class Student extends Information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  detentions: string;

  @Column({ nullable: true })
  uniform_color: string;

  @Column()
  discipline: string;

  @ManyToMany(() => Teacher, (teacher) => teacher.students, { cascade: true })
  @JoinTable()
  teachers: Teacher[];

  @ManyToMany(() => Course, { cascade: true })
  @JoinTable()
  courses: Course[];

  @ManyToMany(() => Calification, (calification) => calification.students)
  @JoinTable()
  califications: Calification[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
