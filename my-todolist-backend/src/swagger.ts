import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'A simple Express Todo API',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // ✅ Correct path for TypeScript files
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  console.log('✅ Swagger is being set up...');

  // Serve Swagger UI at /api-docs
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // ✅ Serve raw OpenAPI JSON at /api-docs-json
  app.get('/api-docs-json', (_req, res) => {
    console.log('📘 /api-docs-json route was hit'); // <-- Log when the route is accessed
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}





