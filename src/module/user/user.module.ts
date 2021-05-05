import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/module/user/model/user';
import { StorageModule } from 'src/module/user/module/storage/storage.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), StorageModule],
  providers: [UserResolver],
})
export class UserModule {}
