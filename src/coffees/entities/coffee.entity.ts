import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //typeorm decorator to map the entity to a table
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @Column('json', { nullable: true }) // store array in json, allow null
  flavors: string[];
}
