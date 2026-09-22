export type ProductCategory =
  | 'Intelligence'
  | 'Audience'
  | 'Reputation'
  | 'Talent'
  | 'Production'
  | 'Distribution'
  | 'Marketing'
  | 'Content & Rights'
  | 'Capital'
  | 'Assets'
  | 'Operations'
  | 'Network';

export type BusinessModel =
  | 'SaaS'
  | 'Marketplace'
  | 'Enterprise'
  | 'Intelligence'
  | 'API';

export type TargetUser =
  | 'Producers'
  | 'Production Teams'
  | 'Talent & Crew'
  | 'Distributors'
  | 'Exhibitors'
  | 'Brands & Sponsors'
  | 'Creators'
  | 'Investors'
  | 'Audiences';

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  targetUsers: TargetUser[];
  businessModel: BusinessModel;
  description: string;
  problemSolved: string;
  capabilities: string[];
  workflowSteps: string[];
  networkConnections: string[];
}

export interface PlatformItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  iconName: string;
  ctaText: string;
  products: string[];
  highlightMetric?: string;
  metricsLabel?: string;
}

export interface AudienceSegment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  painPoint: string;
  digiSynqSolution: string;
  keyProducts: string[];
  businessModelNote: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  query: string;
  persona: string;
  stages: {
    stage: string;
    action: string;
    detail: string;
  }[];
  outcome: string;
  connectedNodes: string[];
}

export interface PrincipleItem {
  name: string;
  summary: string;
  detail: string;
}

export type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
export type IncidentStatus = 'ACTIVE' | 'INVESTIGATING' | 'RESPONDING' | 'MONITORING' | 'RESOLVED';
export type Sentiment = 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
export type ConfidenceLevel = 'OBSERVED' | 'INFERRED' | 'ESTIMATED' | 'AI-GENERATED' | 'UNVERIFIED';

export interface Film {
  id: string;
  title: string;
  genre: string;
  languages: string[];
  releaseDate: string;
  status: 'PRE-RELEASE' | 'RELEASED' | 'POST-RELEASE';
}

export interface CrisisScore {
  overall: number;
  sentiment: number;
  velocity: number;
  reach: number;
  authority: number;
  coordination: number;
  persistence: number;
}

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  severity: Severity;
  type: 'VIRAL_POST' | 'NEWS_ALERT' | 'INFLUENCER_SPIKE' | 'HASHTAG' | 'SENTIMENT_SHIFT' | 'MISINFORMATION' | 'AUDIENCE_SHIFT' | 'INCIDENT';
  source?: string;
  reach?: string;
  confidence?: number;
}

export interface Incident {
  id: string;
  code: string;
  title: string;
  severity: Severity;
  status: IncidentStatus;
  firstDetected: string;
  velocity: string;
  reach: string;
  sentiment: number;
  authorityScore: number;
  owner: string;
  recommendation: string;
  whatWeKnow: string;
  whatWeDontKnow: string[];
  recommendedActions: string[];
}

export interface Signal {
  id: string;
  type: 'VIRAL_POST' | 'NEWS_ALERT' | 'INFLUENCER_SPIKE' | 'HASHTAG' | 'SENTIMENT_SHIFT' | 'MISINFORMATION' | 'AUDIENCE_SHIFT';
  title: string;
  source: string;
  time: string;
  velocity: string;
  reach: string;
  sentiment: Sentiment;
  confidence: number;
  confidenceLevel: ConfidenceLevel;
}

export interface Narrative {
  id: string;
  title: string;
  share: number;
  sentiment: Sentiment;
  velocity: string;
  posts: number;
  influencers: number;
  hashtags: string[];
  origin: string;
  amplifiers: string[];
  audience: string;
  geography: string;
  timeline: string;
  evidence: string[];
}

export interface SocialPost {
  id: string;
  platform: 'X' | 'INSTAGRAM' | 'YOUTUBE' | 'REDDIT' | 'FACEBOOK';
  author: string;
  handle: string;
  followers: string;
  text: string;
  engagement: string;
  reach: string;
  sentiment: Sentiment;
  riskContribution: number;
  time: string;
  narrative: string;
}

export interface MediaStory {
  id: string;
  publication: string;
  headline: string;
  timestamp: string;
  reach: string;
  sentiment: Sentiment;
  narrative: string;
  influence: number;
}

export interface Influencer {
  id: string;
  name: string;
  handle: string;
  category: 'ACTOR' | 'CREATOR' | 'JOURNALIST' | 'CRITIC' | 'FAN_ACCOUNT' | 'POLITICAL_FIGURE' | 'ENTERTAINMENT_PAGE';
  audience: string;
  engagement: string;
  sentiment: Sentiment;
  reach: string;
  narrative: string;
  influenceScore: number;
}

export interface ResponsePlan {
  id: string;
  incidentId: string;
  status: 'DRAFT' | 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED' | 'EXECUTED';
  strategy: string;
  channel: string;
  tone: string;
  draft: string;
}

export interface Alert {
  id: string;
  title: string;
  severity: Severity;
  time: string;
  read: boolean;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
}

export type LeakStatus = 'ACTIVE' | 'TAKEDOWN_SENT' | 'REMOVED';
export type LeakPlatform = 'STREAMING' | 'TORRENT' | 'TELEGRAM' | 'FILE_HOST' | 'SOCIAL';

export interface LeakLink {
  id: string;
  host: string;
  url: string;
  platform: LeakPlatform;
  quality: 'CAM' | 'HDTS' | 'HDTC' | 'HD' | '1080P' | '4K';
  threat: Severity;
  detected: string;
  views: string;
  status: LeakStatus;
  statusUpdated: string;
}

export type NodeId = 
  | 'brand'
  | 'web'
  | 'social'
  | 'search'
  | 'content'
  | 'marketing'
  | 'design'
  | 'technology'
  | 'data'
  | 'automation'
  | 'ecommerce'
  | 'growth';

export type SynqMode = 'ONE_SPECIALIST' | 'ONE_TEAM' | 'ENTIRE_SYSTEM';

export interface DigitalExtensionTeam {
  id: string;
  needPrompt: string;
  teamTitle: string;
  shortRole: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  interconnects: string[];
  metricImpact: string;
}

export interface SubsystemStep {
  name: string;
  code: string;
  description: string;
  metrics: string;
  signals: string[];
}

export interface EcosystemNode {
  id: NodeId;
  label: string;
  category: string;
  angle: number; // orbital angle in degrees
  distance: number; // distance from center
  shortDescription: string;
  roleInFootprint: string;
  connectedTo: NodeId[];
  subsystemFlow: SubsystemStep[];
  diagnosticQuestions: string[];
  liveSignalDemo: {
    type: string;
    title: string;
    metrics: { label: string; value: string; status: 'optimal' | 'warning' | 'critical' }[];
    telemetryText: string;
  };
}

export type OutcomeCategory = 'BUILD' | 'DISCOVER' | 'CONNECT' | 'CONVERT' | 'GROW';

export interface OutcomeSystem {
  id: OutcomeCategory;
  headline: string;
  tagline: string;
  primaryNodes: NodeId[];
  components: {
    title: string;
    description: string;
    interconnects: string;
  }[];
  synqOutcome: string;
}

export interface CaseIntervention {
  id: string;
  clientArchetype: string;
  sector: string;
  timeline: string;
  before: {
    existingAssets: string;
    scale: string;
  };
  fragmentation: {
    breakagePoints: string[];
    inefficiencyDrag: string;
  };
  intervention: {
    architecture: string;
    engineeredLayers: string[];
  };
  synchronization: {
    howTouchpointsUnified: string;
    syncPipeline: string[];
  };
  outcome: {
    metric1: { label: string; value: string; shift: string };
    metric2: { label: string; value: string; shift: string };
    metric3: { label: string; value: string; shift: string };
    verifiedSummary: string;
  };
}

export interface ScorecardDimension {
  id: string;
  name: string;
  weight: number;
  benchmarkScore: number;
  definition: string;
  measurementCriteria: string[];
  fragmentedSignal: string;
  synchronizedSignal: string;
}

export interface FootprintScanInput {
  brandName: string;
  websiteUrl: string;
  industry: string;
  activeChannels: string[];
  managementModel: string;
}

export interface FootprintScanResult {
  present: {
    title: string;
    items: string[];
    healthScore: number;
  };
  fragmented: {
    title: string;
    items: { issue: string; frictionCost: string; severity: 'high' | 'medium' }[];
  };
  missing: {
    title: string;
    items: { node: string; reason: string; upside: string }[];
  };
  potential: {
    estimatedLift: string;
    syncMultiplier: string;
    keyRecommendation: string;
  };
}
