import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatEvent } from 'src/module/websocket/chat/enum/chat-event';
import { OnModuleInit } from '@nestjs/common';

@WebSocketGateway()
export class ChatGateway implements OnModuleInit {
  @WebSocketServer()
  private server: Server;

  onModuleInit(): void {
    this.server.on('connection', (data) => {
      this.server.emit(
        ChatEvent.CLIENT_COUNT,
        data.conn.server.clientsCount - 1,
      );
      data.on('disconnect', () => {
        this.server.emit(
          ChatEvent.CLIENT_COUNT,
          data.conn.server.clientsCount - 1,
        );
      });
    });
  }

  @SubscribeMessage(ChatEvent.MESSAGE)
  handleMessage(client: Socket, data: any): void {
    client.broadcast.emit(ChatEvent.MESSAGE, data);
  }

  @SubscribeMessage(ChatEvent.READ)
  handleRead(client: Socket): void {
    client.broadcast.emit(ChatEvent.READ);
  }

  @SubscribeMessage(ChatEvent.POKE)
  handlePoke(client: Socket): void {
    client.broadcast.emit(ChatEvent.POKE);
  }
}
