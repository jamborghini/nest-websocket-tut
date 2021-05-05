import { Field, InputType } from '@nestjs/graphql';
import { IsUsername } from 'src/module/decorator/validator/is-username';
import { IsPassword } from 'src/module/decorator/validator/is-password';
import { Match } from 'src/module/decorator/validator/match';

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
  @Match('password')
  confirmPassword: string;
}
