import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

import type { PageDto } from "../../common/dto/page.dto";
import { FileNotImageException } from "../../common/exceptions/file-not-image.exception";
import type { IFile } from "../../common/interfaces";
import { PrismaService } from "../../providers/database/provider.service";
import { ValidatorService } from "../../shared/services/validator.service";
import type {
  CreateUserDto,
  FindUserDto,
  UserDto,
  UsersPageOptionsDto,
} from "./dto/user.dto";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly validatorService: ValidatorService,
    private readonly prisma: PrismaService,
  ) {}

  async createUser(userRegisterDto: CreateUserDto, file: IFile): Promise<User> {
    const user = this.prisma.user.create({ data: userRegisterDto });

    if (file && !this.validatorService.isImage(file.mimetype)) {
      throw new FileNotImageException();
    }

    return this.userRepository.save(user);
  }

  getUser(dataInput: FindUserDto): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: dataInput,
    });
  }

  async getUsers(
    pageOptionsDto: UsersPageOptionsDto,
  ): Promise<PageDto<UserDto>> {
    const queryBuilder = this.userRepository.createQueryBuilder("user");
    const [items, pageMetaDto] = await queryBuilder.paginate(pageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }
}
