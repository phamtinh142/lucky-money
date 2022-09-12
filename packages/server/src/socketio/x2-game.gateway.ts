import { Logger } from "@nestjs/common";
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";

import { ICreateBetX2Socket } from "./interfaces/x2-game-socket.interface";

@WebSocketGateway({ cors: { origin: "*" } })
export class X2GameGateway {
  @WebSocketServer()
  private server: Server;

  private logger: Logger = new Logger(X2GameGateway.name);

  @SubscribeMessage("retrieve_game_data_x2")
  async retrieveDataX2Game(@MessageBody() data: any): Promise<any> {}

  @SubscribeMessage("create_bet_x2")
  createBetX2Game(@MessageBody() data: ICreateBetX2Socket): any {
    console.log("data:", data);
  }
}
