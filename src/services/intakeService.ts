/**
 * DigiSynq Intake Service
 * 
 * Provides client-side state persistence, diagnostic case generation,
 * and clean service abstraction for entertainment synchronization requests.
 * 
 * PRODUCTION API CONTRACT:
 * When connecting to the DigiSynq Production Gateway:
 * - POST /api/v1/synq/cases: Registers a new diagnostic case
 * - POST /api/v1/synq/intake: Submits a full resolution engagement
 * - GET  /api/v1/synq/cases/:id: Fetches diagnostic telemetry and status
 */

export interface DiagnosticResult {
  caseId: string;
  createdAt: string;
  stage: string;
  objective: string;
  blockage: string;
  location: string;
  event: string;
  impact: string;
  dependencies: string[];
  rootCause: string;
  missingCapability: string;
  recommendedIntervention: string;
  interventionClass: string;
  relevantMechanisms: string[];
  expectedOutcome: string;
  confidence: string;
  riskScore: 'Low' | 'Moderate' | 'High' | 'Critical';
  cascadePath: string[];
  status: 'prepared' | 'submitted' | 'triaged';
}

export interface SynqRequest {
  caseId: string;
  createdAt: string;
  name: string;
  organization: string;
  email: string;
  projectStage: string;
  urgency: 'routine' | 'urgent' | 'critical';
  problemDescription: string;
  symptoms: string[];
  estimatedBurnPerDay?: string;
  diagnosticCaseId?: string;
  status: 'prepared' | 'submitted';
}

/**
 * Generate standard DigiSynq Case ID: SYNC-YYYY-XXXXX
 */
export function generateCaseId(): string {
  const year = new Date().getFullYear();
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 5; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `SYNC-${year}-${rand}`;
}

const STORAGE_KEY_CASES = 'digisynq_diagnostic_cases';
const STORAGE_KEY_REQUESTS = 'digisynq_synq_requests';

export const intakeService = {
  /**
   * Save a diagnostic outcome to client storage
   */
  async saveDiagnosticResult(data: Omit<DiagnosticResult, 'caseId' | 'createdAt' | 'status'>): Promise<DiagnosticResult> {
    const caseId = generateCaseId();
    const result: DiagnosticResult = {
      ...data,
      caseId,
      createdAt: new Date().toISOString(),
      status: 'prepared'
    };

    try {
      const existing = this.getStoredCases();
      existing.unshift(result);
      // Keep last 20 cases
      localStorage.setItem(STORAGE_KEY_CASES, JSON.stringify(existing.slice(0, 20)));
    } catch (e) {
      console.warn('[DigiSynq Intake] LocalStorage save failed:', e);
    }

    return result;
  },

  /**
   * Retrieve all locally stored diagnostic cases
   */
  getStoredCases(): DiagnosticResult[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_CASES);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  /**
   * Retrieve single diagnostic case by ID
   */
  getCaseById(caseId: string): DiagnosticResult | undefined {
    return this.getStoredCases().find(c => c.caseId === caseId);
  },

  /**
   * Save an engagement request
   */
  async submitSynqRequest(data: Omit<SynqRequest, 'caseId' | 'createdAt' | 'status'>): Promise<SynqRequest> {
    const caseId = generateCaseId();
    const request: SynqRequest = {
      ...data,
      caseId,
      createdAt: new Date().toISOString(),
      status: 'prepared'
    };

    try {
      const existing = this.getStoredRequests();
      existing.unshift(request);
      localStorage.setItem(STORAGE_KEY_REQUESTS, JSON.stringify(existing.slice(0, 20)));
    } catch (e) {
      console.warn('[DigiSynq Intake] LocalStorage save failed:', e);
    }

    return request;
  },

  getStoredRequests(): SynqRequest[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_REQUESTS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
};
