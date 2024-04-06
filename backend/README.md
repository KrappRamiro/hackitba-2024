# Organización del Backend

El backend se organiza de la siguiente forma

```bash
.
├── package.json
├── package-lock.json
├── src
│   ├── app.ts # Inicia la aplicacion, es llamado por run-server.ts
│   ├── controllers/ # Se encarga de recibir las Requests, y en base a un modelo, enviar una Response
│   ├── middlewares/ # Se encarga de los middlewares necesarios, como el CORS
│   │   └── cors.ts
│   ├── models/ # Se encarga de definir los modelos de datos y abstraer la interaccion con la BBDD
│   ├── routes/ # Se encarga de mapear las urls a un controller
│   ├── run-server.ts # Corre el server
│   ├── schemas/ # Aca se definen los esquemas de datos y hace la verificacion en runtime
│   └── swagger/ # En swagger se define la specificacion de OpenAPI usada por swagger
│       ├── unaRouteAca/ # Se hace esta carpeta por cada route
│       │   ├── routes.js # Se definen los endpoints de una ruta
│       │   ├── schema.js # Se define el esquema de datos a usar en el endpoint
│       │   └── tags.js # Se definen los tags de esa ruta, usado tanto en ./routes.js como en ../openapi.js
│       └── openapi.js # La spec
└── tsconfig.json
```

## Las rutas

Estas fueron documentadas con https://medium.com/@HargitaiSoma/how-you-should-have-started-to-add-swagger-to-your-express-api-672a6b0a6680

Podes encontrar la documentación de las mismas levantando el servidor con `npm run dev` y yendo al endpoint `/docs`