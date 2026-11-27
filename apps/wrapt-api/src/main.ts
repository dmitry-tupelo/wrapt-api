import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ApiEnv } from './config/env.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService<ApiEnv, true>>(ConfigService);
  const port = config.get('PORT', { infer: true });

  await app.listen(port);
}
await bootstrap();
