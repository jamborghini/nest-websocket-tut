import { Args, ArgsOptions } from '@nestjs/graphql';

export function Id(
  property?: string,
  options?: ArgsOptions,
): ParameterDecorator {
  return Args(property ?? 'id', options);
}
