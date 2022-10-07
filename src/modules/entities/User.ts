import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('User')
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  name: string
}