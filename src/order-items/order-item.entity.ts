import { OrderEntity } from './../orders/orders.entity';
import { Product } from '../products/products.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class OrderItemEntity {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column('uuid')
  productId: string;

  @OneToOne(() => Product)
  @JoinColumn()
  product?: Product;

  @ManyToOne(() => OrderEntity, (order) => order)
  order?: OrderEntity;
}
