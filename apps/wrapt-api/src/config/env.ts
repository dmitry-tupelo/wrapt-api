import { baseEnvSchema } from '@app/common';
import * as z from 'zod';

export const apiEnvSchema = baseEnvSchema.extend({
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
});

export type ApiEnv = z.infer<typeof apiEnvSchema>;
