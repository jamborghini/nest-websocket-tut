import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { Substructure } from 'src/module/shared/model/substructure';
import { Role } from 'src/module/user/model/enum/role';

@ObjectType()
@Entity()
export class User extends Substructure {
  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  @Field(() => Role)
  @Column({ type: 'enum', enum: Role })
  role: Role;
}
