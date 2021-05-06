import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from 'src/module/user/model/user';
import { Substructure } from 'src/module/shared/model/substructure';

@ObjectType()
@Entity()
export class Settings extends Substructure {
  @Field()
  @Column()
  notifications: boolean;

  @Field()
  @Column()
  chatColor: string;

  @Field(() => User, { nullable: false })
  @OneToOne(() => User, (user) => user.settings, { nullable: false })
  @JoinColumn()
  user: User;
}
