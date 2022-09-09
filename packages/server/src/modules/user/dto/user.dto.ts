import {
  ApiProperty,
  ApiPropertyOptional,
  OmitType,
  PartialType,
  PickType,
} from "@nestjs/swagger";

import { RoleTypeEnum } from "../../../common/constants/role-type.enum";
import { StatusUserEnum } from "../../../common/constants/status-user.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";
import { PageOptionsDto } from "../../../common/dto/page-options.dto";

export class UserDto extends AbstractDto {
  @ApiProperty()
  userName: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional({ enum: RoleTypeEnum })
  permission: RoleTypeEnum;

  @ApiPropertyOptional()
  password: string;

  @ApiPropertyOptional()
  avatar: string;

  @ApiPropertyOptional({ enum: StatusUserEnum })
  status: StatusUserEnum;

  @ApiPropertyOptional()
  level: number;

  @ApiPropertyOptional()
  coin: number;

  @ApiPropertyOptional()
  totalCoinBetX50Game: number;

  @ApiPropertyOptional()
  totalCoinBetX50GameWin: number;

  @ApiPropertyOptional()
  totalCoinBetX2Game: number;

  @ApiPropertyOptional()
  totalCoinBetX2GameWin: number;

  @ApiPropertyOptional()
  totalCoinBetHiloGame: number;

  @ApiPropertyOptional()
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

export class CreateUserDto extends PartialType(
  OmitType(UserDto, ["id"] as const),
) {}

export class UpdateUserDto extends PartialType(UserDto) {}

export class UsersPageOptionsDto extends PageOptionsDto {}
