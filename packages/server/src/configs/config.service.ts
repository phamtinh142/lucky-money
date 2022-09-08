import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { isNil } from "lodash";

@Injectable()
export class CommonConfigService {
  constructor(private configService: ConfigService) {}

  private get(key: string): string {
    const value = this.configService.get<string>(key);

    if (isNil(value)) {
      throw new Error(`${key} environment variable does not set`);
    }

    return value;
  }

  getNumber(key: string): number {
    try {
      const value = this.get(key);

      return Number(value);
    } catch {
      throw new Error(`${key} environment variable is not a number`);
    }
  }

  getBoolean(key: string): boolean {
    try {
      const value = this.get(key);

      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(`${key} env var is not a boolean`);
    }
  }

  getString(key: string): string {
    const value = this.get(key);

    return value.replace(/\\n/g, "\n");
  }
}
