import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
} from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

import { ApiFile } from "../../common/decorators/swagger.schema";
import { IFile } from "../../common/interfaces";
import { UserDto } from "../user/dto/user.dto";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";
import { LoginPayloadDto } from "./dto/login-payload.dto";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserRegisterDto } from "./dto/user-register.dto";

@Controller("auth")
@ApiTags("auth")
export class AuthController {
  constructor(
    public readonly userService: UserService,
    public readonly authService: AuthService,
  ) {}

  @Post("login")
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: LoginPayloadDto,
    description: "User info with access token",
  })
  async userLogin(
    @Body() userLoginDto: UserLoginDto,
  ): Promise<LoginPayloadDto> {
    const userEntity = await this.authService.validateUser(userLoginDto);

    const token = await this.authService.createToken(userEntity);

    return new LoginPayloadDto(userEntity.toDto(), token);
  }

  @Post("register")
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserDto, description: "Successfully Registered" })
  @ApiFile({ name: "avatar" })
  async userRegister(
    @Body() userRegisterDto: UserRegisterDto,
    @UploadedFile() file: IFile,
  ): Promise<UserDto> {
    const createdUser = await this.userService.createUser(
      userRegisterDto,
      file,
    );

    return createdUser.toDto();
  }
}
