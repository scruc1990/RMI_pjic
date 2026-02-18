// cliente-rmi/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const appRest = await NestFactory.create(AppModule);
  await appRest.listen(3000); 
  console.log('Cliente HTTP escuchando en el puerto 3000');
}
bootstrap();