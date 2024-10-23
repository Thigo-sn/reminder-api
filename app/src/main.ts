import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

const bootstrap = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
    { cors: true }
  );

  app.setGlobalPrefix('/api');

  await app.listen(3000);
};

bootstrap().catch(err => {
  console.error('Error starting the application', err);
});
