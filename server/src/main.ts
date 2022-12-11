import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT, 10) || 8080;
  const Config = new ConfigService();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.use(json({ limit: '5mb' }));

  app.enableCors({ origin: [Config.get('CLIENT')] });
  app.setGlobalPrefix('/api/v1');
  await app.listen(port);
  console.log('server is running');
}
bootstrap();
