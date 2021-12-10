import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Length, Min, Max, IsNumberString } from "class-validator";

export abstract class Information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNumberString()
  @Length(10, 10)
  ci: string;

  @Column()
  @Length(2, 25)
  first_name: string;

  @Column()
  @Length(2, 25)
  last_name: string;

  @Column({ nullable: true })
  @Min(0)
  @Max(120)
  age: number;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  gender: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
