<h1 align="center" id="title">Jano - HackIT/BA 2024</h1>

<p id="description">Proyecto Jano presentado por el equipo "Es todo un tema viste" para el HackIT/BA 2024</p>

<div style="display:flex; gap: 5px; justify-content:center">

<img alt="Static Badge" src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react">

<img src="https://img.shields.io/badge/Docker-darkblue?style=for-the-badge&amp;logo=docker" alt="shields">

<img src="https://img.shields.io/badge/Node-20-green?style=for-the-badge&amp;logo=nodedotjs" alt="shields">

<img alt="Static Badge" src="https://img.shields.io/badge/ExpressJS-grey?style=for-the-badge&logo=express">

<img alt="Static Badge" src="https://img.shields.io/badge/MongoDB-grey?style=for-the-badge&logo=mongodb">

</div>

<h2>🛠️ Pasos de instlacion:</h2>

<p>1. Instalar Docker</p>

```
Seguir la documentacion de https://docs.docker.com/engine/install/
```

<p>2. Añadir los archivos .env</p>

```
En backend/src/environments/ añadir el archivo .env.production proovisto. Esto permite la conexion con mongoDB y openAI
```

<p>3. Ejecutar docker compose</p>

```
Ejecutar docker compose up --build para levantar el backend
```

<p>4. En otra terminal, levantar el frontend</p>

```
cd Jano-frontend/
npm install
npm run dev
```

<p>5. Abrir http://localhost:5173</p>

<h2> Sobre el backend</h2>
Se puede leer más información en [El readme de backend](backend/README.md)

Se levanta sobre el endpoint `/docs` la documentación en Swagger

<h2>💻 Hecho con</h2>

Tecnologías usadas en el proyecto:

- Node
- Express
- MongoDB
- React
- Docker

<h2>🛡️ Licencia:</h2>

Este proyecto esta licensiado bajo la licencia MIT
