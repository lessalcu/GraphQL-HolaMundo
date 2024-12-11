```markdown
# GraphQL Hello World - Node.js

Este es un proyecto de **"Hola Mundo"** utilizando **GraphQL** con **Express.js** y **Node.js**. La API expone una ruta `/graphql` para ejecutar consultas **GraphQL** y responder con un mensaje "Hello World with GraphQL".

## Características

- Arquitectura basada en **GraphQL**.
- Responde a la consulta `hello` en la ruta `/graphql`.
- Documentación de la API generada automáticamente con **Swagger UI**.

## Requisitos

- Node.js
- Express
- Express-GraphQL
- GraphQL
- Swagger-UI-Express
- Swagger-JSDoc

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/lessalcu/GraphQL-HolaMundo.git
   cd graphql-hello-world-node
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta la aplicación:
   ```bash
   node index.js
   ```

4. Abre Swagger UI para consultar la documentación:
   - Accede a [http://localhost:4000/api-docs](http://localhost:4000/api-docs)

## Docker

### Construcción de la imagen Docker

1. Construye la imagen Docker:
   ```bash
   docker build -t hello-world-graphql .
   ```

2. Ejecuta el contenedor Docker:
   ```bash
   docker run -p 4000:4000 --name hello-world-graphql-container hello-world-graphql
   ```

3. Accede a la API:
   - Swagger: [http://localhost:4000/api-docs](http://localhost:4000/api-docs)
   - GraphQL: Realiza consultas en [http://localhost:4000/graphql](http://localhost:4000/graphql)

### Subir la imagen a Docker Hub

1. Inicia sesión en Docker Hub:
   ```bash
   docker login
   ```

2. Etiqueta tu imagen:
   ```bash
   docker tag hello-world-graphql lssalas/hello-world-graphql:latest
   ```

3. Sube la imagen:
   ```bash
   docker push lssalas/hello-world-graphql:latest
   ```

### Descargar la imagen desde Docker Hub

1. Para descargar la imagen desde Docker Hub:
   ```bash
   docker pull lssalas/hello-world-graphql:latest
   ```

## Notas

Este proyecto sirve como ejemplo básico para entender la implementación de una API **GraphQL** en Node.js con Express.
```