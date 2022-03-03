import { UserEntity } from './../users/users.entity';
import { OrderItemEntity } from './../order-items/order-item.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
} from 'typeorm';

export enum CategoryEnum {
  BOOK = 'book',
  CLOTHS = 'cloths',
  DIGITAL = 'digital',
  FOOD = 'food',
}

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('uuid')
  userId: string;

  @Column()
  total: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user?: UserEntity;

  // @OneToMany(() => OrderItemEntity, (items) => items.order)
  // items?: OrderItemEntity[];
}
