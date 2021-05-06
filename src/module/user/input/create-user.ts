import { Field, InputType } from '@nestjs/graphql';
import { IsUsername } from 'src/module/decorator/validator/is-username';
import { IsPassword } from 'src/module/decorator/validator/is-password';
import { Match } from 'src/module/decorator/validator/match';
import { Storage } from 'src/module/user/module/storage/model/storage';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Settings } from 'src/module/user/module/settings/model/settings';
import { Profile } from 'src/module/user/module/profile/model/profile';
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator';

@InputType()
export class CreateUser {
  @Field()
  @IsUsername()
  username: string;

  @Field()
  @IsPassword()
  password: string;

  @Field()
  @IsPassword()
  @Match('password', { message: 'Passwords must match' })
  confirmPassword: string;

  @Type(() => Storage)
  @ValidateNested()
  storage: Pick<Storage, 'lastMessage'> = { lastMessage: 'Pin some messages!' };

  @Type(() => Settings)
  @ValidateNested()
  settings: Pick<Settings, 'notifications' | 'chatColor'> = {
    notifications: false,
    chatColor: '#4caf50',
  };

  @Type(() => Profile)
  @ValidateNested()
  profile: Pick<Profile, 'nickname'> = {
    nickname: uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    }),
  };
}
