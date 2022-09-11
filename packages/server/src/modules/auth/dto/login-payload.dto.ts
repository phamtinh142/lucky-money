import { ApiProperty } from "@nestjs/swagger";

import { UserDto } from "../../user/dto/user.dto";
import { TokenPayloadDto } from "./token-payload.dto";

export class LoginPayloadDto {
  @ApiProperty({ enum: UserDto })
  user: UserDto;

  @ApiProperty({ enum: TokenPayloadDto })
  token: TokenPayloadDto;

  constructor(user: UserDto, token: TokenPayloadDto) {
    this.user = user;
    this.token = token;
  }
}
