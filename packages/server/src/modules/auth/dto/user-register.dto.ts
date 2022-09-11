import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

import { Trim } from "../../../common/decorators/transforms.decorator";

export class UserRegisterDto {
  @ApiProperty({ enum: String })
  @IsString()
  @IsNotEmpty()
  @Trim()
  userName: string;

  @ApiProperty({ enum: String })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Trim()
  email: string;

  @ApiProperty({ minLength: 6, enum: String })
  @IsString()
  @MinLength(6)
  password: string;
}
