import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserSubscriber } from "../../common/entity-subscribers/user-subscriber";
import { PostgreConfigModule } from "../../configs/database/config.module";
import { PostgreConfigService } from "../../configs/database/config.service";
import { SnakeNamingStrategy } from "../../snake-naming.strategy";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgreConfigModule],
      inject: [PostgreConfigService],
      useFactory: (postgreConfig: PostgreConfigService) => ({
        entities: postgreConfig.entities,
        migrations: postgreConfig.migrations,
        keepConnectionAlive: !postgreConfig.isTest,
        dropSchema: postgreConfig.isTest,
        type: "postgres",
        host: postgreConfig.host,
        port: postgreConfig.port,
        username: postgreConfig.username,
        password: postgreConfig.password,
        database: postgreConfig.database,
        logging: postgreConfig.logging,
        migrationsRun: true,
        subscribers: [UserSubscriber],
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),
  ],
})
export class PostgreModule {}
