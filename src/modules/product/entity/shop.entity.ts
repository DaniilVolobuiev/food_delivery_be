import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Product from './product.entity';

@Entity()
export default class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.shop)
  @JoinColumn({ name: 'shopId' })
  products: Product[];

  @Column('float')
  lat: number;

  @Column('float')
  lng: number;
}
