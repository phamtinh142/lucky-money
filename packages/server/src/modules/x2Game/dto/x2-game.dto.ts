import { ApiPropertyOptional } from "@nestjs/swagger";

import { StatusGameEnum } from "../../../common/constants/status-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";
import type { X2GameEntity } from "../x2.entity";

export class X2GameDto extends AbstractDto {
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

  constructor(x2Game: X2GameEntity) {
    super(x2Game);
    this.gameId = x2Game.gameId;
    this.roundNumber = x2Game.roundNumber;
    this.roundNumberWin = x2Game.roundNumberWin;
    this.colorWin = x2Game.colorWin;
    this.hashSalt = x2Game.hashSalt;
    this.roundHash = x2Game.roundHash;
    this.rotate = x2Game.rotate;
    this.status = x2Game.status;
    this.timeStamp = x2Game.timeStamp;
    this.coin = x2Game.coin;
  }
}
