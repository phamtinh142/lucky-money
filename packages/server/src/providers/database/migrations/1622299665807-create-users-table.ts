import type { MigrationInterface, QueryRunner } from "typeorm";
import { Table } from "typeorm";

import { RoleTypeEnum } from "../../../common/constants/role-type.enum";
import { StatusUserEnum } from "../../../common/constants/status-user.enum";

export class CreateUsersTable1622299665807 implements MigrationInterface {
  name = "createUsersTable1622299665807";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            default: "uuid_generate_v4()",
          },
          {
            name: "user_name",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "permission",
            type: "int",
            isNullable: false,
            default: RoleTypeEnum.USER,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "avatar",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "status",
            type: "int",
            isNullable: false,
            default: StatusUserEnum.ACTIVE,
          },
          {
            name: "level",
            type: "int",
            isNullable: false,
            default: 1,
          },
          {
            name: "coin",
            type: "int",
            isNullable: false,
            default: 0,
          },
          {
            name: "total_coin_bet_x50_game",
            type: "int",
            isNullable: false,
            default: 0,
          },
          {
            name: "total_coin_bet_x50_game_win",
            type: "int",
            isNullable: false,
            default: 0,
          },
          {
            name: "total_coin_bet_x2_game",
            type: "int",
            isNullable: false,
            default: 0,
          },
          {
            name: "total_coin_bet_x2_game_win",
            type: "int",
            isNullable: false,
            default: 0,
          },
          {
            name: "total_coin_bet_hilo_game",
            type: "int",
            isNullable: false,
            default: 0,
          },
          {
            name: "total_coin_bet_hilo_game_win",
            type: "int",
            isNullable: false,
            default: 0,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
