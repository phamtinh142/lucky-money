import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { Column } from "typeorm";

import { Trim } from "../../../common/decorators/transforms.decorator";

export class UserRegisterDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly lastName: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Trim()
  readonly email: string;

  @ApiProperty({ minLength: 6 })
  @IsString()
  @MinLength(6)
  readonly password: string;

  @ApiProperty()
  @Column()
  @IsNumber()
  @IsOptional()
  phone: string;
}
