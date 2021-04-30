import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  User = 10,
  Mod = 20,
  Admin = 30,
  Root = 40,
}

registerEnumType(Role, { name: 'Role' });
