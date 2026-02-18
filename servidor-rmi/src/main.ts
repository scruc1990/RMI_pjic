import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'payroll',
      protoPath: join(process.cwd(), 'payroll.proto'),
      url: 'localhost:50051',
    },
  });
  await app.listen();
  console.log('Servidor RMI (NestJS) escuchando en el puerto 50051...');
}
bootstrap();