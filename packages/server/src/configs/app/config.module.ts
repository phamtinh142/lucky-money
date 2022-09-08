import { Module } from "@nestjs/common";

import { CommonConfigModule } from "../config.module";
import { AppConfigService } from "./config.service";

@Module({
  imports: [CommonConfigModule],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
