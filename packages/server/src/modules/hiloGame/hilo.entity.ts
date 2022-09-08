import { Column, Entity, OneToMany } from "typeorm";

import { AbstractEntity } from "../../common/abstract.entity";
import { StatusGameEnum } from "../../common/constants/status-game.enum";
import { Dto } from "../../common/decorators/dto.decorator";
import { BetHiloGameEntity } from "../user/bet-hilo-game.entity";
import { HiloGameDto } from "./dto/hilo-game.dto";

@Entity({ name: "HiloGame" })
@Dto(HiloGameDto)
export class HiloGameEntity extends AbstractEntity<HiloGameDto> {
  @Column({ unique: true, nullable: false })
  gameId: number;

  @Column()
  roundNumber: number;

  @Column()
  hashSalt: string;

  @Column()
  roundHash: string;

  @Column()
  cardColor: string;

  @Column()
  cardValue: number;

  @Column()
  cardSign: string;

  @Column({
    type: "enum",
    enum: StatusGameEnum,
    default: StatusGameEnum.BETTING,
  })
  status: StatusGameEnum;

  @Column()
  timeStamp: number;

  @Column()
  coin: number;

  @OneToMany(() => BetHiloGameEntity, (BetHiloGame) => BetHiloGame.userId)
  betHiloGame: BetHiloGameEntity[];
}
