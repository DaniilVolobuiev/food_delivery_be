import { IsNotEmpty, IsNumber } from 'class-validator';

export class OrderItemDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly imgUrl: string;
  readonly shop: { id: number };
  readonly count: number;
}
