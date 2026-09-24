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
    label: 'Production',
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
        steps: ['Map project scope', 'Identify resource gaps', 'Connect verified participants', 'Coordinate execution', 'Measure outcomes'],
        relevant_capabilities: ['Production Coordination', 'Resource Mapping', 'Talent Matching'],
        cta: 'Start production synq',
      },
    ],
  },
  {
    id: 'people',
    label: 'People',
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
        steps: ['Profile requirement', 'Discover candidates', 'Assess fit', 'Connect directly', 'Coordinate engagement'],
        relevant_capabilities: ['Talent Matching', 'Skill Profiling', 'Opportunity Coordination'],
        cta: 'Start people synq',
      },
    ],
  },
  {
    id: 'skills',
    label: 'Skills',
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
        steps: ['Assess current capability', 'Identify gaps', 'Design development path', 'Connect to workshops & resources', 'Apply & iterate'],
        relevant_capabilities: ['Skill Assessment', 'Workshops', 'Talent Development'],
        cta: 'Start skills synq',
      },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
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
        steps: ['Map audience', 'Identify partners', 'Coordinate channels', 'Activate campaign', 'Measure performance'],
        relevant_capabilities: ['Marketing Coordination', 'Media Partnership', 'Creator Matching', 'Analytics'],
        cta: 'Start marketing synq',
      },
    ],
  },
  {
    id: 'technology',
    label: 'Technology',
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
        steps: ['Map need', 'Evaluate options', 'Connect providers', 'Pilot integration', 'Scale'],
        relevant_capabilities: ['Technology Matching', 'Pilot Coordination'],
        cta: 'Start technology synq',
      },
    ],
  },
  {
    id: 'content',
    label: 'Content',
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
        steps: ['Define content', 'Map distribution options', 'Connect partners', 'Reach audience', 'Monetize'],
        relevant_capabilities: ['Content Strategy', 'Distribution Coordination', 'Rights Education'],
        cta: 'Start content synq',
      },
    ],
  },
  {
    id: 'rights',
    label: 'Rights',
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
        steps: ['Map rights structure', 'Educate on options', 'Connect advisors', 'Define strategy', 'Execute with qualified legal support'],
        relevant_capabilities: ['Rights Education', 'Legal Referral', 'Monetization Planning'],
        cta: 'Start rights synq',
      },
    ],
  },
  {
    id: 'distribution',
    label: 'Distribution',
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
        steps: ['Map content & audience', 'Identify distribution options', 'Connect partners', 'Coordinate rollout', 'Measure reach'],
        relevant_capabilities: ['Distribution Coordination', 'Partner Matching', 'Rights Education'],
        cta: 'Start distribution synq',
      },
    ],
  },
  {
    id: 'budget',
    label: 'Budget',
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
        steps: ['Map current budget', 'Identify gaps & leakage', 'Explore options', 'Connect resources', 'Measure impact'],
        relevant_capabilities: ['Budget Mapping', 'Resource Optimization', 'Partnership Coordination'],
        cta: 'Start budget synq',
      },
    ],
  },
  {
    id: 'audience',
    label: 'Audience',
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
        steps: ['Define audience', 'Map channels', 'Connect creators & media', 'Engage', 'Measure'],
        relevant_capabilities: ['Audience Analytics', 'Creator Matching', 'Media Coordination'],
        cta: 'Start audience synq',
      },
    ],
  },
  {
    id: 'monetization',
    label: 'Monetization',
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
        steps: ['Map revenue opportunities', 'Assess rights & assets', 'Connect partners', 'Structure agreements', 'Execute & measure'],
        relevant_capabilities: ['Rights Education', 'Partnership Coordination', 'Revenue Planning'],
        cta: 'Start monetization synq',
      },
    ],
  },
  {
    id: 'media',
    label: 'Media',
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
        steps: ['Map project & story', 'Identify media partners', 'Coordinate access', 'Collaborate', 'Measure coverage'],
        relevant_capabilities: ['Media Coordination', 'PR Coordination', 'Partnership Matching'],
        cta: 'Start media synq',
      },
    ],
  },
  {
    id: 'other',
    label: 'Other',
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
        steps: ['Describe the challenge', 'Explore dependencies', 'Map the system', 'Identify gaps', 'Build a synq path together'],
        relevant_capabilities: ['Problem Mapping', 'Ecosystem Analysis', 'Coordination Design'],
        cta: 'Start a conversation',
      },
    ],
  },
];
