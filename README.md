# hackitba-2024

Repositorio usado para la Hackaton organizada por el computing club de la ITBA en 2024

## Organización del Backend

El backend se organiza de la siguiente forma

```bash
.
├── routes/ # Se encarga de mapear las urls a un controller
├── controllers/ # Se encarga de recibir las Requests, y en base a un modelo, enviar una Response
├── models/ # Se encarga de definir los modelos de datos y abstraer la interaccion con la BBDD
└── schemas/ # Aca se definen los esquemas de datos y hace la verificacion en runtime
├── middleware/ # Se encarga de los middlewares necesarios, como el CORS
```

