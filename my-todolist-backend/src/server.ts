import app from './app';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
