import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteMetadata {
  title: string;
  description: string;
  breadcrumb: string;
}

const BASE_URL = 'https://thedigitalsynq-design.github.io/digisynq3';

const ROUTE_REGISTRY: Record<string, RouteMetadata> = {
  '/': {
    title: 'DigiSynq — Entertainment Synchronization Infrastructure',
    description: 'When the entertainment system breaks, DigiSynq finds why. Root-cause synchronization and dependency orchestration across production, talent, capacity, financing, and distribution.',
    breadcrumb: 'Home'
  },
  '/the-synq': {
    title: 'The Synq — Structured Operational Interventions | DigiSynq',
    description: 'A SYNQ is a structured intervention connecting a specific system problem to the people, resources, capabilities, and decisions required to resolve it.',
    breadcrumb: 'The Synq'
  },
  '/how-it-works': {
    title: 'How It Works — The 5-Stage Synchronization Model | DigiSynq',
    description: 'Explore the 5-stage operating methodology: Sense, Diagnose, Map, Synq, and Control. From symptom detection to permanent prevention.',
    breadcrumb: 'How It Works'
  },
  '/ecosystem': {
    title: 'Ecosystem — 15 Connected Industry Nodes | DigiSynq',
    description: 'Interactive topological network graph of the 15 primary entertainment entities: producers, crew, talent, soundstages, post houses, VFX, financiers, and platforms.',
    breadcrumb: 'Ecosystem'
  },
  '/mechanisms': {
    title: '23 Mechanisms — Algorithmic Coordination Protocols | DigiSynq',
    description: 'The complete console of 23 deterministic mechanisms from M01 Observe to M23 Value Engine, featuring the M07 Algorithmic Priority Calculator.',
    breadcrumb: '23 Mechanisms'
  },
  '/continuum': {
    title: '9-Stage Continuum — Complete Entertainment Lifecycle | DigiSynq',
    description: 'Explore the unbroken lifecycle from Idea, Development, Pre-Production, Filming, Post, Marketing, Distribution to Monetization and System Memory.',
    breadcrumb: '9-Stage Continuum'
  },
  '/stakeholders': {
    title: 'Stakeholder Archetypes — Needs, Friction & Covenants | DigiSynq',
    description: 'Deep dive into 15 entertainment stakeholder archetypes: what they provide, what they need, recurring friction points, and DigiSynq intervention covenants.',
    breadcrumb: 'Stakeholders'
  },
  '/engines': {
    title: 'Simulation Engines — Computational Intelligence Stack | DigiSynq',
    description: 'Run simulations across the Root Map, Cascade Simulator, Problem Taxonomy, Multi-Factor Risk Engine, Capacity Matcher, and System Memory flywheel.',
    breadcrumb: 'Engines'
  },
  '/engines/cascade': {
    title: 'Cascade Simulator — Blast Radius Modeling | DigiSynq',
    description: 'Simulate downstream blast radiuses from soundstage delay through crew rescheduling, post compression, and release window jeopardy.',
    breadcrumb: 'Cascade Simulator'
  },
  '/engines/root-map': {
    title: 'Root Map Engine — 13-Step Tree Traversal | DigiSynq',
    description: 'Interactive causal tree isolating the path from surface friction down to core structural deficit and missing capabilities.',
    breadcrumb: 'Root Map'
  },
  '/engines/problem-taxonomy': {
    title: 'Problem Taxonomy — 6 Failure Domains & 24 Archetypes | DigiSynq',
    description: 'A comprehensive taxonomy classifying entertainment breakdowns into Pre-Production Chaos, Schedule Ruptures, Post Bottlenecks, and Rights Leakage.',
    breadcrumb: 'Problem Taxonomy'
  },
  '/engines/risk': {
    title: 'Risk Engine — Multi-Factor Algorithmic Scoring | DigiSynq',
    description: 'Calculate quantitative risk scores: RISK = Probability × Impact × Dependency × Time Sensitivity across all pipeline threats.',
    breadcrumb: 'Risk Engine'
  },
  '/blueprint': {
    title: 'The Codex — Master Unified Blueprint | DigiSynq',
    description: 'Fourteen core architectural domains defining the mathematics, mechanisms, data models, economics, and moats of entertainment synchronization.',
    breadcrumb: 'Codex Blueprint'
  },
  '/runbook': {
    title: 'The Runbook — 13-Step Standard Operating Procedure | DigiSynq',
    description: 'The definitive 13-step SOP from Observe to Prevent, detailing Input, Action, Output, Decision Gate, Owner, and Success Conditions.',
    breadcrumb: 'Runbook'
  },
  '/workshops': {
    title: 'Capability Labs — Hands-On Technical Workshops | DigiSynq',
    description: 'Professional masterclasses and hands-on labs bridging creative teams and crew into modern virtual production, digital dailies, and AI pipelines.',
    breadcrumb: 'Workshops'
  },
  '/insights': {
    title: 'Field Notes — Empirical Observations & Telemetry | DigiSynq',
    description: 'DigiSynq Field Notes: empirical set observations, soundstage dark-floor liquidity data, and discrete event simulation dispatches.',
    breadcrumb: 'Field Notes'
  },
  '/about': {
    title: 'About DigiSynq — Infrastructure Philosophy & Origins | DigiSynq',
    description: 'Why DigiSynq exists: solving the coordination failure in entertainment through asset-light orchestration and compounding institutional memory.',
    breadcrumb: 'About'
  },
  '/diagnose': {
    title: 'Root-Cause Diagnostic — 11-Step Interactive Triage | DigiSynq',
    description: 'Execute an 11-step diagnostic session to isolate root causes, project blast radius, and generate a certified DigiSynq Diagnostic Dossier.',
    breadcrumb: 'Diagnostic'
  },
  '/start': {
    title: 'Start a SYNQ — Production Intake & Case Registration | DigiSynq',
    description: 'Submit an operational breakdown or schedule rupture to the DigiSynq Production Gateway. Receive a tracked Case ID: SYNC-YYYY-XXXXX.',
    breadcrumb: 'Start a SYNQ'
  },
  '/system-flow': {
    title: 'System Flowchart — Complete DigiSynq Decision Logic & Architecture | DigiSynq',
    description: 'Interactive end-to-end flowchart illustrating the complete DigiSynq system: variance detection, triage routing, root-cause diagnosis, covenant structuring, and system memory.',
    breadcrumb: 'System Flowchart'
  }
};

export function RouteSEO() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/$/, '') || '/';
    const meta = ROUTE_REGISTRY[pathname] || ROUTE_REGISTRY['/'];

    // 1. Update Document Title
    document.title = meta.title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = selector.replace(/[\[\]"]/g, '').split('=');
        if (attrName && attrVal) {
          el.setAttribute(attrName, attrVal);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // 3. Helper to set link tag
    const setLinkTag = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    const canonicalUrl = `${BASE_URL}${pathname === '/' ? '' : pathname}`;

    // Standard Meta
    setMetaTag('meta[name="description"]', 'content', meta.description);
    setLinkTag('canonical', canonicalUrl);

    // OpenGraph
    setMetaTag('meta[property="og:title"]', 'content', meta.title);
    setMetaTag('meta[property="og:description"]', 'content', meta.description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);

    // Twitter Card
    setMetaTag('meta[name="twitter:title"]', 'content', meta.title);
    setMetaTag('meta[name="twitter:description"]', 'content', meta.description);

    // Structured Data: BreadcrumbList
    const breadcrumbJson = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': BASE_URL
        },
        ...(pathname !== '/'
          ? [
              {
                '@type': 'ListItem',
                'position': 2,
                'name': meta.breadcrumb,
                'item': canonicalUrl
              }
            ]
          : [])
      ]
    };

    let scriptEl = document.getElementById('route-breadcrumb-schema') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'route-breadcrumb-schema';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(breadcrumbJson);

  }, [location.pathname]);

  return null;
}
