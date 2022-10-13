import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({type: 'text'})
  name: string
}