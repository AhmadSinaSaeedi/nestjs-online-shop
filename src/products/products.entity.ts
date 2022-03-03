import { Field, ID } from 'type-graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ColumnTypeUndefinedError,
} from 'typeorm';

export enum CategoryEnum {
  BOOK = 'book',
  CLOTHS = 'cloths',
  DIGITAL = 'digital',
  FOOD = 'food',
}

@Entity()
export class Product {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  count: number;

  @Column()
  price: number;

  @Column({
    type: 'enum',
    enum: CategoryEnum,
    default: CategoryEnum.DIGITAL,
  })
  category: CategoryEnum;
}
