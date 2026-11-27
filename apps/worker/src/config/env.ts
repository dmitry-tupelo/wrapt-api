import { baseEnvSchema } from '@app/common';
import * as z from 'zod';

export const workerEnvSchema = baseEnvSchema.extend({
  WORKER_PORT: z.coerce.number().int().min(1).max(65535).default(3001),
});

export type WorkerEnv = z.infer<typeof workerEnvSchema>;
