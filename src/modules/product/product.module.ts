import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Product from './entity/product.entity';
import Shop from './entity/shop.entity';
import Order from './entity/order.entity';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [TypeOrmModule.forFeature([Product, Shop, Order])],
})
export class ProductModule {}
