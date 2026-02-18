# Taller de Sistemas Distribuidos: Implementación RMI con NestJS

[cite_start]Este proyecto implementa un sistema distribuido que emula el comportamiento de **Remote Method Invocation (RMI)** utilizando el framework NestJS y transporte TCP.

## 1. Diagrama de Clases (Arquitectura del Servidor)

[cite_start]El siguiente diagrama representa la estructura del servidor, donde el `App.Controller` actúa como la implementación de la interfaz remota y el `App.Service` contiene la lógica de negocio.


```mermaid
classDiagram
    class AppController {
        -AppService appService
        +handleCalcularNomina(data)
    }
    class AppService {
        +procesarNomina(empleados, meses)
    }
    class Microservice {
        <<Main>>
        +Transport TCP
        +Port 3001
    }
    AppController --> AppService : utiliza
    Microservice ..> AppController : despacha mensajes