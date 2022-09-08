import { Column, Entity, OneToMany } from "typeorm";

import { AbstractEntity } from "../../common/abstract.entity";
import { StatusGameEnum } from "../../common/constants/status-game.enum";
import { Dto } from "../../common/decorators/dto.decorator";
import { BetX50GameEntity } from "../user/bet-x50-game.entity";
import { X50GameDto } from "./dto/x50-game.dto";

@Entity({ name: "X2Game" })
@Dto(X50GameDto)
export class X50GameEntity extends AbstractEntity {
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

  @OneToMany(() => BetX50GameEntity, (betX50Game) => betX50Game.gameId)
  betX50Game: BetX50GameEntity[];
}
