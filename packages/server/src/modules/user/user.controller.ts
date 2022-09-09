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
import { Auth } from "../../common/decorators/http.decorator";
import { PageDto } from "../../common/dto/page.dto";
import { UserDto, UsersPageOptionsDto } from "./dto/user.dto";
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
}
