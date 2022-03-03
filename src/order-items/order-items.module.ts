import { Module } from '@nestjs/common';
import { OrderItemsResolver } from './oreder-items.resolver';
import { OrderItemsService } from './order-items.service';

@Module({
  providers: [OrderItemsResolver, OrderItemsService],
})
export class OrderItemsModule {}
