import { Field, InputType } from '@nestjs/graphql';
import { UpdateModel } from 'src/module/shared/model/update-model';
import { IsOptional, Length } from 'class-validator';

@InputType()
export class UpdateProfile extends UpdateModel {
  @Field({ nullable: true })
  @IsOptional()
  @Length(2, 32)
  nickname: string;
}
