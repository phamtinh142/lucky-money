import { ApiPropertyOptional } from "@nestjs/swagger";

import { StatusGameEnum } from "../../../common/constants/status-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";
import type { X50GameEntity } from "../x50.entity";

export class X50GameDto extends AbstractDto {
  @ApiPropertyOptional()
  gameId: number;

  @ApiPropertyOptional()
  roundNumber: number;

  @ApiPropertyOptional()
  roundNumberWin: number;

  @ApiPropertyOptional()
  colorWin: number;

  @ApiPropertyOptional()
  hashSalt: string;

  @ApiPropertyOptional()
  roundHash: string;

  @ApiPropertyOptional()
  rotate: number;

  @ApiPropertyOptional()
  status: StatusGameEnum;

  @ApiPropertyOptional()
  timeStamp: number;

  @ApiPropertyOptional()
  coin: number;

  constructor(x50Game: X50GameEntity) {
    super(x50Game);
    this.gameId = x50Game.gameId;
    this.roundNumber = x50Game.roundNumber;
    this.roundNumberWin = x50Game.roundNumberWin;
    this.colorWin = x50Game.colorWin;
    this.hashSalt = x50Game.hashSalt;
    this.roundHash = x50Game.roundHash;
    this.rotate = x50Game.rotate;
    this.status = x50Game.status;
    this.timeStamp = x50Game.timeStamp;
    this.coin = x50Game.coin;
  }
}
