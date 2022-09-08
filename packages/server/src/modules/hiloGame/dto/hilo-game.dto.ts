import { ApiPropertyOptional } from "@nestjs/swagger";

import { StatusGameEnum } from "../../../common/constants/status-game.enum";
import { AbstractDto } from "../../../common/dto/abstract.dto";
import type { HiloGameEntity } from "../hilo.entity";

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

  constructor(hiloGame: HiloGameEntity) {
    super(hiloGame);
    this.gameId = hiloGame.gameId;
    this.roundNumber = hiloGame.roundNumber;
    this.hashSalt = hiloGame.hashSalt;
    this.roundHash = hiloGame.roundHash;
    this.cardColor = hiloGame.cardColor;
    this.cardValue = hiloGame.cardValue;
    this.cardSign = hiloGame.cardSign;
    this.status = hiloGame.status;
    this.timeStamp = hiloGame.timeStamp;
    this.coin = hiloGame.coin;
  }
}
