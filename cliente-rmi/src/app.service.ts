import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  private payrollService: any;

  constructor(@Inject('PAYROLL_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.payrollService = this.client.getService<any>('PayrollService');
  }

  async enviarSolicitudNomina(numEmpleados: number, numMeses: number) {
    const payload = { empleados: numEmpleados, meses: numMeses };
    return await lastValueFrom(this.payrollService.calcularNomina(payload));
  }
}