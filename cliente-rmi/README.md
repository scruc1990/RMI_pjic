# Taller de Sistemas Distribuidos: Implementación RMI con NestJS (Cliente)

Este proyecto implementa el componente **Cliente** del sistema distribuido, encargado de la captura de datos y la invocación de métodos remotos utilizando el framework NestJS y transporte gRPC.

## Arquitectura del Cliente (Implementación gRPC)

El cliente ha sido rediseñado para utilizar **gRPC** sobre **HTTP/2**, lo que permite una comunicación fuertemente tipada a través del archivo `payroll.proto`. 

* **AppController**: Captura los parámetros `empleados` y `meses` desde una petición HTTP GET.
* **AppService**: Actúa como el **Stub** de RMI. Al inicializar el módulo (`onModuleInit`), obtiene la interfaz del servicio remoto y realiza la invocación de forma transparente.
* **ClientsModule**: Centraliza la configuración de la conexión, vinculando el paquete `payroll` con el puerto `50051`.


```mermaid
classDiagram
    class AppController {
        -AppService appService
        +calcular(empleados, meses)
    }
    class AppService {
        -ClientGrpc client
        -PayrollService payrollService
        +onModuleInit()
        +enviarSolicitudNomina(numEmpleados, numMeses)
    }
    class ClientsModule {
        <<Config>>
        +Transport GRPC
        +Port 50051
        +Proto payroll.proto
    }
    AppController --> AppService : solicita cálculo
    AppService --> ClientsModule : obtiene Proxy (Stub)