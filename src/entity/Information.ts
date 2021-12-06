import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import {
  Contains,
  Length,
  Min,
  Max,
  IsDateString,
  IsNumberString,
} from "class-validator";

export abstract class Information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNumberString()
  @Length(10, 10)
  ci: string;

  @Column()
  @Length(2, 25)
  firstName: string;

  @Column()
  @Length(2, 25)
  last_name: string;

  @Column()
  @Min(0)
  @Max(120)
  age: number;

  @Column()
  email: string;

  @Column()
  gender: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
