import { define } from "typeorm-seeding";

import { RoleTypeEnum } from "../../../common/constants/role-type.enum";
import { StatusUserEnum } from "../../../common/constants/status-user.enum";
import { UserEntity } from "../../../modules/user/user.entity";

define(UserEntity, () => {
  const user = new UserEntity();
  user.userName = "admin";
  user.email = "admin@gmail.com";
  user.permission = RoleTypeEnum.ADMIN;
  user.password = "admin@4321";
  user.status = StatusUserEnum.ACTIVE;

  return user;
});
