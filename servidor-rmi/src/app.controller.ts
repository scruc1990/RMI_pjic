import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('PayrollService', 'CalcularNomina')
  async calcularNomina(data: { empleados: number, meses: number }) {
    console.log(`Recibido pedido de nómina: ${data.empleados} empleados, ${data.meses} meses`);
    return await this.appService.procesarNomina(data.empleados, data.meses);
  }
}