import { forwardRef, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { JwtStrategy } from "../../common/strategies/jwt.strategy";
import { PublicStrategy } from "../../common/strategies/public.strategy";
import { AppConfigModule } from "../../configs/app/config.module";
import { AppConfigService } from "../../configs/app/config.service";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

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
