import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('specialty')
export class Specialty {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({type: 'text'})
  name: string

  @Column({type: 'text'})
  treatments: string
}