import { ApiProperty } from "@nestjs/swagger";

import { StatusBetGameEnum } from "../../../common/constants/status-bet-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";

export class BetX50GameDto extends AbstractDto {
  @ApiProperty()
  gameId: number;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  coinBetBlue: number;

  @ApiProperty()
  coinBetRed: number;

  @ApiProperty()
  coinBetGreen: number;

  @ApiProperty()
  coinBetYellow: number;

  @ApiProperty()
  coinWin: number;

  @ApiProperty()
  betTime: Date;

  @ApiProperty({ enum: StatusBetGameEnum })
  status: StatusBetGameEnum;

  constructor(partial: Partial<BetX50GameDto>) {
    super();
    Object.assign(this, partial);
  }
}
