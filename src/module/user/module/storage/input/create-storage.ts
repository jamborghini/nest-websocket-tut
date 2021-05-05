import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { User } from 'src/module/user/model/user';
import { DocumentRefInput } from 'src/module/shared/input/document-ref-input';

@InputType()
export class CreateStorage {
  @Field()
  @Length(1, 2000)
  lastMessage: string;

  @Field(() => DocumentRefInput)
  user: User;
}
