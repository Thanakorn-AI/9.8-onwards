// patientor_backend/src/index.ts
import express from 'express';

const app = express();
app.use(express.json()); // Parse JSON requests

const PORT = 3001; // Matches frontend’s apiBaseUrl

app.get('/api/ping', (_req, res) => {
  console.log('Ping received');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});