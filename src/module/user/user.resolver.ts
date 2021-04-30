import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/module/user/model/user';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async user(@Args('id') id: number): Promise<User> {
    return User.findOneOrFail(id);
  }
}
