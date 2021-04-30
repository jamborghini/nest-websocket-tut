import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

export interface TypingUser {
  username: string;
}

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  private server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: Record<any, any>): void {
    this.server.emit('message', message);
  }

  @SubscribeMessage('typingStart')
  handleTypingStart(client: Socket, typing: TypingUser): void {
    client.broadcast.emit('typingStart', typing);
  }

  @SubscribeMessage('typingStop')
  handleTypingStop(client: Socket, typing: TypingUser): void {
    client.broadcast.emit('typingStop', typing);
  }
}
