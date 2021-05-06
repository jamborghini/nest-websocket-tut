import {
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Storage } from 'src/module/user/module/storage/model/storage';
import { User } from 'src/module/user/model/user';
import { Id } from 'src/module/decorator/param/id';
import { Payload } from 'src/module/decorator/param/payload';
import { plainToClassFromExist } from 'class-transformer';
import { UpdateStorage } from 'src/module/user/module/storage/input/update-storage';

@Resolver(() => Storage)
export class StorageResolver {
  @Query(() => Storage)
  async storage(@Id() id: number): Promise<Storage> {
    return Storage.findOneOrFail(id);
  }

  @Mutation(() => Storage)
  async updateStorage(@Payload() payload: UpdateStorage): Promise<Storage> {
    const storage = await Storage.findOneOrFail(payload.id);
    return plainToClassFromExist(storage, payload).save();
  }

  @ResolveField(() => User)
  async user(@Parent() user: User): Promise<User> {
    return User.findOneOrFail(user.storage);
  }
}
