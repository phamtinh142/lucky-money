import { ApiPropertyOptional } from "@nestjs/swagger";

import { StatusBetGameEnum } from "../../../common/constants/status-bet-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";

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

  constructor(partial: Partial<BetX50GameDto>) {
    super();
    Object.assign(this, partial);
  }
}
