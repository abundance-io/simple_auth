import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  PrimaryColumn,
  Unique,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'fullname', length: 100, nullable: false })
  fullname: string;

  @Unique(['email'])
  @Column({ name: 'email', length: 100, nullable: false })
  email: string;

  @Column({ name: 'password', length: 100, nullable: false })
  password: string;

  @Column({ name: 'age', nullable: false })
  age: number;
}
