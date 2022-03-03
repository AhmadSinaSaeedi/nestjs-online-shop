import { Order } from './../graphql';
import { OrderItemEntity } from './../order-items/order-item.entity';
import { OrdersService } from './orders.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderInput } from 'src/graphql';
import { mapOrderEntityToDto } from 'src/mapper';

@Resolver('Orders')
export class OrdersResolver {
  constructor(private OrdersService: OrdersService) {}

  @Query(() => [Order])
  async orders(): Promise<Order[]> {
    const orders = await this.OrdersService.findAll();
    return orders.map((i) => mapOrderEntityToDto(i));
  }

  @Query(() => Order)
  async order(@Args('id') id: string) {
    const order = await this.OrdersService.findById(id);
    return mapOrderEntityToDto(order);
  }

  @Mutation(() => Order)
  async orderCreate(@Args('data') data: OrderInput) {
    console.log('data', data.items);
    return null;
  }
}
