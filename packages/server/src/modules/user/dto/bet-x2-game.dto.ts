import { ApiPropertyOptional } from "@nestjs/swagger";

import { ColorBetX2GameEnum } from "../../../common/constants/color-bet-x2-game.enum";
import { StatusBetGameEnum } from "../../../common/constants/status-bet-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";
import type { BetX2GameEntity } from "../bet-x2-game.entity";

export class BetX2GameDto extends AbstractDto {
  @ApiPropertyOptional()
  gameId: number;

  @ApiPropertyOptional()
  userId: string;

  @ApiPropertyOptional()
  coinBet: number;

  @ApiPropertyOptional()
  colorBet: ColorBetX2GameEnum;

  @ApiPropertyOptional()
  coinWin: number;

  @ApiPropertyOptional()
  betTime: Date;

  @ApiPropertyOptional()
  status: StatusBetGameEnum;

  constructor(betX2Game: BetX2GameEntity) {
    super(betX2Game);
    this.gameId = betX2Game.gameId.gameId;
    this.userId = betX2Game.userId.id;
    this.coinBet = betX2Game.coinBet;
    this.colorBet = betX2Game.colorBet;
    this.coinWin = betX2Game.coinWin;
    this.betTime = betX2Game.betTime;
    this.status = betX2Game.status;
  }
}
