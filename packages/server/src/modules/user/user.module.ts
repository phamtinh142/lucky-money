import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SharedModule } from "../../shared/shared.module";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
