import { Injectable } from "@nestjs/common";

import { CommonConfigService } from "../config.service";

@Injectable()
export class AppConfigService {
  constructor(private commonConfigService: CommonConfigService) {}

  get jwtSecret(): string {
    return this.commonConfigService.getString("JWT_SECRET_KEY");
  }

  get jwtExpirationTime(): number {
    return this.commonConfigService.getNumber("JWT_EXPIRATION_TIME");
  }
}
