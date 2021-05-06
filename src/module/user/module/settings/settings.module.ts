import { Module } from '@nestjs/common';
import { SettingsResolver } from './settings.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Settings } from 'src/module/user/module/settings/model/settings';

@Module({
  imports: [TypeOrmModule.forFeature([Settings])],
  providers: [SettingsResolver],
})
export class SettingsModule {}
