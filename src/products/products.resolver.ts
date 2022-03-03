import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Product, ProductInput } from 'src/graphql';
import { ProductsService } from './products.service';

@Resolver('Products')
export class ProductsResolver {
  constructor(private ProductsService: ProductsService) {}

  @Query(() => String)
  async products() {
    return await this.ProductsService.findAll();
  }

  @Query(() => Product)
  async product(@Args('id') id: string) {
    return await this.ProductsService.find(id);
  }

  @Mutation(() => Product)
  async productCreate(@Args('input') data: ProductInput) {
    console.log('data', data);
    return await this.ProductsService.create(data);
  }

  @Mutation(() => Product)
  async productUpdate(
    @Args('input') data: ProductInput,
    @Args('id') id: string,
  ) {
    return this.ProductsService.update(id, data);
  }

  @Mutation(() => Boolean)
  async productDelete(@Args('id') id: string) {
    return await this.ProductsService.delete(id);
  }
}
