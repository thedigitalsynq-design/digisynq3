// DIGISYNQ — Problem Categories & Problem Engine Data
// These drive the interactive Problem Engine — the website's signature experience.

export interface ProblemSubQuestion {
  id: string;
  question: string;
  options: string[];
  type: 'single' | 'multi';
}

export interface ProblemCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  sub_questions: ProblemSubQuestion[];
  synq_paths: SynqPath[];
}

export interface SynqPath {
  label: string;
  description: string;
  steps: string[];
  relevant_capabilities: string[];
  cta: string;
}

export const PROBLEM_CATEGORIES: ProblemCategory[] = [
  {
    id: 'production',
    label: 'PRODUCTION',
    icon: '🎬',
    description: 'Coordinating a film or content project — crew, schedules, resources, workflows.',
    sub_questions: [
      {
        id: 'stage',
        question: 'Which stage are you in?',
        options: ['Development', 'Pre-production', 'Production', 'Post-production', 'Distribution'],
        type: 'single',
      },
      {
        id: 'scale',
        question: 'What is the project scale?',
        options: ['Feature film', 'Short film', 'Web series', 'Ad film', 'Digital content', 'Documentary'],
        type: 'single',
      },
      {
        id: 'gap',
        question: 'What is currently missing?',
        options: ['Crew & technicians', 'Equipment & facilities', 'Budget visibility', 'Marketing partners', 'Distribution access', 'Production coordination'],
        type: 'multi',
      },
    ],
    synq_paths: [
      {
        label: 'Production Coordination SYNQ',
        description: 'Map your project requirements, identify gaps, and connect with the right resources.',
        steps: ['MAP project scope', 'IDENTIFY resource gaps', 'CONNECT verified participants', 'COORDINATE execution', 'MEASURE outcomes'],
        relevant_capabilities: ['Production Coordination', 'Resource Mapping', 'Talent Matching'],
        cta: 'Start Production SYNQ',
      },
    ],
  },
  {
    id: 'people',
    label: 'PEOPLE',
    icon: '👤',
    description: 'Finding or being found — crew, technicians, specialists, collaborators.',
    sub_questions: [
      {
        id: 'direction',
        question: 'Are you looking for people, or looking to be found?',
        options: ['I need to find someone', 'I want to be discoverable', 'Both'],
        type: 'single',
      },
      {
        id: 'department',
        question: 'Which department or role?',
        options: ['Camera & Lighting', 'Sound', 'Art & Production Design', 'Editing & Post', 'VFX', 'Direction', 'Production Management', 'Other'],
        type: 'single',
      },
      {
        id: 'timeline',
        question: 'When do you need this?',
        options: ['Immediately', 'Within 2 weeks', 'Within a month', 'Planning ahead'],
        type: 'single',
      },
    ],
    synq_paths: [
      {
        label: 'Talent Connection SYNQ',
        description: 'Profile your need, discover the right people, and coordinate engagement.',
        steps: ['PROFILE requirement', 'DISCOVER candidates', 'ASSESS fit', 'CONNECT directly', 'COORDINATE engagement'],
        relevant_capabilities: ['Talent Matching', 'Skill Profiling', 'Opportunity Coordination'],
        cta: 'Start People SYNQ',
      },
    ],
  },
  {
    id: 'skills',
    label: 'SKILLS',
    icon: '🧠',
    description: 'Developing, finding, or cross-leveraging specific capabilities.',
    sub_questions: [
      {
        id: 'need_type',
        question: 'What kind of skills challenge do you have?',
        options: ['I need a specific skill on a project', 'I want to develop my own skills', 'I want to cross-skill into new areas', 'I need to assess a team\'s capabilities'],
        type: 'single',
      },
      {
        id: 'skill_domain',
        question: 'Which skill domain?',
        options: ['Technical filmmaking', 'Digital & social content', 'Marketing & PR', 'Post-production & VFX', 'Rights & distribution', 'Analytics & data', 'Emerging technology & AI'],
        type: 'single',
      },
    ],
    synq_paths: [
      {
        label: 'Skills Development SYNQ',
        description: 'Assess current skills, identify gaps, and build a development pathway.',
        steps: ['ASSESS current capability', 'IDENTIFY gaps', 'DESIGN development path', 'CONNECT to workshops & resources', 'APPLY & iterate'],
        relevant_capabilities: ['Skill Assessment', 'Workshops', 'Talent Development'],
        cta: 'Start Skills SYNQ',
      },
    ],
  },
  {
    id: 'marketing',
    label: 'MARKETING',
    icon: '📣',
    description: 'Connecting a project with audiences through marketing and media.',
    sub_questions: [
      {
        id: 'project_stage',
        question: 'Where is your marketing effort?',
        options: ['Planning a campaign', 'Already running — need support', 'Post-release — evaluating', 'Early stage — need strategy'],
        type: 'single',
      },
      {
        id: 'channel',
        question: 'Which channels are a priority?',
        options: ['Social media', 'Influencer & creator', 'Media & PR', 'Digital advertising', 'Content strategy', 'Community building'],
        type: 'multi',
      },
    ],
    synq_paths: [
      {
        label: 'Marketing Coordination SYNQ',
        description: 'Map your audience, find the right partners, and coordinate a connected promotional approach.',
        steps: ['MAP audience', 'IDENTIFY partners', 'COORDINATE channels', 'ACTIVATE campaign', 'MEASURE performance'],
        relevant_capabilities: ['Marketing Coordination', 'Media Partnership', 'Creator Matching', 'Analytics'],
        cta: 'Start Marketing SYNQ',
      },
    ],
  },
  {
    id: 'technology',
    label: 'TECHNOLOGY',
    icon: '⚙️',
    description: 'Finding, integrating, or leveraging technology for filmmaking.',
    sub_questions: [
      {
        id: 'tech_need',
        question: 'What is the technology challenge?',
        options: ['Finding the right tool or platform', 'Integrating existing technology', 'Evaluating AI for filmmaking', 'Post-production technology', 'Distribution technology'],
        type: 'single',
      },
    ],
    synq_paths: [
      {
        label: 'Technology SYNQ',
        description: 'Map your technology requirements and connect with the right partners.',
        steps: ['MAP need', 'EVALUATE options', 'CONNECT providers', 'PILOT integration', 'SCALE'],
        relevant_capabilities: ['Technology Matching', 'Pilot Coordination'],
        cta: 'Start Technology SYNQ',
      },
    ],
  },
  {
    id: 'content',
    label: 'CONTENT',
    icon: '🎞️',
    description: 'Creating, distributing, or monetizing content.',
    sub_questions: [
      {
        id: 'content_type',
        question: 'What type of content?',
        options: ['Feature film', 'Short film', 'Web series', 'Digital content', 'Branded content', 'Documentary'],
        type: 'single',
      },
      {
        id: 'content_challenge',
        question: 'What is the core challenge?',
        options: ['Creating the content', 'Distribution pathway', 'Audience connection', 'Monetization', 'Rights management', 'Marketing'],
        type: 'single',
      },
    ],
    synq_paths: [
      {
        label: 'Content SYNQ',
        description: 'Map your content needs from creation to audience.',
        steps: ['DEFINE content', 'MAP distribution options', 'CONNECT partners', 'REACH audience', 'MONETIZE'],
        relevant_capabilities: ['Content Strategy', 'Distribution Coordination', 'Rights Education'],
        cta: 'Start Content SYNQ',
      },
    ],
  },
  {
    id: 'rights',
    label: 'RIGHTS',
    icon: '🔐',
    description: 'Understanding, structuring, or monetizing content rights.',
    sub_questions: [
      {
        id: 'rights_area',
        question: 'Which rights area?',
        options: ['Cinema rights', 'Digital & OTT rights', 'Audio rights', 'Licensing', 'International distribution', 'Content reuse & repurposing'],
        type: 'single',
      },
    ],
    synq_paths: [
      {
        label: 'Rights Education SYNQ',
        description: 'Understand your rights landscape and connect with the right advisors.',
        steps: ['MAP rights structure', 'EDUCATE on options', 'CONNECT advisors', 'DEFINE strategy', 'EXECUTE with qualified legal support'],
        relevant_capabilities: ['Rights Education', 'Legal Referral', 'Monetization Planning'],
        cta: 'Start Rights SYNQ',
      },
    ],
  },
  {
    id: 'distribution',
    label: 'DISTRIBUTION',
    icon: '📡',
    description: 'Getting content to the right audiences and platforms.',
    sub_questions: [
      {
        id: 'dist_target',
        question: 'Where do you want to distribute?',
        options: ['Theatrical (Indian)', 'Theatrical (International)', 'OTT platforms', 'Digital / YouTube', 'Festival circuit', 'Broadcast / TV'],
        type: 'multi',
      },
    ],
    synq_paths: [
      {
        label: 'Distribution SYNQ',
        description: 'Map your distribution options and connect with the right partners.',
        steps: ['MAP content & audience', 'IDENTIFY distribution options', 'CONNECT partners', 'COORDINATE rollout', 'MEASURE reach'],
        relevant_capabilities: ['Distribution Coordination', 'Partner Matching', 'Rights Education'],
        cta: 'Start Distribution SYNQ',
      },
    ],
  },
  {
    id: 'budget',
    label: 'BUDGET',
    icon: '💰',
    description: 'Understanding, optimizing, or finding resources for a project budget.',
    sub_questions: [
      {
        id: 'budget_challenge',
        question: 'What is the budget challenge?',
        options: ['Need to reduce avoidable costs', 'Finding financing', 'Budget tracking & visibility', 'Revenue participation structures'],
        type: 'single',
      },
    ],
    synq_paths: [
      {
        label: 'Budget Coordination SYNQ',
        description: 'Map your budget structure and identify optimization and connection opportunities.',
        steps: ['MAP current budget', 'IDENTIFY gaps & leakage', 'EXPLORE options', 'CONNECT resources', 'MEASURE impact'],
        relevant_capabilities: ['Budget Mapping', 'Resource Optimization', 'Partnership Coordination'],
        cta: 'Start Budget SYNQ',
      },
    ],
  },
  {
    id: 'audience',
    label: 'AUDIENCE',
    icon: '👥',
    description: 'Understanding, reaching, and engaging the right audiences.',
    sub_questions: [
      {
        id: 'audience_goal',
        question: 'What is the audience goal?',
        options: ['Understanding who the audience is', 'Reaching a new audience', 'Building a loyal community', 'Converting attention to engagement'],
        type: 'single',
      },
    ],
    synq_paths: [
      {
        label: 'Audience SYNQ',
        description: 'Map your target audience and build the right connections.',
        steps: ['DEFINE audience', 'MAP channels', 'CONNECT creators & media', 'ENGAGE', 'MEASURE'],
        relevant_capabilities: ['Audience Analytics', 'Creator Matching', 'Media Coordination'],
        cta: 'Start Audience SYNQ',
      },
    ],
  },
  {
    id: 'monetization',
    label: 'MONETIZATION',
    icon: '📈',
    description: 'Identifying and creating revenue opportunities from content, rights, or audiences.',
    sub_questions: [
      {
        id: 'monetization_type',
        question: 'What type of monetization?',
        options: ['Box office performance', 'OTT / streaming revenue', 'Brand partnerships', 'Rights licensing', 'Creator revenue', 'Community monetization'],
        type: 'single',
      },
    ],
    synq_paths: [
      {
        label: 'Monetization SYNQ',
        description: 'Identify value opportunities and build pathways to revenue.',
        steps: ['MAP revenue opportunities', 'ASSESS rights & assets', 'CONNECT partners', 'STRUCTURE agreements', 'EXECUTE & MEASURE'],
        relevant_capabilities: ['Rights Education', 'Partnership Coordination', 'Revenue Planning'],
        cta: 'Start Monetization SYNQ',
      },
    ],
  },
  {
    id: 'media',
    label: 'MEDIA',
    icon: '📰',
    description: 'Connecting projects with media partners, press, and editorial.',
    sub_questions: [
      {
        id: 'media_goal',
        question: 'What is the media goal?',
        options: ['Getting press coverage', 'Building media partnerships', 'Content collaboration', 'PR strategy'],
        type: 'single',
      },
    ],
    synq_paths: [
      {
        label: 'Media SYNQ',
        description: 'Identify the right media connections for your project.',
        steps: ['MAP project & story', 'IDENTIFY media partners', 'COORDINATE access', 'COLLABORATE', 'MEASURE coverage'],
        relevant_capabilities: ['Media Coordination', 'PR Coordination', 'Partnership Matching'],
        cta: 'Start Media SYNQ',
      },
    ],
  },
  {
    id: 'other',
    label: 'OTHER',
    icon: '🔍',
    description: 'Something else — describe your challenge and we will map it.',
    sub_questions: [
      {
        id: 'describe',
        question: 'How would you describe the challenge?',
        options: ['I need to bring the right people together', 'I have resources that are not being used well', 'I have an opportunity with no clear path', 'Something is not working and I cannot identify why', 'Something else entirely'],
        type: 'single',
      },
    ],
    synq_paths: [
      {
        label: 'Open SYNQ',
        description: 'Describe your challenge and we will work to understand and map it.',
        steps: ['DESCRIBE the challenge', 'EXPLORE dependencies', 'MAP the system', 'IDENTIFY gaps', 'BUILD a SYNQ path together'],
        relevant_capabilities: ['Problem Mapping', 'Ecosystem Analysis', 'Coordination Design'],
        cta: 'Start a Conversation',
      },
    ],
  },
];
