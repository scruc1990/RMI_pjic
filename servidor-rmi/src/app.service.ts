import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  async procesarNomina(empleados: number, meses: number) {
    // 1. Llenar la matriz de salarios con números aleatorios 
    const matriz = Array.from({ length: empleados }, () =>
      Array.from({ length: meses }, () => Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000)
    );

    // 2. Informar el total pagado para cada empleado 
    const totalPorEmpleado = matriz.map((fila, index) => ({
      empleado: index + 1,
      total: fila.reduce((a, b) => a + b, 0)
    }));

    // 3. Promedio de cada mes por pago de salarios 
    const promedioPorMes = Array.from({ length: meses }, (_, colIndex) => {
      const sumaMes = matriz.reduce((acc, fila) => acc + fila[colIndex], 0);
      return {
        mes: colIndex + 1,
        promedio: sumaMes / empleados
      };
    });

    // 4. Total pagado en la matriz 
    const totalGeneral = totalPorEmpleado.reduce((acc, emp) => acc + emp.total, 0);

    console.log('Resultados del procesamiento de nómina:', matriz);
    return {
      matrizGenerada: matriz.map(fila => ({ salarios: fila })),
      resultados: {
        totalPorEmpleado,
        promedioPorMes,
        totalGeneral
      }
    };
  }
}