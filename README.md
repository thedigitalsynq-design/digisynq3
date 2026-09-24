# DigiSynq

> **Sync in All Stages of Filmmaking.**  
> An asset-light cinema problem-solving company building a synchronization layer across the filmmaking ecosystem.  
> *Find the gap. SYNQ the system. Create value.*

---

## 🌐 Overview

DigiSynq provides an ecosystem-wide coordination and synchronization architecture across the entire cinematic journey—unifying creators, producers, crews, technicians, post-production houses, distributors, exhibitors, audiences, and financial partners.

---

## 📁 Repository Structure

```
digisynq-unified/
├── public/                 # Static assets, logos, and robots.txt
├── src/
│   ├── assets/             # Branding assets (digisynq-logo.png)
│   ├── components/         # Reusable UI & diagram components
│   │   ├── EcosystemMap.tsx       # Interactive ecosystem node map
│   │   ├── ErrorBoundary.tsx      # Application error boundary
│   │   ├── ProblemEngine.tsx      # Interactive problem diagnosis engine
│   │   ├── SiteFooter.tsx         # Global site footer & principle links
│   │   ├── SiteNav.tsx            # Global navigation bar & audio controls
│   │   └── SynqFlowDiagram.tsx    # 4-stage SYNQ lifecycle flow diagram
│   ├── data/               # Static datasets and configuration
│   │   ├── core_data.ts           # Principles, stages, workshops, revenue streams
│   │   ├── participants.ts        # Ecosystem participants and roles
│   │   └── problem_categories.ts  # Problem definitions and solutions
│   ├── pages/              # Primary route views
│   │   ├── AboutPage.tsx          # About DigiSynq, mission, principles
│   │   ├── EcosystemPage.tsx      # Comprehensive cinema ecosystem explorer
│   │   ├── HomePage.tsx           # Platform landing page & highlights
│   │   ├── HowItWorksPage.tsx     # The 4-step SYNQ operational cycle
│   │   ├── InsightsPage.tsx       # Research papers, briefings, whitepapers
│   │   ├── StartSynqPage.tsx      # Onboarding & engagement inquiry portal
│   │   ├── TheSynqPage.tsx        # Methodology, architecture, deep dive
│   │   └── WorkshopsPage.tsx      # Hands-on industry sync workshops
│   ├── utils/              # Client utilities
│   │   └── audio.ts               # Web Audio API sound generator
│   ├── App.tsx             # Root layout and route configuration
│   ├── index.css           # Design tokens, Apple ease transitions & styles
│   └── main.tsx            # Application entry point
├── index.html              # HTML shell & metadata
├── package.json            # Project scripts and dependencies
├── server.js               # Dev server & production static server
└── vite.config.ts          # Vite bundler configuration
```

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons, Framer Motion
- **Sound**: Web Audio API synthetics (zero audio asset dependencies)
- **Server**: Node.js & Express (with integrated Vite dev middleware)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
# or: node server.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Build output is saved to the `dist/` directory.

---

## 📄 License
Apache-2.0
