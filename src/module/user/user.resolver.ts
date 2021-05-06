import {
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from 'src/module/user/model/user';
import { Id } from 'src/module/decorator/param/id';
import { Payload } from 'src/module/decorator/param/payload';
import { CreateUser } from 'src/module/user/input/create-user';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { UpdateUser } from 'src/module/user/input/update-user';
import { DeleteUser } from 'src/module/user/input/delete-user';
import { Storage } from 'src/module/user/module/storage/model/storage';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async user(@Id() id: number): Promise<User> {
    return User.findOneOrFail(id);
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return User.find();
  }

  @Mutation(() => User)
  async createUser(@Payload() payload: CreateUser): Promise<User> {
    return plainToClass(User, payload).save();
  }

  @Mutation(() => User)
  async updateUser(@Payload() payload: UpdateUser): Promise<User> {
    const user = await User.findOneOrFail(payload.id);
    return plainToClassFromExist(user, payload).save();
  }

  @Mutation(() => User)
  async deleteUser(@Payload() payload: DeleteUser): Promise<User> {
    const user = await User.findOneOrFail(payload.id, {
      relations: ['storage'],
    });
    return user.softRemove();
  }

  @ResolveField(() => Storage)
  async storage(@Parent() user: User): Promise<Storage> {
    return Storage.findOne({ user });
  }
}
