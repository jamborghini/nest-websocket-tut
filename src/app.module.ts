import { Module } from '@nestjs/common';
import { WebsocketModule } from 'src/module/websocket/websocket.module';

@Module({
  imports: [WebsocketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
