import { Column, Entity, ManyToOne } from "typeorm";

import { AbstractEntity } from "../../common/abstract.entity";
import { StatusBetGameEnum } from "../../common/constants/status-bet-game.enum";
import { Dto } from "../../common/decorators/dto.decorator";
import { X50GameEntity } from "../x50Game/x50.entity";
import { BetX50GameDto } from "./dto/bet-x50-game.dto";
import { UserEntity } from "./user.entity";

@Entity({ name: "BetX2Game" })
@Dto(BetX50GameDto)
export class BetX50GameEntity extends AbstractEntity {
  @ManyToOne(() => X50GameEntity, (x50Game) => x50Game.gameId)
  gameId: X50GameEntity;

  @ManyToOne(() => UserEntity, (user) => user.id)
  userId: UserEntity;

  @Column({ default: 0 })
  coinBetBlue: number;

  @Column({ default: 0 })
  coinBetRed: number;

  @Column({ default: 0 })
  coinBetGreen: number;

  @Column({ default: 0 })
  coinBetYellow: number;

  @Column({ default: 0 })
  coinWin: number;

  @Column()
  betTime: Date;

  @Column({
    type: "enum",
    enum: StatusBetGameEnum,
    default: StatusBetGameEnum.ONGOING,
  })
  status: StatusBetGameEnum;
}
