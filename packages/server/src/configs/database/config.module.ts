import { Module } from "@nestjs/common";

import { CommonConfigModule } from "../config.module";
import { PostgreConfigService } from "./config.service";

@Module({
  imports: [CommonConfigModule],
  providers: [PostgreConfigService],
  exports: [PostgreConfigService],
})
export class PostgreConfigModule {}
