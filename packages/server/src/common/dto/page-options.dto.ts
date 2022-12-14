import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional, Max, Min } from "class-validator";

import { OrderEnum } from "../constants/order.enum";

export class PageOptionsDto {
  @ApiProperty({
    enum: OrderEnum,
    default: OrderEnum.ASC,
  })
  @IsEnum(OrderEnum)
  @IsOptional()
  readonly order: OrderEnum = OrderEnum.ASC;

  @ApiProperty({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page: number = 1;

  @ApiProperty({
    minimum: 1,
    maximum: 50,
    default: 10,
  })
  @Type(() => Number)
  @IsInt()
  @Min(10)
  @Max(50)
  @IsOptional()
  readonly take: number = 10;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
