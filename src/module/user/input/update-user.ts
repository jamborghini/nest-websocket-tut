import { Field, InputType } from '@nestjs/graphql';
import { IsUsername } from 'src/module/decorator/validator/is-username';
import { IsPassword } from 'src/module/decorator/validator/is-password';
import { Match } from 'src/module/decorator/validator/match';
import { UpdateModel } from 'src/module/shared/model/update-model';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateUser extends UpdateModel {
  @Field({ nullable: true })
  @IsOptional()
  @IsUsername()
  username: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsPassword()
  password: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsPassword()
  @Match('password')
  confirmPassword: string;
}
