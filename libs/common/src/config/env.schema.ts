import * as z from 'zod';

export enum Environment {
  Production = 'production',
  Development = 'development',
  Test = 'test',
}

export enum LogLevel {
  Fatal = 'fatal',
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
  Debug = 'debug',
  Trace = 'trace',
  Silent = 'silent',
}

export const baseEnvSchema = z.object({
  NODE_ENV: z.enum(Environment).default(Environment.Production),
  LOG_LEVEL: z.enum(LogLevel).default(LogLevel.Info),
});

export type BaseEnv = z.infer<typeof baseEnvSchema>;
