import { Module } from '@nestjs/common';
import { StorageResolver } from './storage.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Storage } from 'src/module/user/module/storage/model/storage';

@Module({
  imports: [TypeOrmModule.forFeature([Storage])],
  providers: [StorageResolver],
})
export class StorageModule {}
