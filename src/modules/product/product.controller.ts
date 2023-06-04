import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { OrderDto } from './dto/order.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/shops')
  async getShops() {
    return this.productService.handleShops();
  }

  @Get('/:id/items')
  async getProductsByShop(@Param('id') id: number) {
    return this.productService.handleItems(id);
  }

  @Post('/order')
  async postOrder(@Body() order: OrderDto) {
    return this.productService.handleOrder(order);
  }
}
