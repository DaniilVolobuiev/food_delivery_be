import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsObject,
  ValidateNested,
  ArrayMinSize,
  ArrayNotEmpty,
} from 'class-validator';
import { UserDto } from './user.dto';
import { OrderItemDto } from './orderItem.dto';

export class OrderDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UserDto)
  readonly user: UserDto;

  @IsNotEmpty()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  readonly orderItems: OrderItemDto[];
}
