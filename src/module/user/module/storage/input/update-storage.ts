import { Field, InputType } from '@nestjs/graphql';
import { UpdateModel } from 'src/module/shared/model/update-model';
import { IsOptional, Length } from 'class-validator';

@InputType()
export class UpdateStorage extends UpdateModel {
  @Field()
  @Length(1, 2000)
  @IsOptional()
  lastMessage: string;
}
