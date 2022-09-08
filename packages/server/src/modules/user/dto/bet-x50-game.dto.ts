import { ApiPropertyOptional } from "@nestjs/swagger";

import { StatusBetGameEnum } from "../../../common/constants/status-bet-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";
import type { BetX50GameEntity } from "../bet-x50-game.entity";

export class BetX50GameDto extends AbstractDto {
  @ApiPropertyOptional()
  gameId: number;

  @ApiPropertyOptional()
  userId: string;

  @ApiPropertyOptional()
  coinBetBlue: number;

  @ApiPropertyOptional()
  coinBetRed: number;

  @ApiPropertyOptional()
  coinBetGreen: number;

  @ApiPropertyOptional()
  coinBetYellow: number;

  @ApiPropertyOptional()
  coinWin: number;

  @ApiPropertyOptional()
  betTime: Date;

  @ApiPropertyOptional()
  status: StatusBetGameEnum;

  constructor(betX50Game: BetX50GameEntity) {
    super(betX50Game);
    this.gameId = betX50Game.gameId.gameId;
    this.userId = betX50Game.userId.id;
    this.coinBetBlue = betX50Game.coinBetBlue;
    this.coinBetRed = betX50Game.coinBetRed;
    this.coinBetGreen = betX50Game.coinBetGreen;
    this.coinBetYellow = betX50Game.coinBetYellow;
    this.coinWin = betX50Game.coinWin;
    this.betTime = betX50Game.betTime;
    this.status = betX50Game.status;
  }
}
