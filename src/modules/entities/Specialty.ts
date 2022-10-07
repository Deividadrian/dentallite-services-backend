import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('specialty')
export class Specialty {

  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  name: string

  @Column({type: 'text'})
  treatments: string
}