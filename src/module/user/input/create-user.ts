import { Field, InputType } from '@nestjs/graphql';
import { IsUsername } from 'src/module/decorator/validator/is-username';
import { IsPassword } from 'src/module/decorator/validator/is-password';
import { Match } from 'src/module/decorator/validator/match';
import { Storage } from 'src/module/user/module/storage/model/storage';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

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
}
