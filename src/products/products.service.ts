import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product, ProductInput } from 'src/graphql';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private reps: Repository<Product>) {}

  async findAll(): Promise<Product[]> {
    const products = await this.reps.find();
    return products;
  }

  async find(id: string): Promise<Product> {
    const product = await this.reps.findOne(id);
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  async create(data: ProductInput): Promise<Product> {
    const product = this.reps.create(data);
    const res = await this.reps.insert(data);
    product.id = res.generatedMaps[0].id;
    return product;
  }

  async update(id: string, data: ProductInput) {
    console.log('Data', data);

    await this.reps.update({ id }, data);
    return await this.reps.findOne({ id });
  }

  async delete(id: string): Promise<boolean> {
    await this.reps.delete(id);
    return true;
  }
}
