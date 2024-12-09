const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Construcción del esquema GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Resolver para la consulta "hello"
const root = {
  hello: () => 'Hello World with GraphQL',
};

// Crear la aplicación Express
const app = express();

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'GraphQL Hello World API',
      version: '1.0.0',
      description: 'A simple Hello World GraphQL API',
    },
    // Definir las rutas de las operaciones en Swagger
    paths: {
      '/graphql': {
        post: {
          summary: 'Query Hello World',
          description: 'This is the GraphQL endpoint to query hello world message.',
          responses: {
            200: {
              description: 'A successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      data: {
                        type: 'object',
                        properties: {
                          hello: {
                            type: 'string',
                            example: 'Hello World with GraphQL',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['index.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Usar Swagger UI para documentar la API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Usar GraphQL con express
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Iniciar el servidor en el puerto 4000
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/graphql');
  console.log('Swagger UI available on http://localhost:4000/api-docs');
});