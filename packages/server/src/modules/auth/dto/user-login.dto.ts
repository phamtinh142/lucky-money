import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class UserLoginDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ enum: String })
  readonly email: string;

  @IsString()
  @ApiProperty({ enum: String })
  readonly password: string;
}
