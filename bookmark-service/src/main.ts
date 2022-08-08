import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.BOOKMARK_SERVICE_APP_HOST,
        port: parseInt(process.env.BOOKMARK_SERVICE_APP_PORT, 10),
      },
    },
  );
  await app.listen();
}
bootstrap();
