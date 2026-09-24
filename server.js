import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const REQUESTED_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());

// Public static assets
app.use(express.static(join(__dirname, 'public')));

// Simple Health endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'digisynq', time: new Date().toISOString() });
});

if (!IS_PROD) {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);

  app.use(async (req, res, next) => {
    if (req.method !== 'GET') return next();
    if (req.path.startsWith('/api')) return next();
    try {
      const url = req.originalUrl;
      let template = fs.readFileSync(join(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      if (vite.ssrFixStacktrace) vite.ssrFixStacktrace(e);
      next(e);
    }
  });
} else {
  const distPath = join(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(join(distPath, 'index.html'));
  });
}

function startServer(port, attemptsLeft = 5) {
  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`\n  DIGISYNQ Platform Server`);
    console.log(`  ─────────────────────────`);
    console.log(`  Local:   http://localhost:${port}`);
    console.log(`  Network: http://0.0.0.0:${port}\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && attemptsLeft > 0) {
      console.warn(`Port ${port} in use, trying ${port + 1}...`);
      startServer(port + 1, attemptsLeft - 1);
    } else {
      console.error('Server startup error:', err);
    }
  });

  const shutdown = (signal) => {
    console.log(`\n[${signal}] Shutting down gracefully...`);
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 5000).unref();
  };
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

startServer(REQUESTED_PORT);
