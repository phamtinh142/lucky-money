import { ApiPropertyOptional } from "@nestjs/swagger";

import { StatusGameEnum } from "../../../common/constants/status-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";

export class X50GameDto extends AbstractDto {
  @ApiPropertyOptional()
  gameId: number;

  @ApiPropertyOptional()
  roundNumber: number;

  @ApiPropertyOptional()
  roundNumberWin: number;

  @ApiPropertyOptional()
  colorWin: number;

  @ApiPropertyOptional()
  hashSalt: string;

  @ApiPropertyOptional()
  roundHash: string;

  @ApiPropertyOptional()
  rotate: number;

  @ApiPropertyOptional()
  status: StatusGameEnum;

  @ApiPropertyOptional()
  timeStamp: number;

  @ApiPropertyOptional()
  coin: number;

  constructor(partial: Partial<X50GameDto>) {
    super();
    Object.assign(this, partial);
  }
}
