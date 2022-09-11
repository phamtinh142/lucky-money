import { ApiProperty } from "@nestjs/swagger";

import { StatusBetGameEnum } from "../../../common/constants/status-bet-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";

export class BetHiloGameDto extends AbstractDto {
  @ApiProperty()
  gameId: number;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  coinBetHi: number;

  @ApiProperty()
  coinBetLo: number;

  @ApiProperty()
  coinBetRed: number;

  @ApiProperty()
  coinBetBlack: number;

  @ApiProperty()
  coinBetAce: number;

  @ApiProperty()
  coinBetKingToAce: number;

  @ApiProperty()
  coinBetTwoToNine: number;

  @ApiProperty()
  coinBetJackToAce: number;

  @ApiProperty()
  coinBetJoker: number;

  @ApiProperty()
  coinWin: number;

  @ApiProperty()
  coinWinReal: number;

  @ApiProperty()
  betTime: Date;

  @ApiProperty({ enum: StatusBetGameEnum })
  status: StatusBetGameEnum;

  constructor(partial: Partial<BetHiloGameDto>) {
    super();
    Object.assign(this, partial);
  }
}
