import { Column, Entity, OneToMany } from "typeorm";

import { AbstractEntity } from "../../common/abstract.entity";
import { StatusGameEnum } from "../../common/constants/status-game.enum";
import { Dto } from "../../common/decorators/dto.decorator";
import { BetX2GameEntity } from "../user/bet-x2-game.entity";
import { X2GameDto } from "./dto/x2-game.dto";

@Entity({ name: "X2Game" })
@Dto(X2GameDto)
export class X2GameEntity extends AbstractEntity {
  @Column({ unique: true, nullable: false })
  gameId: number;

  @Column()
  roundNumber: number;

  @Column()
  roundNumberWin: number;

  @Column()
  colorWin: number;

  @Column()
  hashSalt: string;

  @Column()
  roundHash: string;

  @Column()
  rotate: number;

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

  @OneToMany(() => BetX2GameEntity, (betX2Game) => betX2Game.gameId)
  betX2Game: BetX2GameEntity[];
}
