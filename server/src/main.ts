import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { json } from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8080;
  const Config = new ConfigService();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.use(json({ limit: '5mb' }));

  app.enableCors({ origin: [Config.get('CLIENT')] });
  app.setGlobalPrefix('/api/v1');

  if (Config.get('NODE_ENV') === 'prod') {
    this.app.get('*', (req: Request, res: Response) => {
      res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
    });
  }
  await app.listen(port);
  console.log('server is running', port);
}
bootstrap();
