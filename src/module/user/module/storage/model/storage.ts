import { Field, ObjectType } from '@nestjs/graphql';
import { Substructure } from 'src/module/shared/model/substructure';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from 'src/module/user/model/user';

@ObjectType()
@Entity()
export class Storage extends Substructure {
  @Field()
  @Column()
  lastMessage: string;

  @Field(() => User, { nullable: false })
  @OneToOne(() => User, (user) => user.storage, { nullable: false })
  @JoinColumn()
  user: User;
}
