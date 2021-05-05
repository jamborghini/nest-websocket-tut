import { Field, ObjectType } from '@nestjs/graphql';
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Substructure } from 'src/module/shared/model/substructure';
import { Role } from 'src/module/user/model/enum/role';
import { hash } from 'bcrypt';
import { Storage } from 'src/module/user/module/storage/model/storage';

@ObjectType()
@Entity()
export class User extends Substructure {
  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  password: string;

  @Field(() => Role)
  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @OneToOne(() => Storage, (storage) => storage.user)
  @JoinColumn()
  storage: Storage;

  toJSON() {
    const { password, ...result } = this;
    return result;
  }

  @BeforeInsert()
  private async hashPassword() {
    this.password = await hash(this.password, 14);
  }
}
