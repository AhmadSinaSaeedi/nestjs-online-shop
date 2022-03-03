import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ProductsModule } from './products/products.module';
import { Connection } from 'typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
    UsersModule,
    OrdersModule,
    OrderItemsModule,
    GraphQLModule.forRoot({
      // autoSchemaFile: 'schema.gql',
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      debug: false,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'root',
      port: 3306,
      database: 'online_shop',
      // entities: [Product, UserEntity, OrderEntity, OrderItemEntity],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    UsersModule,
    OrdersModule,
    OrderItemsModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
