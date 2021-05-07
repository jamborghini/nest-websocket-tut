import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  EntityNotFoundError,
  FindConditions,
  FindOneOptions,
  ObjectType as ObjectType$,
  PrimaryGeneratedColumn,
  SaveOptions,
  UpdateDateColumn,
} from 'typeorm';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { ObjectID } from 'typeorm/driver/mongodb/typings';

@ObjectType()
export class Substructure extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ nullable: true })
  updatedAt: Date = null;

  @Field()
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

  static findOneOrFail<T extends BaseEntity>(
    this: ObjectType$<T>,
    id?: string | number | Date | ObjectID,
    options?: FindOneOptions<T>,
  ): Promise<T>;

  static findOneOrFail<T extends BaseEntity>(
    this: ObjectType$<T>,
    options?: FindOneOptions<T>,
  ): Promise<T>;

  static findOneOrFail<T extends BaseEntity>(
    this: ObjectType$<T>,
    conditions?: FindConditions<T>,
    options?: FindOneOptions<T>,
  ): Promise<T>;

  static findOneOrFail(...args) {
    if (args[0] instanceof Substructure) {
      args[0] = args[0].id;
    }

    return super.findOneOrFail(...args).catch((error) => {
      if (error instanceof EntityNotFoundError) {
        return new NotFoundException(this.name);
      }

      throw error;
    });
  }
}
