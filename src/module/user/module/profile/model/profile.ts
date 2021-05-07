import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Substructure } from 'src/module/shared/model/substructure';
import { User } from 'src/module/user/model/user';

@ObjectType()
@Entity()
export class Profile extends Substructure {
  @Column()
  @Field()
  nickname: string;

  @Field(() => User, { nullable: false })
  @OneToOne(() => User, (user) => user.storage, { nullable: false })
  @JoinColumn()
  user: User;
}
