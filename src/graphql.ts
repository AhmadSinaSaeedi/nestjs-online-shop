/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum CategoryEnum {
  BOOK = 'BOOK',
  CLOTHS = 'CLOTHS',
  DIGITAL = 'DIGITAL',
  FOOD = 'FOOD',
}

export enum CategoryEnumInput {
  BOOK = 'BOOK',
  CLOTHS = 'CLOTHS',
  DIGITAL = 'DIGITAL',
  FOOD = 'FOOD',
}

export class OrderItemInput {
  productId: string;
  price: number;
  quantity: number;
}

export class OrderCreateInput {
  user?: Nullable<string>;
  items?: Nullable<Nullable<OrderItemInput>[]>;
  total?: Nullable<number>;
}

export class OrderInput {
  user?: Nullable<string>;
  items?: Nullable<Nullable<OrderItemInput>[]>;
  total?: Nullable<number>;
}

export class ProductInput {
  name: string;
  count?: Nullable<number>;
  price?: Nullable<number>;
  category: CategoryEnum;
  image: string;
}

export class UserInput {
  id?: Nullable<string>;
  name?: Nullable<string>;
  email?: Nullable<string>;
  profileImage?: Nullable<string>;
}

export class OrderItem {
  id: string;
  product: Product;
  price: number;
  quantity: number;
}

export class Order {
  id?: Nullable<string>;
  user?: Nullable<User>;
  items?: Nullable<Nullable<OrderItem>[]>;
  total?: Nullable<number>;
}

export abstract class IQuery {
  abstract order(
    id?: Nullable<string>,
  ): Nullable<Order> | Promise<Nullable<Order>>;

  abstract orders():
    | Nullable<Nullable<Order>[]>
    | Promise<Nullable<Nullable<Order>[]>>;

  abstract products(): Product[] | Promise<Product[]>;

  abstract product(id: string): Product | Promise<Product>;

  abstract user(id?: Nullable<string>): User | Promise<User>;

  abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
  abstract orderCreate(
    data?: Nullable<OrderCreateInput>,
  ): Nullable<Order> | Promise<Nullable<Order>>;

  abstract productCreate(input: ProductInput): Product | Promise<Product>;

  abstract productUpdate(
    id: string,
    input?: Nullable<ProductInput>,
  ): Nullable<Product> | Promise<Nullable<Product>>;

  abstract productDelete(
    id: string,
  ): Nullable<boolean> | Promise<Nullable<boolean>>;

  abstract userCreate(
    input?: Nullable<UserInput>,
  ): Nullable<User> | Promise<Nullable<User>>;

  abstract userUpdate(
    id?: Nullable<string>,
    input?: Nullable<UserInput>,
  ): Nullable<User> | Promise<Nullable<User>>;

  abstract userDelete(
    id: string,
  ): Nullable<boolean> | Promise<Nullable<boolean>>;

  abstract signUp(
    user?: Nullable<UserInput>,
  ): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class Product {
  id: string;
  name?: Nullable<string>;
  image?: Nullable<string>;
  count?: Nullable<number>;
  price?: Nullable<number>;
  category?: Nullable<CategoryEnum>;
}

export class User {
  id?: Nullable<string>;
  name?: Nullable<string>;
  email?: Nullable<string>;
  password?: Nullable<string>;
  profileImage?: Nullable<string>;
}

type Nullable<T> = T | null;
