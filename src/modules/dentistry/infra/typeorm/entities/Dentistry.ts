import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('dentistry')
export class Dentistry {

  @PrimaryGeneratedColumn()
  id: string

  @Column({type: 'text'})
  name: string

  @Column({type: 'text'})
  college: string

  @Column({type: 'text'})
  state: string

  @Column({type: 'text'})
  city: string

  @Column({type: 'text'})
  cellphone: string
}