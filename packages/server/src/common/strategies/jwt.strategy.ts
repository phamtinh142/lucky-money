import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@prisma/client";
import { ExtractJwt, Strategy } from "passport-jwt";

import type { RoleTypeEnum } from "../../common/constants/role-type.enum";
import { TokenTypeEnum } from "../../common/constants/token-type.enum";
import { AppConfigService } from "../../configs/app/config.service";
import { UserService } from "../../modules/user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    public readonly configService: AppConfigService,
    public readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.jwtSecret,
    });
  }

  async validate(args: {
    userId: string;
    permission: RoleTypeEnum;
    type: TokenTypeEnum;
  }): Promise<User> {
    if (args.type !== TokenTypeEnum.ACCESS_TOKEN) {
      throw new UnauthorizedException();
    }

    const user = await this.userService.getUser({
      id: args.userId,
      permission: args.permission,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
