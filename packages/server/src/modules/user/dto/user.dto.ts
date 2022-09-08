import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

import { RoleTypeEnum } from "../../../common/constants/role-type.enum";
import { StatusUserEnum } from "../../../common/constants/status-user.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";
import type { UserEntity } from "../user.entity";

export class UserDto extends AbstractDto {
  @ApiProperty()
  userName: string;

  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional({ enum: RoleTypeEnum })
  permission: RoleTypeEnum;

  @ApiPropertyOptional()
  avatar?: string;

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

  constructor(user: UserEntity) {
    super(user);
    this.userName = user.userName;
    this.email = user.email;
    this.permission = user.permission;
    this.avatar = user.avatar;
    this.status = user.status;
    this.level = user.level;
    this.coin = user.coin;
    this.totalCoinBetX50Game = user.totalCoinBetX50Game;
    this.totalCoinBetX50GameWin = user.totalCoinBetX50GameWin;
    this.totalCoinBetX2Game = user.totalCoinBetX2Game;
    this.totalCoinBetX2GameWin = user.totalCoinBetX2GameWin;
    this.totalCoinBetHiloGame = user.totalCoinBetHiloGame;
    this.totalCoinBetHiloGameWin = user.totalCoinBetHiloGameWin;
  }
}
