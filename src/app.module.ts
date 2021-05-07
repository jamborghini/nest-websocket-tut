import { Module } from '@nestjs/common';
import { WebsocketModule } from 'src/module/websocket/websocket.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/module/user/user.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'root',
    //   password: 'root',
    //   database: 'temp',
    //   entities: ['dist/**/model/*.{ts,js}'],
    //   synchronize: true,
    //   dropSchema: true,
    // }),
    WebsocketModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      fieldResolverEnhancers: ['guards'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
