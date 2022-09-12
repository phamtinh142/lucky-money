import { Logger } from "@nestjs/common";
import type {
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { Client } from "socket.io/dist/client";

import { ISubscribeSocket } from "./interfaces/subscribe-socket.interface";

@WebSocketGateway({ cors: { origin: "*" } })
export class ConnectionGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  private server: Server;

  private logger: Logger = new Logger(ConnectionGateway.name);

  handleConnection(client: Socket): any {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket): any {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage("subscribe")
  async subscribe(
    @ConnectedSocket() socket: Socket,
    @MessageBody() data: ISubscribeSocket,
  ): Promise<any> {
    const arrRoom: string[] = [];

    if (data._userID) {
      arrRoom.push(data._userID);
    }

    if (data.roomGameID) {
      arrRoom.push(data.roomGameID);
    }

    if (data.roomMessage) {
      arrRoom.push(data.roomMessage);
    }

    await socket.join(arrRoom);

    return this.server.to(socket.id).emit("SUBSCRIBED", {
      action_str: "SUBSCRIBED",
      message: "Subscribed!",
      data: {
        data,
      },
    });
  }
}
