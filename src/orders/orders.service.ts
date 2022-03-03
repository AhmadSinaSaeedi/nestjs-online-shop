import { OrderEntity } from './orders.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order, OrderInput, OrderCreateInput } from 'src/graphql';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity) private reps: Repository<OrderEntity>,
  ) {}

  async findAll(): Promise<OrderEntity[]> {
    const products = await this.reps.find();
    return products;
  }

  async findById(id: string): Promise<OrderEntity> {
    const order = await this.reps.findOne(id);
    if (!order) {
      throw new NotFoundException();
    }
    return order;
  }

  async create(data: OrderEntity): Promise<OrderEntity> {
    const order = this.reps.create(data);
    const res = await this.reps.insert(data);
    order.id = res.generatedMaps[0].id;
    return order;
  }
}
