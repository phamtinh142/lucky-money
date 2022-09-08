import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  ValidationPipe,
} from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { RoleTypeEnum } from "../../common/constants/role-type.enum";
import { Auth, UUIDParam } from "../../common/decorators/http.decorator";
import { PageDto } from "../../common/dto/page.dto";
import { UserDto } from "./dto/user.dto";
import { UsersPageOptionsDto } from "./dto/users-page-options.dto";
import { UserService } from "./user.service";

@Controller("users")
@ApiTags("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @Auth([RoleTypeEnum.USER])
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Get users list",
    type: PageDto,
  })
  getUsers(
    @Query(new ValidationPipe({ transform: true }))
    pageOptionsDto: UsersPageOptionsDto,
  ): Promise<PageDto<UserDto>> {
    return this.userService.getUsers(pageOptionsDto);
  }

  @Get(":id")
  @Auth([RoleTypeEnum.USER])
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Get users list",
    type: UserDto,
  })
  getUser(@UUIDParam("id") userId: string): Promise<UserDto> {
    return this.userService.getUser(userId);
  }
}
