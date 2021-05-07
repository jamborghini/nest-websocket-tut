import { Args, ArgsOptions } from '@nestjs/graphql';

export function Payload(
  property?: string,
  options?: ArgsOptions,
): ParameterDecorator {
  return Args(property ?? 'payload', options);
}
