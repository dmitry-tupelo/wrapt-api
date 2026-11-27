import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { WorkerEnv } from './config/env.js';
import { WorkerModule } from './worker.module.js';

async function bootstrap() {
  const app = await NestFactory.create(WorkerModule);
  const config = app.get<ConfigService<WorkerEnv, true>>(ConfigService);
  const port = config.get('WORKER_PORT', { infer: true });

  await app.listen(port);
}
await bootstrap();
