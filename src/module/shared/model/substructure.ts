import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  SaveOptions,
  UpdateDateColumn,
} from 'typeorm';
import { ConflictException } from '@nestjs/common';

@ObjectType()
export class Substructure extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field({ nullable: true })
  @DeleteDateColumn()
  deletedAt: Date;

  save(options?: SaveOptions): Promise<this> {
    return super.save(options).catch((error) => {
      if (error?.code === '23505') {
        throw new ConflictException();
      }

      throw error;
    });
  }
}
