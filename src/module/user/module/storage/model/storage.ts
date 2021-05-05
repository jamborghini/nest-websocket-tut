import { Field, ObjectType } from '@nestjs/graphql';
import { Substructure } from 'src/module/shared/model/substructure';
import { Column, Entity, OneToOne } from 'typeorm';
import { User } from 'src/module/user/model/user';

@ObjectType()
@Entity()
export class Storage extends Substructure {
  @Field()
  @Column()
  lastMessage: string;

  @OneToOne(() => User, (user) => user.storage)
  user: User;
}
