import { Field, ID, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';

@InputType()
export class UpdateModel {
  @Field(() => ID)
  @Transform(({ value }) => parseInt(value))
  id: number;
}
