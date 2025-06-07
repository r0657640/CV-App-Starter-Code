import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve de dist folder
app.use((req, res, next) => {
  console.log('Incoming request:', req.url);
  next();
});

// Voor SPA routing (react-router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log('Route:', r.route.path);
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
