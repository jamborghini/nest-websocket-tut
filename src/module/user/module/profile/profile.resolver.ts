import { Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Payload } from 'src/module/decorator/param/payload';
import { plainToClassFromExist } from 'class-transformer';
import { User } from 'src/module/user/model/user';
import { Profile } from 'src/module/user/module/profile/model/profile';
import { UpdateProfile } from 'src/module/user/module/profile/input/update-profile';

@Resolver(() => Profile)
export class ProfileResolver {
  @Mutation(() => Profile)
  async updateProfile(@Payload() payload: UpdateProfile): Promise<Profile> {
    const profile = await Profile.findOneOrFail(payload.id);
    return plainToClassFromExist(profile, payload).save();
  }

  @ResolveField(() => User)
  async user(@Parent() user: User): Promise<User> {
    return User.findOneOrFail(user.storage);
  }
}
