import { Column, Entity, OneToMany } from "typeorm";

import { AbstractEntity } from "../../common/abstract.entity";
import { RoleTypeEnum } from "../../common/constants/role-type.enum";
import { StatusUserEnum } from "../../common/constants/status-user.enum";
import { Dto } from "../../common/decorators/dto.decorator";
import { BetHiloGameEntity } from "./bet-hilo-game.entity";
import { BetX2GameEntity } from "./bet-x2-game.entity";
import { BetX50GameEntity } from "./bet-x50-game.entity";
import { UserDto } from "./dto/user.dto";

@Entity({ name: "Users" })
@Dto(UserDto)
export class UserEntity extends AbstractEntity<UserDto> {
  @Column({ unique: true })
  userName: string;

  @Column({ unique: true, nullable: true })
  email?: string;

  @Column({ type: "enum", enum: RoleTypeEnum, default: RoleTypeEnum.USER })
  permission: RoleTypeEnum;

  @Column({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({
    type: "enum",
    enum: StatusUserEnum,
    default: StatusUserEnum.ACTIVE,
  })
  status: StatusUserEnum;

  @Column({ default: 1 })
  level: number;

  @Column({ default: 0 })
  coin: number;

  @Column({ default: 0 })
  totalCoinBetX50Game: number;

  @Column({ default: 0 })
  totalCoinBetX50GameWin: number;

  @Column({ default: 0 })
  totalCoinBetX2Game: number;

  @Column({ default: 0 })
  totalCoinBetX2GameWin: number;

  @Column({ default: 0 })
  totalCoinBetHiloGame: number;

  @Column({ default: 0 })
  totalCoinBetHiloGameWin: number;

  @OneToMany(() => BetX2GameEntity, (betX2Game) => betX2Game.userId)
  betX2Game: BetX2GameEntity[];

  @OneToMany(() => BetX50GameEntity, (Betx50Game) => Betx50Game.userId)
  betX50Game: BetX50GameEntity[];

  @OneToMany(() => BetHiloGameEntity, (BetHiloGame) => BetHiloGame.userId)
  betHiloGame: BetHiloGameEntity[];
}
