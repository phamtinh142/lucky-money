import type { CanActivate, ExecutionContext } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import type { Observable } from "rxjs";

@Injectable()
export class WsGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      context.getArgs();

      return true;
    } catch {
      return false;
    }
  }
}
