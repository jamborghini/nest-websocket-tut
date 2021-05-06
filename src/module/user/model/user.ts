import { Field, ObjectType } from '@nestjs/graphql';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  OneToOne,
} from 'typeorm';
import { Substructure } from 'src/module/shared/model/substructure';
import { Role } from 'src/module/user/model/enum/role';
import { hash } from 'bcrypt';
import { Storage } from 'src/module/user/module/storage/model/storage';
import { Settings } from 'src/module/user/module/settings/model/settings';
import { Profile } from 'src/module/user/module/profile/model/profile';

@ObjectType()
@Entity()
@Index(['username'], { unique: true })
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

  @Field(() => Storage)
  @OneToOne(() => Storage, (storage) => storage.user, { cascade: true })
  storage: Storage;

  @Field(() => Settings)
  @OneToOne(() => Settings, (settings) => settings.user, { cascade: true })
  settings: Settings;

  @Field(() => Profile)
  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  profile: Profile;

  toJSON() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = this;
    return result;
  }

  @BeforeInsert()
  @BeforeUpdate()
  private async hashPassword() {
    this.password = await hash(this.password, 14);
  }
}
