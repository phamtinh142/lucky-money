import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

import { ContextProvider } from "../../providers/context.provider";

@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): any {
    const request = context.switchToHttp().getRequest();

    const user = <User>request.user;
    ContextProvider.setAuthUser(user);

    return next.handle();
  }
}
