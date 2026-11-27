import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { workerEnvSchema } from './config/env.js';
import { WorkerController } from './worker.controller.js';
import { WorkerService } from './worker.service.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: workerEnvSchema,
    }),
  ],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
