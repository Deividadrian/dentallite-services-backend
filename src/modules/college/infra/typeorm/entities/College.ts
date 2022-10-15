import { type } from "os";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('college')
export class College {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({type: 'text'})
  name: string

  @Column({type: 'text'})
  city: string
  
  @Column({type: 'text'})
  state: string
}