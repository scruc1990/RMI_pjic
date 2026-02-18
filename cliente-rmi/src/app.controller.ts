import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('nomina')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('calcular')
  async calcular(
    @Query('empleados', ParseIntPipe) empleados: number,
    @Query('meses', ParseIntPipe) meses: number,
  ) {
    console.log(`Cliente: Solicitando nómina para ${empleados} empleados y ${meses} meses`);
    
    return await this.appService.enviarSolicitudNomina(empleados, meses);
  }
}