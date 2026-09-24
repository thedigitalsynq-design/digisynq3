// DIGISYNQ — Operating Principles, Business Model, and Core Data

export const OPERATING_PRINCIPLES = [
  {
    id: 'synq-over-silos',
    label: 'Synchronization over silos',
    description: 'Fragmentation is the default state of the entertainment ecosystem. Connection is the work.',
  },
  {
    id: 'outcomes-over-activity',
    label: 'Outcomes over activity',
    description: 'Coordination that does not create value is noise. We measure results, not motion.',
  },
  {
    id: 'collaboration-over-ownership',
    label: 'Collaboration over ownership',
    description: 'The ecosystem is more valuable when it works together than when each participant guards their silo.',
  },
  {
    id: 'transparency-over-hype',
    label: 'Transparency over hype',
    description: 'We describe what we do, not what sounds impressive. Honesty builds the trust that makes coordination possible.',
  },
  {
    id: 'utilization-over-idle',
    label: 'Utilization over idle capacity',
    description: 'Resources that exist but are unused represent lost value for everyone. We help find and activate underutilized capacity.',
  },
  {
    id: 'data-over-assumption',
    label: 'Data over assumption',
    description: 'The entertainment industry runs on intuition and relationships. We supplement that with better information.',
  },
  {
    id: 'learning-over-static',
    label: 'Continuous learning over static skills',
    description: 'The industry is changing. People who develop across multiple skills will have more opportunity.',
  },
  {
    id: 'value-over-vanity',
    label: 'Value creation over vanity',
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
    name: 'Problem-solving engagements',
    description: 'Clients pay DIGISYNQ to solve defined coordination problems.',
    status: 'PLANNED',
    detail: 'Project-specific fees for identifying gaps, mapping resources, and coordinating the right participants around a defined problem.',
  },
  {
    id: 'project-coordination',
    name: 'Project coordination',
    description: 'Fees for coordinating selected resources around active projects.',
    status: 'PLANNED',
    detail: 'Compensation for the work of aligning multiple participants, managing coordination processes, and ensuring execution.',
  },
  {
    id: 'talent-resource-synq',
    name: 'Talent & resource synchronization',
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
    name: 'Marketing & media coordination',
    description: 'Project-specific commercial engagements for marketing and media.',
    status: 'PLANNED',
    detail: 'Coordination fees for connecting projects with the right marketing, media, and creator partners.',
  },
  {
    id: 'strategic-partnerships',
    name: 'Strategic partnerships',
    description: 'Commercial arrangements with ecosystem participants.',
    status: 'EXPERIMENTAL',
    detail: 'Longer-term commercial relationships with studios, production companies, agencies, and technology partners.',
  },
  {
    id: 'revenue-participation',
    name: 'Revenue participation',
    description: 'Where commercially appropriate and contractually defined.',
    status: 'EXPERIMENTAL',
    detail: 'In select cases where DIGISYNQ coordination contributes significantly to project outcomes, revenue participation may be structured.',
  },
  {
    id: 'future-platform',
    name: 'Future platform / technology',
    description: 'Potential future revenue from technology capabilities.',
    status: 'EXPERIMENTAL',
    detail: 'Long-term aspiration to build technology tools that support the coordination layer — not current revenue.',
  },
];

export const FILMMAKING_STAGES = [
  { id: 'idea', label: 'Idea', description: 'The starting point. A story, a concept, a vision.', icon: '💡' },
  { id: 'development', label: 'Development', description: 'Script, rights, financing, partnerships.', icon: '📝' },
  { id: 'pre-production', label: 'Pre-production', description: 'Crew, casting, locations, schedules.', icon: '📋' },
  { id: 'production', label: 'Production', description: 'Filming. The most resource-intensive phase.', icon: '🎬' },
  { id: 'post-production', label: 'Post-production', description: 'Editing, sound, VFX, color, delivery.', icon: '🎞️' },
  { id: 'marketing', label: 'Marketing', description: 'Building awareness and audience.', icon: '📣' },
  { id: 'distribution', label: 'Distribution', description: 'Getting to screens and platforms.', icon: '📡' },
  { id: 'audience', label: 'Audience', description: 'The people who experience the work.', icon: '👥' },
  { id: 'monetization', label: 'Monetization', description: 'Revenue from box office, rights, licensing.', icon: '📈' },
];

export const WORKSHOP_PROGRAMS = [
  {
    id: 'technical-filmmaking',
    category: 'Technical',
    title: 'Technical filmmaking fundamentals',
    description: 'Core skills across camera, lighting, sound, and production design.',
    outcome: 'Participants understand and can operate across key technical departments.',
    format: 'Intensive workshop',
    flow: ['Learn', 'Practice', 'Connect', 'Apply'],
  },
  {
    id: 'digital-content',
    category: 'Digital',
    title: 'Digital content creation',
    description: 'Creating effective content for social media, OTT, and digital platforms.',
    outcome: 'Participants can plan, produce, and distribute digital content effectively.',
    format: 'Workshop series',
    flow: ['Learn', 'Practice', 'Connect', 'Apply'],
  },
  {
    id: 'marketing-coordination',
    category: 'Marketing',
    title: 'Film marketing & campaign coordination',
    description: 'Planning and executing film marketing across traditional and digital channels.',
    outcome: 'Participants understand how to build and coordinate a film marketing campaign.',
    format: 'Workshop',
    flow: ['Learn', 'Practice', 'Connect', 'Apply'],
  },
  {
    id: 'rights-awareness',
    category: 'Rights',
    title: 'Rights awareness for filmmakers',
    description: 'Understanding content rights, licensing, and monetization structures in Indian cinema.',
    outcome: 'Participants understand the rights landscape and can make more informed decisions.',
    format: 'Workshop + referral to qualified legal professionals',
    flow: ['Learn', 'Understand', 'Connect', 'Apply'],
  },
  {
    id: 'ai-filmmaking',
    category: 'Technology',
    title: 'AI tools for filmmaking',
    description: 'Practical applications of AI in pre-production, production, and post-production.',
    outcome: 'Participants can evaluate and apply AI tools relevant to their work.',
    format: 'Workshop',
    flow: ['Learn', 'Experiment', 'Evaluate', 'Apply'],
  },
  {
    id: 'creator-economy',
    category: 'Creator',
    title: 'Creator economy for film professionals',
    description: 'How filmmakers and technicians can build sustainable careers in the creator economy.',
    outcome: 'Participants understand how to leverage digital platforms for career development.',
    format: 'Workshop',
    flow: ['Learn', 'Build', 'Connect', 'Monetize'],
  },
];

export const INSIGHTS_TOPICS = [
  { id: 'film-economics', title: 'How film economics work', category: 'Economics', reading_time: '8 min' },
  { id: 'asset-light', title: 'Why asset-light matters in entertainment', category: 'Business model', reading_time: '6 min' },
  { id: 'fragmentation', title: 'The fragmentation problem in Indian cinema', category: 'Industry', reading_time: '7 min' },
  { id: 'technician-economy', title: 'The technician economy: opportunity and gap', category: 'People', reading_time: '5 min' },
  { id: 'rights-basics', title: 'Film rights: a plain language guide', category: 'Rights', reading_time: '9 min' },
  { id: 'creator-monetization', title: 'How creators can monetize film connections', category: 'Creators', reading_time: '6 min' },
  { id: 'marketing-coordination', title: 'Why film marketing needs better coordination', category: 'Marketing', reading_time: '7 min' },
  { id: 'synq-methodology', title: 'The SYNQ methodology: problem-first thinking', category: 'Methodology', reading_time: '5 min' },
];
