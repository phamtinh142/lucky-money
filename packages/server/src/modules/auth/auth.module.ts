import { forwardRef, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { AppConfigModule } from "../../configs/app/config.module";
import { AppConfigService } from "../../configs/app/config.service";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { PublicStrategy } from "./public.strategy";

@Module({
  imports: [
    AppConfigModule,
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: (configService: AppConfigService) => ({
        privateKey: configService.jwtSecret,
        signOptions: {
          expiresIn: configService.jwtExpirationTime,
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PublicStrategy],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
