import { ApiPropertyOptional } from "@nestjs/swagger";

import { StatusGameEnum } from "../../../common/constants/status-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";

export class HiloGameDto extends AbstractDto {
  @ApiPropertyOptional()
  gameId: number;

  @ApiPropertyOptional()
  roundNumber: number;

  @ApiPropertyOptional()
  hashSalt: string;

  @ApiPropertyOptional()
  roundHash: string;

  @ApiPropertyOptional()
  cardColor: string;

  @ApiPropertyOptional()
  cardValue: number;

  @ApiPropertyOptional()
  cardSign: string;

  @ApiPropertyOptional()
  status: StatusGameEnum;

  @ApiPropertyOptional()
  timeStamp: number;

  @ApiPropertyOptional()
  coin: number;

  constructor(partial: Partial<HiloGameDto>) {
    super();
    Object.assign(this, partial);
  }
}
