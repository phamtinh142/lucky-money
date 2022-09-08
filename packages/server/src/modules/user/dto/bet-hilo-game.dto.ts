import { ApiPropertyOptional } from "@nestjs/swagger";

import { StatusBetGameEnum } from "../../../common/constants/status-bet-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";
import type { BetHiloGameEntity } from "../bet-hilo-game.entity";

export class BetHiloGameDto extends AbstractDto {
  @ApiPropertyOptional()
  gameId: number;

  @ApiPropertyOptional()
  userId: string;

  @ApiPropertyOptional()
  coinBetHi: number;

  @ApiPropertyOptional()
  coinBetLo: number;

  @ApiPropertyOptional()
  coinBetRed: number;

  @ApiPropertyOptional()
  coinBetBlack: number;

  @ApiPropertyOptional()
  coinBetAce: number;

  @ApiPropertyOptional()
  coinBetKingToAce: number;

  @ApiPropertyOptional()
  coinBetTwoToNine: number;

  @ApiPropertyOptional()
  coinBetJackToAce: number;

  @ApiPropertyOptional()
  coinBetJoker: number;

  @ApiPropertyOptional()
  coinWin: number;

  @ApiPropertyOptional()
  coinWinReal: number;

  @ApiPropertyOptional()
  betTime: Date;

  @ApiPropertyOptional()
  status: StatusBetGameEnum;

  constructor(betHiloGame: BetHiloGameEntity) {
    super(betHiloGame);
    this.gameId = betHiloGame.gameId.gameId;
    this.userId = betHiloGame.userId.id;
    this.coinBetHi = betHiloGame.coinBetHi;
    this.coinBetLo = betHiloGame.coinBetLo;
    this.coinBetRed = betHiloGame.coinBetRed;
    this.coinBetBlack = betHiloGame.coinBetBlack;
    this.coinBetAce = betHiloGame.coinBetAce;
    this.coinBetKingToAce = betHiloGame.coinBetKingToAce;
    this.coinBetTwoToNine = betHiloGame.coinBetTwoToNine;
    this.coinBetJackToAce = betHiloGame.coinBetJackToAce;
    this.coinBetJoker = betHiloGame.coinBetJoker;
    this.coinWin = betHiloGame.coinWin;
    this.betTime = betHiloGame.betTime;
    this.status = betHiloGame.status;
  }
}
