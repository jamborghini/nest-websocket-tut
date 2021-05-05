import { applyDecorators } from '@nestjs/common';
import {
  Matches,
  MaxLength,
  MinLength,
  ValidationOptions,
} from 'class-validator';

export function IsPassword(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return applyDecorators(
    Matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,255}$/,
      {
        message: 'Password can only contain valid characters',
        ...validationOptions,
      },
    ),
    MinLength(3, validationOptions),
    MaxLength(255, validationOptions),
  );
}
