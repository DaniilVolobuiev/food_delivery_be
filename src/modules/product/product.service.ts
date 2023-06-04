import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Shop from './entity/shop.entity';
import Product from './entity/product.entity';
import Order from './entity/order.entity';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class ProductService {
  constructor(
    private configService: ConfigService,
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async handleShops() {
    try {
      return await this.shopRepository.createQueryBuilder().getMany();
    } catch (error) {
      throw new HttpException(
        'Error while getting shops',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async handleItems(shopId: number) {
    try {
      return await this.productRepository
        .createQueryBuilder('product')
        .select([
          'product.id',
          'product.title',
          'product.imgUrl',
          'product.price',
          'shop',
        ])
        .leftJoin('product.shop', 'shop')
        .where('shop.id = :shopId', { shopId })
        .getMany();
    } catch (error) {
      throw new HttpException(
        'Error while getting shop items',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async handleOrder(order: OrderDto) {
    const stringOrder = JSON.stringify(order);
    try {
      await this.orderRepository
        .createQueryBuilder()
        .insert()
        .values({ order: stringOrder })
        .execute();
    } catch (error) {
      throw new HttpException(
        'Error while posting order',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
