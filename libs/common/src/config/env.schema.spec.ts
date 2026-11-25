import { baseEnvSchema, Environment, LogLevel } from './env.schema.js';

describe('Env schema', () => {
  it('applies defaults when variables are missing', () => {
    const res = baseEnvSchema.safeParse({});

    expect(res.success).toBe(true);
    expect(res.data).toEqual({
      NODE_ENV: Environment.Production,
      LOG_LEVEL: LogLevel.Info,
    });
  });

  it('rejects unknown log level', () => {
    const res = baseEnvSchema.safeParse({ LOG_LEVEL: 'loud' });

    expect(res.success).toBe(false);
  });

  it('keeps provided values', () => {
    const res = baseEnvSchema.safeParse({
      LOG_LEVEL: LogLevel.Error,
      NODE_ENV: Environment.Development,
    });

    expect(res.success).toBe(true);
    expect(res.data).toEqual({
      NODE_ENV: Environment.Development,
      LOG_LEVEL: LogLevel.Error,
    });
  });
});
