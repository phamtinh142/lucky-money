import { Module } from "@nestjs/common";

import { PrismaService } from "../../providers/database/provider.service";
import { SharedModule } from "../../shared/shared.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [SharedModule, PrismaService],
  controllers: [UserController],
  exports: [UserService],
  providers: [UserService, PrismaService],
})
export class UserModule {}
