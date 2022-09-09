import { Module } from "@nestjs/common";

import { SharedModule } from "../../shared/shared.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [SharedModule],
  controllers: [UserController],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
