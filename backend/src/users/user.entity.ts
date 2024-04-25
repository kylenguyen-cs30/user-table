import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  fName: string;

  @Column()
  @IsNotEmpty()
  lName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  phoneNum: string;
}
