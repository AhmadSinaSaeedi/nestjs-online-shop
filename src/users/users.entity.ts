import { OrderEntity } from './../orders/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'text' })
  public name: string;

  @Column({ type: 'text' })
  public email: string;

  @Column()
  public profileImage: string;

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders?: OrderEntity[];
}
