import { ApiProperty } from "@nestjs/swagger";

import { StatusGameEnum } from "../../../common/constants/status-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";

export class HiloGameDto extends AbstractDto {
  @ApiProperty()
  gameId: number;

  @ApiProperty()
  roundNumber: number;

  @ApiProperty()
  hashSalt: string;

  @ApiProperty()
  roundHash: string;

  @ApiProperty()
  cardColor: string;

  @ApiProperty()
  cardValue: number;

  @ApiProperty()
  cardSign: string;

  @ApiProperty({ enum: StatusGameEnum })
  status: StatusGameEnum;

  @ApiProperty()
  timeStamp: number;

  @ApiProperty()
  coin: number;

  constructor(partial: Partial<HiloGameDto>) {
    super();
    Object.assign(this, partial);
  }
}
