import { DeleteModel } from 'src/module/shared/model/delete-model';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DeleteStorage extends DeleteModel {}
