import { ApiPropertyOptional } from "@nestjs/swagger";

import { ColorBetX2GameEnum } from "../../../common/constants/color-bet-x2-game.enum";
import { StatusBetGameEnum } from "../../../common/constants/status-bet-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";

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

  constructor(partial: Partial<BetX2GameDto>) {
    super();
    Object.assign(this, partial);
  }
}
