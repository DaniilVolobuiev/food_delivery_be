import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderDto } from '../dto/order.dto';

@Entity()
export default class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  order: string;
}
