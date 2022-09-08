import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { isNil } from "lodash";

import type {
  IConfigApp,
  IConfigAuth,
  IConfigNAT,
} from "../../common/interfaces";

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get isProduction(): boolean {
    return this.nodeEnv === "production";
  }

  get isTest(): boolean {
    return this.nodeEnv === "test";
  }

  private getNumber(key: string): number {
    const value = this.get(key);

    try {
      return Number(value);
    } catch {
      throw new Error(key + " environment variable is not a number");
    }
  }

  private getBoolean(key: string): boolean {
    const value = this.get(key);

    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(key + " env var is not a boolean");
    }
  }

  private getString(key: string): string {
    const value = this.get(key);

    return value.replace(/\\n/g, "\n");
  }

  get nodeEnv(): string {
    return this.getString("NODE_ENV");
  }

  get documentationEnabled(): boolean {
    return this.getBoolean("ENABLE_DOCUMENTATION");
  }

  get natsEnabled(): boolean {
    return this.getBoolean("NATS_ENABLED");
  }

  get natsConfig(): IConfigNAT {
    return {
      host: this.getString("NATS_HOST"),
      port: this.getNumber("NATS_PORT"),
    };
  }

  get authConfig(): IConfigAuth {
    return {
      jwtSecret: this.getString("JWT_SECRET_KEY"),
      jwtExpirationTime: this.getNumber("JWT_EXPIRATION_TIME"),
    };
  }

  get appConfig(): IConfigApp {
    return {
      port: this.getString("PORT"),
    };
  }

  private get(key: string): string {
    const value = this.configService.get<string>(key);

    if (isNil(value)) {
      // probably we should call process.exit() too to avoid locking the service
      throw new Error(key + " environment variable does not set");
    }

    return value;
  }
}
