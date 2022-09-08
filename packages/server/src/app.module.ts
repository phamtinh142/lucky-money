import "./boilerplate.polyfill";

import type { MiddlewareConsumer, NestModule } from "@nestjs/common";
import { Module } from "@nestjs/common";

import { CommonConfigModule } from "./configs/config.module";
import { contextMiddleware } from "./middlewares";
import { AuthModule } from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";
import { PostgreModule } from "./providers/database/provider.module";
import { SocketIoModule } from "./socketio/socketio.module";

@Module({
  imports: [
    AuthModule,
    UserModule,
    CommonConfigModule,
    PostgreModule,
    SocketIoModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(contextMiddleware).forRoutes("*");
  }
}
