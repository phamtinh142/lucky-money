import { ApiProperty } from "@nestjs/swagger";

import { StatusGameEnum } from "../../../common/constants/status-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";

export class X2GameDto extends AbstractDto {
  @ApiProperty()
  gameId: number;

  @ApiProperty()
  roundNumber: number;

  @ApiProperty()
  roundNumberWin: number;

  @ApiProperty()
  colorWin: number;

  @ApiProperty()
  hashSalt: string;

  @ApiProperty()
  roundHash: string;

  @ApiProperty()
  rotate: number;

  @ApiProperty({ enum: StatusGameEnum })
  status: StatusGameEnum;

  @ApiProperty()
  timeStamp: number;

  @ApiProperty()
  coin: number;

  constructor(partial: Partial<X2GameDto>) {
    super();
    Object.assign(this, partial);
  }
}
