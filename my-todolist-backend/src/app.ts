import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todo.routes'; // Import todo routes
import { setupSwagger } from './swagger'; // Import Swagger setup

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Your Next.js dev server
}));

app.use(express.json());

// ✅ Root test route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// Setup Swagger docs at /api-docs
setupSwagger(app); // Setup Swagger UI

// Mount todo routes at /api
app.use('/api', todoRoutes);

export default app;




