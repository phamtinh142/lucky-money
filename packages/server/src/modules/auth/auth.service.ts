import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";

import { TokenTypeEnum } from "../../common/constants/token-type.enum";
import { UserNotFoundException } from "../../common/exceptions/user-not-found.exception";
import { AppConfigService } from "../../configs/app/config.service";
import { UtilsProvider } from "../../providers/utils.provider";
import type { UserDto } from "../user/dto/user.dto";
import { UserService } from "../user/user.service";
import { TokenPayloadDto } from "./dto/token-payload.dto";
import type { UserLoginDto } from "./dto/user-login.dto";

@Injectable()
export class AuthService {
  constructor(
    public readonly jwtService: JwtService,
    public readonly configService: AppConfigService,
    public readonly userService: UserService,
  ) {}

  async createToken(user: User | UserDto): Promise<TokenPayloadDto> {
    return new TokenPayloadDto({
      expiresIn: this.configService.jwtExpirationTime,
      accessToken: await this.jwtService.signAsync({
        userId: user.id,
        role: user.permission,
        type: TokenTypeEnum.ACCESS_TOKEN,
      }),
    });
  }

  async validateUser(userLoginDto: UserLoginDto): Promise<User> {
    const user = await this.userService.getUser({
      email: userLoginDto.email,
    });
    const isPasswordValid = await UtilsProvider.validateHash(
      userLoginDto.password,
      user?.password,
    );

    if (!user || !isPasswordValid) {
      throw new UserNotFoundException();
    }

    return user;
  }
}
