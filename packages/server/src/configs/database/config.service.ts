import { Injectable } from "@nestjs/common";
import path from "path";

import { CommonConfigService } from "../config.service";

@Injectable()
export class PostgreConfigService {
  constructor(private commonConfigService: CommonConfigService) {}

  get host(): string {
    return this.commonConfigService.getString("DB_HOST");
  }

  get port(): number {
    return this.commonConfigService.getNumber("DB_PORT");
  }

  get username(): string {
    return this.commonConfigService.getString("DB_USERNAME");
  }

  get password(): string {
    return this.commonConfigService.getString("DB_PASSWORD");
  }

  get database(): string {
    return this.commonConfigService.getString("DB_DATABASE");
  }

  get logging(): boolean {
    return this.commonConfigService.getBoolean("ENABLE_ORM_LOGS");
  }

  get isTest(): boolean {
    const value = this.commonConfigService.getString("NODE_ENV");

    return value === "test";
  }

  get entities(): string[] {
    const entityPath = path.join(process.cwd(), "src", "modules");

    let entities = [entityPath + "/**/*.entity{.ts,.js}"];

    if (module.hot) {
      const entityContext = require.context(entityPath, true, /\.entity\.ts$/);

      entities = entityContext.keys().map((id) => {
        const entityModule = entityContext(id);
        const [entity] = Object.values(entityModule);

        return entity as string;
      });
    }

    return entities;
  }

  get migrations(): string[] {
    const migrationPath = path.join(
      process.cwd(),
      "src",
      "providers",
      "database",
      "migrations",
    );

    let migrations = [migrationPath + "/*{.ts,.js}"];

    if (module.hot) {
      const migrationContext = require.context(migrationPath, false, /\.ts$/);

      migrations = migrationContext.keys().map((id) => {
        const migrationModule = migrationContext(id);
        const [migration] = Object.values(migrationModule);

        return migration as string;
      });
    }

    return migrations;
  }
}
