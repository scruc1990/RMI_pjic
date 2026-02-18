# Taller de Sistemas Distribuidos: Implementación RMI con NestJS

Este proyecto implementa un sistema distribuido que emula el comportamiento de **Remote Method Invocation (RMI)** utilizando el framework NestJS y transporte gRPC.

## Arquitectura del Servidor (Implementación gRPC)

El servidor ha sido implementado como un microservicio **gRPC** de alto rendimiento, actuando como el **Skeleton** en la arquitectura RMI. Utiliza el archivo `payroll.proto` como contrato vinculante para garantizar que la respuesta sea estructurada y precisa.

* **AppController**: Actúa como la interfaz de red que escucha las invocaciones remotas bajo el método `CalcularNomina`. Recibe los parámetros serializados, los valida y los despacha al servicio interno.
* **AppService**: Contiene la lógica central del sistema distribuido. Se encarga de generar la matriz de salarios con números aleatorios y realizar los cálculos de totales por empleado, promedios mensuales y el total general de la nómina.
* **Main (Microservice Configuration)**: Configura el transporte **gRPC** en el puerto `50051`. Define el paquete `payroll` y carga el archivo `.proto` para establecer el canal de comunicación seguro y tipado.


```mermaid
classDiagram
    class AppController {
        -AppService appService
        +calcularNomina(data)
    }
    class AppService {
        +procesarNomina(empleados, meses)
    }
    class Microservice {
        <<Main>>
        +Transport GRPC
        +Port 50051
        +Proto payroll.proto
    }
    AppController --> AppService : utiliza
    Microservice ..> AppController : despacha mensajes (RPC)