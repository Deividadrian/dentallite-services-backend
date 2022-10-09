import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  name: string
}