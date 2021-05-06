import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/module/user/model/user';
import { StorageModule } from 'src/module/user/module/storage/storage.module';
import { SettingsModule } from 'src/module/user/module/settings/settings.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), StorageModule, SettingsModule],
  providers: [UserResolver],
})
export class UserModule {}
