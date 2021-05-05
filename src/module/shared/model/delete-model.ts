import { Field, ID, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';

@InputType()
export class DeleteModel {
  @Field(() => ID)
  @Transform(({ value }) => parseInt(value))
  id: number;
}
