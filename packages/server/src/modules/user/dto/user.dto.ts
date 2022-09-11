import { ApiProperty, OmitType, PartialType, PickType } from "@nestjs/swagger";
import { Role } from "@prisma/client";

import { StatusUserEnum } from "../../../common/constants/status-user.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";
import { PageOptionsDto } from "../../../common/dto/page-options.dto";

export class UserDto extends AbstractDto {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ enum: Role })
  permission: Role;

  @ApiProperty()
  password: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty({ enum: StatusUserEnum })
  status: StatusUserEnum;

  @ApiProperty()
  level: number;

  @ApiProperty()
  coin: number;

  @ApiProperty()
  totalCoinBetX50Game: number;

  @ApiProperty()
  totalCoinBetX50GameWin: number;

  @ApiProperty()
  totalCoinBetX2Game: number;

  @ApiProperty()
  totalCoinBetX2GameWin: number;

  @ApiProperty()
  totalCoinBetHiloGame: number;

  @ApiProperty()
  totalCoinBetHiloGameWin: number;

  constructor(partial: Partial<UserDto>) {
    super();
    Object.assign(this, partial);
  }
}

export class FindUserDto extends PartialType(
  PickType(UserDto, ["id", "userName", "email", "permission"] as const),
) {}

export class GetUserDto extends OmitType(UserDto, ["password"] as const) {}

export class CreateUserDto extends OmitType(UserDto, ["id"] as const) {}

export class UpdateUserDto extends PartialType(UserDto) {}

export class UsersPageOptionsDto extends PageOptionsDto {}
