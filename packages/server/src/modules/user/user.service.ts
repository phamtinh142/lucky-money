import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

import type { PageDto } from "../../common/dto/page.dto";
import { FileNotImageException } from "../../common/exceptions/file-not-image.exception";
import type { IFile } from "../../common/interfaces";
import { PrismaService } from "../../providers/database/provider.service";
import { UtilsProvider } from "../../providers/utils.provider";
import { ValidatorService } from "../../shared/services/validator.service";
import { UserRegisterDto } from "../auth/dto/user-register.dto";
import type {
  CreateUserDto,
  FindUserDto,
  GetUserDto,
  UserDto,
  UsersPageOptionsDto,
} from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(
    private readonly validatorService: ValidatorService,
    private readonly prisma: PrismaService,
  ) {}

  async createUser(
    userRegisterDto: UserRegisterDto,
    file: IFile,
  ): Promise<User> {
    const hashPassword = UtilsProvider.generateHash(userRegisterDto.password);

    userRegisterDto.password = hashPassword;

    const user = await this.prisma.user.create({ data: userRegisterDto });

    if (file && !this.validatorService.isImage(file.mimetype)) {
      throw new FileNotImageException();
    }

    return user;
  }

  getUser(dataInput: FindUserDto): Promise<User | null> {
    this.prisma.user.

    return this.prisma.user.findFirst({
      where: dataInput,
    });
  }

  getUsers(pageOptionsDto: UsersPageOptionsDto): Promise<GetUserDto[]> {
    return this.prisma.user.findMany();
  }
}
