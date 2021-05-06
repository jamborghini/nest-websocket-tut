import { UpdateModel } from 'src/module/shared/model/update-model';
import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsHexColor, IsOptional, Matches } from 'class-validator';

@InputType()
export class UpdateSettings extends UpdateModel {
  @Field({ nullable: true })
  @IsOptional()
  @IsHexColor()
  @Matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
  chatColor: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  notifications: boolean;
}
