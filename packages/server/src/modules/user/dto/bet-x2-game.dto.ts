import { ApiProperty } from "@nestjs/swagger";

import { ColorBetX2GameEnum } from "../../../common/constants/color-bet-x2-game.enum";
import { StatusBetGameEnum } from "../../../common/constants/status-bet-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";

export class BetX2GameDto extends AbstractDto {
  @ApiProperty()
  gameId: number;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  coinBet: number;

  @ApiProperty()
  colorBet: ColorBetX2GameEnum;

  @ApiProperty()
  coinWin: number;

  @ApiProperty()
  betTime: Date;

  @ApiProperty({ enum: StatusBetGameEnum })
  status: StatusBetGameEnum;

  constructor(partial: Partial<BetX2GameDto>) {
    super();
    Object.assign(this, partial);
  }
}
