// DIGISYNQ — Operating Principles, Business Model, and Core Data

export const OPERATING_PRINCIPLES = [
  {
    id: 'synq-over-silos',
    label: 'SYNCHRONIZATION OVER SILOS',
    description: 'Fragmentation is the default state of the entertainment ecosystem. Connection is the work.',
  },
  {
    id: 'outcomes-over-activity',
    label: 'OUTCOMES OVER ACTIVITY',
    description: 'Coordination that does not create value is noise. We measure results, not motion.',
  },
  {
    id: 'collaboration-over-ownership',
    label: 'COLLABORATION OVER OWNERSHIP',
    description: 'The ecosystem is more valuable when it works together than when each participant guards their silo.',
  },
  {
    id: 'transparency-over-hype',
    label: 'TRANSPARENCY OVER HYPE',
    description: 'We describe what we do, not what sounds impressive. Honesty builds the trust that makes coordination possible.',
  },
  {
    id: 'utilization-over-idle',
    label: 'UTILIZATION OVER IDLE CAPACITY',
    description: 'Resources that exist but are unused represent lost value for everyone. We help find and activate underutilized capacity.',
  },
  {
    id: 'data-over-assumption',
    label: 'DATA OVER ASSUMPTION',
    description: 'The entertainment industry runs on intuition and relationships. We supplement that with better information.',
  },
  {
    id: 'learning-over-static',
    label: 'CONTINUOUS LEARNING OVER STATIC SKILLS',
    description: 'The industry is changing. People who develop across multiple skills will have more opportunity.',
  },
  {
    id: 'value-over-vanity',
    label: 'VALUE CREATION OVER VANITY',
    description: 'We are not here to look large. We are here to solve specific problems and create measurable value.',
  },
];

export type RevenueStatus = 'LIVE' | 'PILOT' | 'PLANNED' | 'EXPERIMENTAL';

export interface RevenueStream {
  id: string;
  name: string;
  description: string;
  status: RevenueStatus;
  detail: string;
}

export const REVENUE_STREAMS: RevenueStream[] = [
  {
    id: 'problem-solving',
    name: 'Problem-Solving Engagements',
    description: 'Clients pay DIGISYNQ to solve defined coordination problems.',
    status: 'PLANNED',
    detail: 'Project-specific fees for identifying gaps, mapping resources, and coordinating the right participants around a defined problem.',
  },
  {
    id: 'project-coordination',
    name: 'Project Coordination',
    description: 'Fees for coordinating selected resources around active projects.',
    status: 'PLANNED',
    detail: 'Compensation for the work of aligning multiple participants, managing coordination processes, and ensuring execution.',
  },
  {
    id: 'talent-resource-synq',
    name: 'Talent & Resource Synchronization',
    description: 'Fees associated with connecting qualified resources to project requirements.',
    status: 'PILOT',
    detail: 'Commercial arrangements around talent discovery, matching, and deployment coordination.',
  },
  {
    id: 'workshops',
    name: 'Workshops',
    description: 'Paid learning and capability development.',
    status: 'PILOT',
    detail: 'Workshop programs designed to develop technical skills, cross-skills, and industry understanding.',
  },
  {
    id: 'marketing-coordination',
    name: 'Marketing & Media Coordination',
    description: 'Project-specific commercial engagements for marketing and media.',
    status: 'PLANNED',
    detail: 'Coordination fees for connecting projects with the right marketing, media, and creator partners.',
  },
  {
    id: 'strategic-partnerships',
    name: 'Strategic Partnerships',
    description: 'Commercial arrangements with ecosystem participants.',
    status: 'EXPERIMENTAL',
    detail: 'Longer-term commercial relationships with studios, production companies, agencies, and technology partners.',
  },
  {
    id: 'revenue-participation',
    name: 'Revenue Participation',
    description: 'Where commercially appropriate and contractually defined.',
    status: 'EXPERIMENTAL',
    detail: 'In select cases where DIGISYNQ coordination contributes significantly to project outcomes, revenue participation may be structured.',
  },
  {
    id: 'future-platform',
    name: 'Future Platform / Technology',
    description: 'Potential future revenue from technology capabilities.',
    status: 'EXPERIMENTAL',
    detail: 'Long-term aspiration to build technology tools that support the coordination layer — not current revenue.',
  },
];

export const FILMMAKING_STAGES = [
  { id: 'idea', label: 'IDEA', description: 'The starting point. A story, a concept, a vision.', icon: '💡' },
  { id: 'development', label: 'DEVELOPMENT', description: 'Script, rights, financing, partnerships.', icon: '📝' },
  { id: 'pre-production', label: 'PRE-PRODUCTION', description: 'Crew, casting, locations, schedules.', icon: '📋' },
  { id: 'production', label: 'PRODUCTION', description: 'Filming. The most resource-intensive phase.', icon: '🎬' },
  { id: 'post-production', label: 'POST-PRODUCTION', description: 'Editing, sound, VFX, color, delivery.', icon: '🎞️' },
  { id: 'marketing', label: 'MARKETING', description: 'Building awareness and audience.', icon: '📣' },
  { id: 'distribution', label: 'DISTRIBUTION', description: 'Getting to screens and platforms.', icon: '📡' },
  { id: 'audience', label: 'AUDIENCE', description: 'The people who experience the work.', icon: '👥' },
  { id: 'monetization', label: 'MONETIZATION', description: 'Revenue from box office, rights, licensing.', icon: '📈' },
];

export const WORKSHOP_PROGRAMS = [
  {
    id: 'technical-filmmaking',
    category: 'TECHNICAL',
    title: 'Technical Filmmaking Fundamentals',
    description: 'Core skills across camera, lighting, sound, and production design.',
    outcome: 'Participants understand and can operate across key technical departments.',
    format: 'Intensive workshop',
    flow: ['LEARN', 'PRACTICE', 'CONNECT', 'APPLY'],
  },
  {
    id: 'digital-content',
    category: 'DIGITAL',
    title: 'Digital Content Creation',
    description: 'Creating effective content for social media, OTT, and digital platforms.',
    outcome: 'Participants can plan, produce, and distribute digital content effectively.',
    format: 'Workshop series',
    flow: ['LEARN', 'PRACTICE', 'CONNECT', 'APPLY'],
  },
  {
    id: 'marketing-coordination',
    category: 'MARKETING',
    title: 'Film Marketing & Campaign Coordination',
    description: 'Planning and executing film marketing across traditional and digital channels.',
    outcome: 'Participants understand how to build and coordinate a film marketing campaign.',
    format: 'Workshop',
    flow: ['LEARN', 'PRACTICE', 'CONNECT', 'APPLY'],
  },
  {
    id: 'rights-awareness',
    category: 'RIGHTS',
    title: 'Rights Awareness for Filmmakers',
    description: 'Understanding content rights, licensing, and monetization structures in Indian cinema.',
    outcome: 'Participants understand the rights landscape and can make more informed decisions.',
    format: 'Workshop + referral to qualified legal professionals',
    flow: ['LEARN', 'UNDERSTAND', 'CONNECT', 'APPLY'],
  },
  {
    id: 'ai-filmmaking',
    category: 'TECHNOLOGY',
    title: 'AI Tools for Filmmaking',
    description: 'Practical applications of AI in pre-production, production, and post-production.',
    outcome: 'Participants can evaluate and apply AI tools relevant to their work.',
    format: 'Workshop',
    flow: ['LEARN', 'EXPERIMENT', 'EVALUATE', 'APPLY'],
  },
  {
    id: 'creator-economy',
    category: 'CREATOR',
    title: 'Creator Economy for Film Professionals',
    description: 'How filmmakers and technicians can build sustainable careers in the creator economy.',
    outcome: 'Participants understand how to leverage digital platforms for career development.',
    format: 'Workshop',
    flow: ['LEARN', 'BUILD', 'CONNECT', 'MONETIZE'],
  },
];

export const INSIGHTS_TOPICS = [
  { id: 'film-economics', title: 'How Film Economics Work', category: 'Economics', reading_time: '8 min' },
  { id: 'asset-light', title: 'Why Asset-Light Matters in Entertainment', category: 'Business Model', reading_time: '6 min' },
  { id: 'fragmentation', title: 'The Fragmentation Problem in Indian Cinema', category: 'Industry', reading_time: '7 min' },
  { id: 'technician-economy', title: 'The Technician Economy: Opportunity and Gap', category: 'People', reading_time: '5 min' },
  { id: 'rights-basics', title: 'Film Rights: A Plain Language Guide', category: 'Rights', reading_time: '9 min' },
  { id: 'creator-monetization', title: 'How Creators Can Monetize Film Connections', category: 'Creators', reading_time: '6 min' },
  { id: 'marketing-coordination', title: 'Why Film Marketing Needs Better Coordination', category: 'Marketing', reading_time: '7 min' },
  { id: 'synq-methodology', title: 'The SYNQ Methodology: Problem-First Thinking', category: 'Methodology', reading_time: '5 min' },
];
