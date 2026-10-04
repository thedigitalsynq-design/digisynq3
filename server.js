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
  res.json({
    status: 'online',
    service: 'DIGISYNQ Synchronization Infrastructure',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    mechanismsActive: 23,
    continuumStages: 9,
    stakeholdersMapped: 12,
  });
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

function printServerBanner(port) {
  const cyan = '\x1b[36m';
  const green = '\x1b[32m';
  const yellow = '\x1b[33m';
  const dim = '\x1b[2m';
  const bold = '\x1b[1m';
  const reset = '\x1b[0m';

  console.log(`
${green}${bold}╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║   ██████╗ ██╗ ██████╗ ██╗███████╗██╗   ██╗███╗   ██╗ ██████╗       ║
║   ██╔══██╗██║██╔════╝ ██║██╔════╝╚██╗ ██╔╝████╗  ██║██╔═══██╗      ║
║   ██║  ██║██║██║  ███╗██║███████╗ ╚████╔╝ ██╔██╗ ██║██║   ██║      ║
║   ██║  ██║██║██║   ██║██║╚════██║  ╚██╔╝  ██║╚██╗██║██║▄▄ ██║      ║
║   ██████╔╝██║╚██████╔╝██║███████║   ██║   ██║ ╚████║╚██████╔╝      ║
║   ╚═════╝ ╚═╝ ╚═════╝ ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝ ╚══▀▀═╝       ║
║                                                                    ║
║   ${bold}ENTERTAINMENT SYNCHRONIZATION INFRASTRUCTURE${reset}${green}                 ║
║   ${dim}Tagline: Sync in All Stages of Filmmaking.${reset}${green}                       ║
║   ${dim}Mission: Find the gap. SYNQ the system. Create value.${reset}${green}            ║
╚════════════════════════════════════════════════════════════════════╝${reset}

  ${bold}SYSTEM STATUS:${reset}     ${green}● ONLINE & SYNCHRONIZED${reset}
  ${bold}MODE:${reset}              ${yellow}${IS_PROD ? 'PRODUCTION' : 'DEVELOPMENT (VITE HMR ACTIVE)'}${reset}
  ${bold}LOCAL ACCESS:${reset}      ${cyan}http://localhost:${port}${reset}
  ${bold}NETWORK ACCESS:${reset}    ${cyan}http://0.0.0.0:${port}${reset}
  ${bold}HEALTH METRICS:${reset}    ${cyan}http://localhost:${port}/api/health${reset}

  ${dim}────────────────────────────────────────────────────────────────────${reset}
  ${bold}ACTIVE SYNCHRONIZATION ROUTES:${reset}
  ${dim}•${reset} /                 ${dim}Landing Page (The Architecture of the Space Between)${reset}
  ${dim}•${reset} /mechanisms       ${dim}The 23 Master System Mechanisms & Priority Engine${reset}
  ${dim}•${reset} /continuum        ${dim}The 9-Stage Entertainment Continuum (Idea → Memory)${reset}
  ${dim}•${reset} /stakeholders     ${dim}The 12 Primary Industry Archetypes & Dossiers${reset}
  ${dim}•${reset} /engines          ${dim}Interactive Simulation Engines (Cascade, Tree, Risk)${reset}
  ${dim}•${reset} /how-it-works     ${dim}10-Step Resolution Engagement & Failure Walkthrough${reset}
  ${dim}•${reset} /workshops        ${dim}6 Professional Capability Labs & Talent Tracks${reset}
  ${dim}•${reset} /blueprint        ${dim}70-Section Master Unified Codex & Architecture${reset}
  ${dim}•${reset} /runbook          ${dim}Operational Runbook (6 Industry Playbooks)${reset}
  ${dim}•${reset} /insights         ${dim}Industry Intelligence & Policy Briefs${reset}
  ${dim}•${reset} /the-synq         ${dim}Cinematic Architecture Deck & Discovery Mesh${reset}
  ${dim}•${reset} /about            ${dim}Company Manifesto, 10 Rules & Organizational Model${reset}
  ${dim}•${reset} /start            ${dim}Confidential Project & Resolution Intake Terminal${reset}
  ${dim}────────────────────────────────────────────────────────────────────${reset}
`);
}

function startServer(port, attemptsLeft = 5) {
  const server = app.listen(port, '0.0.0.0', () => {
    printServerBanner(port);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && attemptsLeft > 0) {
      console.warn(`\x1b[33m[WARN] Port ${port} is in use, shifting to ${port + 1}...\x1b[0m`);
      startServer(port + 1, attemptsLeft - 1);
    } else {
      console.error('\x1b[31m[ERROR] Server startup failed:\x1b[0m', err);
    }
  });

  const shutdown = (signal) => {
    console.log(`\n\x1b[33m[${signal}] Shutting down DIGISYNQ platform server gracefully...\x1b[0m`);
    server.close(() => {
      console.log('\x1b[32m[DONE] All connections terminated. DIGISYNQ server stopped.\x1b[0m');
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 5000).unref();
  };
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

startServer(REQUESTED_PORT);
