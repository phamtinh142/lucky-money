import { Column, Entity, ManyToOne } from "typeorm";

import { AbstractEntity } from "../../common/abstract.entity";
import { ColorBetX2GameEnum } from "../../common/constants/color-bet-x2-game.enum";
import { StatusBetGameEnum } from "../../common/constants/status-bet-game.enum";
import { Dto } from "../../common/decorators/dto.decorator";
import { X2GameEntity } from "../x2Game/x2.entity";
import { BetX2GameDto } from "./dto/bet-x2-game.dto";
import { UserEntity } from "./user.entity";

@Entity({ name: "BetX2Game" })
@Dto(BetX2GameDto)
export class BetX2GameEntity extends AbstractEntity {
  @ManyToOne(() => X2GameEntity, (x2Game) => x2Game.gameId)
  gameId: X2GameEntity;

  @ManyToOne(() => UserEntity, (user) => user.id)
  userId: UserEntity;

  @Column()
  coinBet: number;

  @Column({ type: "enum", enum: ColorBetX2GameEnum })
  colorBet: ColorBetX2GameEnum;

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
