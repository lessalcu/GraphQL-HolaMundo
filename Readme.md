# GraphQL Hello World - Node.js

This is a **"Hello World"** project using **GraphQL** with **Express.js** and **Node.js**. The API exposes a `/graphql` route to run **GraphQL** queries and responds with a "Hello World with GraphQL" message.

## Features

- **GraphQL** based architecture.
- Responds to `hello` query on `/graphql` route.
- Automatically generated API documentation with **Swagger UI**.

##Requirements

- Node.js
- Express
- Express-GraphQL
- GraphQL
- Swagger-UI-Express
- Swagger-JSDoc

## Installation

1. Clone the repository:
```tap
git clone https://github.com/lessalcu/GraphQL-HelloWorld.git
cd graphql-hello-world-node
```

2. Install the dependencies:
```tap
npm install
```

3. Run the application:
```tap
node index.js
```

4. Open Swagger UI to consult the documentation:
- Access [http://localhost:4000/api-docs](http://localhost:4000/api-docs)

## Docker

### Building the image Docker

1. Build the Docker image:
``bash
docker build -t hello-world-graphql .
```

2. Run the Docker container:
```tap
docker run -p 4000:4000 --name hello-world-graphql-container hello-world-graphql
```

3. Access the API:
- Arrogance: [http://localhost:4000/api-docs](http://localhost:4000/api-docs)
- GraphQL: Queries [http://localhost:4000/graphql](http://localhost:4000/graphql)

### Push the image to Docker Hub

1. Log in to Docker Hub:
```tap
login to docker
```

2. Tag your image:
```tap
tag docker hello-world-graphql lssalas/hello-world-graphql:latest
```

3. Upload the image:
```tap
docker push lssalas/hello-world-graphql:last
```

### Download the image from Docker Hub

1. To download the image from Docker Hub:
```tap
docker pull lssalas/hello-world-graphql:last
```

## Notes

This project serves as a basic example to understand the implementation of a **GraphQL** API in Node.js with Express.
```