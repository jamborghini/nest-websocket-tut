import { applyDecorators } from '@nestjs/common';
import {
  Matches,
  MaxLength,
  MinLength,
  ValidationOptions,
} from 'class-validator';

export function IsUsername(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return applyDecorators(
    Matches(/^[a-zA-Z0-9]+$/, {
      message: 'Username can only contain letters and digits',
      ...validationOptions,
    }),
    MinLength(3, validationOptions),
    MaxLength(32, validationOptions),
  );
}
