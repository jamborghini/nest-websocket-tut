import { Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Settings } from 'src/module/user/module/settings/model/settings';
import { User } from 'src/module/user/model/user';
import { Payload } from 'src/module/decorator/param/payload';
import { plainToClassFromExist } from 'class-transformer';
import { UpdateSettings } from 'src/module/user/module/settings/input/update-settings';

@Resolver(() => Settings)
export class SettingsResolver {
  @Mutation(() => Settings)
  async updateSettings(@Payload() payload: UpdateSettings): Promise<Settings> {
    const settings = await Settings.findOneOrFail(payload.id);
    return plainToClassFromExist(settings, payload).save();
  }

  @ResolveField(() => User)
  async user(@Parent() user: User): Promise<User> {
    return User.findOneOrFail(user.storage);
  }
}
