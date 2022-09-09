import { ApiPropertyOptional } from "@nestjs/swagger";

import { StatusBetGameEnum } from "../../../common/constants/status-bet-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";

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

  constructor(partial: Partial<BetHiloGameDto>) {
    super();
    Object.assign(this, partial);
  }
}
