# Taller de Sistemas Distribuidos: Implementación RMI con NestJS (Cliente)

Este proyecto implementa el componente **Cliente** del sistema distribuido, encargado de la captura de datos y la invocación de métodos remotos utilizando el framework NestJS y transporte TCP.

## 1. Diagrama de Clases (Arquitectura del Cliente)

El siguiente diagrama representa la estructura del cliente, donde el `App.Controller` gestiona la entrada del usuario y el `App.Service` utiliza un **ClientProxy** para comunicarse con el servidor remoto.

[Image of a UML class diagram for a NestJS client microservice showing AppController, AppService, and ClientProxy interaction]

```mermaid
classDiagram
    class AppController {
        -AppService appService
        +calcular(empleados, meses)
    }
    class AppService {
        -ClientProxy clientProxy
        +enviarSolicitudNomina(numEmpleados, numMeses)
    }
    class ClientsModule {
        <<Config>>
        +Transport TCP
        +Port 3001
    }
    AppController --> AppService : solicita cálculo
    AppService --> ClientsModule : utiliza Proxy (RMI)