import { InputType } from '@nestjs/graphql';
import { DeleteModel } from 'src/module/shared/model/delete-model';

@InputType()
export class DeleteUser extends DeleteModel {}
