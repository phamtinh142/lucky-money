import { Column, Entity, ManyToOne } from "typeorm";

import { AbstractEntity } from "../../common/abstract.entity";
import { StatusBetGameEnum } from "../../common/constants/status-bet-game.enum";
import { Dto } from "../../common/decorators/dto.decorator";
import { HiloGameEntity } from "../hiloGame/hilo.entity";
import { BetHiloGameDto } from "./dto/bet-hilo-game.dto";
import { UserEntity } from "./user.entity";

@Entity({ name: "BetX2Game" })
@Dto(BetHiloGameDto)
export class BetHiloGameEntity extends AbstractEntity {
  @ManyToOne(() => HiloGameEntity, (hiloGame) => hiloGame.gameId)
  gameId: HiloGameEntity;

  @ManyToOne(() => UserEntity, (user) => user.id)
  userId: UserEntity;

  @Column({ default: 0 })
  coinBetHi: number;

  @Column({ default: 0 })
  coinBetLo: number;

  @Column({ default: 0 })
  coinBetRed: number;

  @Column({ default: 0 })
  coinBetBlack: number;

  @Column({ default: 0 })
  coinBetAce: number;

  @Column({ default: 0 })
  coinBetKingToAce: number;

  @Column({ default: 0 })
  coinBetTwoToNine: number;

  @Column({ default: 0 })
  coinBetJackToAce: number;

  @Column({ default: 0 })
  coinBetJoker: number;

  @Column({ default: 0 })
  coinWin: number;

  @Column({ default: 0 })
  coinWinReal: number;

  @Column()
  betTime: Date;

  @Column({
    type: "enum",
    enum: StatusBetGameEnum,
    default: StatusBetGameEnum.ONGOING,
  })
  status: StatusBetGameEnum;
}
