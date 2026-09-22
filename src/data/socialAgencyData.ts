export interface SocialCampaign {
  id: string;
  title: string;
  client: string;
  category: 'Beauty & Wellness' | 'Beverage & Food' | 'Consumer Tech' | 'Fashion & Apparel' | 'FinTech & SaaS';
  tagline: string;
  platforms: ('TikTok' | 'Instagram' | 'YouTube Shorts' | 'TikTok Shop')[];
  coverGradient: string;
  thumbnailBadge: string;
  metrics: {
    views: string;
    engagement: string;
    roas: string;
    shares: string;
    followerGrowth: string;
  };
  creativeHook: string;
  videoStyle: string;
  soundTrack: string;
  soundTrendStatus: 'Trending #1' | 'Breakout Viral' | 'Original Brand Audio' | 'Verified Hit';
  strategyDetails: {
    challenge: string;
    creativeStrategy: string;
    hookFormula: string;
    creatorSeedingCount: number;
    paidAmplify: string;
  };
  sampleComments: {
    user: string;
    handle: string;
    comment: string;
    likes: string;
    verified?: boolean;
  }[];
  keyDeliverables: string[];
}

export interface AgencyService {
  id: string;
  title: string;
  badge: string;
  iconName: string;
  tagline: string;
  description: string;
  coreDeliverables: string[];
  playbookSteps: {
    phase: string;
    title: string;
    description: string;
  }[];
  metricHighlight: string;
  metricLabel: string;
}

export interface TrendingItem {
  id: string;
  type: 'sound' | 'hook_template' | 'visual_format' | 'meme_engine';
  name: string;
  platform: 'TikTok' | 'Instagram' | 'YouTube Shorts';
  velocity: 'EXPLOSIVE (+240%)' | 'RISING (+85%)' | 'PEAK VIRAL';
  volume: string;
  vibe: string;
  recommendedNiches: string[];
  viralHookExample: string;
  whyItWorks: string;
  audioDuration?: string;
}

export interface CreatorTalent {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  niche: 'Beauty & Skincare' | 'Streetwear & Style' | 'Gen Z Comedy' | 'Tech & Gadgets' | 'Fitness & Wellness' | 'Food & Flavor';
  primaryPlatform: 'TikTok' | 'Instagram' | 'YouTube';
  followers: string;
  avgViews: string;
  engagementRate: string;
  audienceSplit: string;
  signatureStyle: string;
  brandFits: string[];
}

export const AGENCY_STATS = [
  { label: 'Organic Video Views', value: '640M+', trend: '+42% this quarter', highlight: true },
  { label: 'Average Paid ROAS', value: '4.9x', trend: 'vs 2.1x industry avg', highlight: false },
  { label: 'Active Creator Network', value: '850+', trend: 'Pre-vetted & contractual', highlight: false },
  { label: 'Viral Trend Reaction Time', value: '<4 hrs', trend: 'From sound rise to live draft', highlight: true }
];

export const FEATURED_CAMPAIGNS: SocialCampaign[] = [
  {
    id: 'glow-rituals',
    title: 'The 3-Second Bare Face Reveal',
    client: 'Glow Rituals Skincare',
    category: 'Beauty & Wellness',
    tagline: 'Transforming clinical barrier repair into an unstoppable TikTok obsession.',
    platforms: ['TikTok', 'Instagram', 'TikTok Shop'],
    coverGradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    thumbnailBadge: '58.4M VIEWS',
    metrics: {
      views: '58.4M',
      engagement: '16.4%',
      roas: '5.2x',
      shares: '840K',
      followerGrowth: '+215K'
    },
    creativeHook: '“Stop wiping your skin barrier with harsh toners until you see this milk drip...”',
    videoStyle: 'Macro ASMR Texture Shots + Raw Front-Facing Camera Confessionals',
    soundTrack: 'Original Custom ASMR Milk Splash + Ambient Synth Pulse',
    soundTrendStatus: 'Trending #1',
    strategyDetails: {
      challenge: 'High competition in clean skincare with dull product shots and sterile medical claims.',
      creativeStrategy: 'Banned standard studio ads. Seeded 120 nano-creators with micro-magnified phone lenses showing immediate pore soothing in split screen.',
      hookFormula: 'Visual sensory shock in 0.8 seconds: milky droplet drop with tactile sound + contrarian statement.',
      creatorSeedingCount: 140,
      paidAmplify: 'Spark ads boosting top 5% organic creator posts directly into TikTok Shop flash bundle.'
    },
    sampleComments: [
      { user: 'Maya K.', handle: '@mayaskins', comment: 'I literally bought this mid-video I feel attacked 😭', likes: '18.4K', verified: true },
      { user: 'Dr. Ellie Dermatologist', handle: '@drellie_derm', comment: 'The ceramide-to-lipid ratio here is actually scientifically legit.', likes: '9.2K', verified: true },
      { user: 'chloe_vibe', handle: '@chloe.v', comment: 'Sold out at my local Sephora 3 hours after this posted wtffff', likes: '4.1K' }
    ],
    keyDeliverables: [
      '45 Custom Short-Form Videos',
      '140 Creator Seeding Kits with Custom Packaging',
      'TikTok Shop Live Launch Broadcast with 3 Creators',
      'White-Listed Spark Ad Optimization System'
    ]
  },
  {
    id: 'volt-energy',
    title: 'The Street Caffeine Challenge',
    client: 'Volt Clean Energy',
    category: 'Beverage & Food',
    tagline: 'Dethroning legacy energy drinks with high-energy NYC street trivia and micro-challenges.',
    platforms: ['TikTok', 'Instagram', 'YouTube Shorts'],
    coverGradient: 'from-emerald-500/20 via-lime-500/10 to-transparent',
    thumbnailBadge: '84.1M VIEWS',
    metrics: {
      views: '84.1M',
      engagement: '14.8%',
      roas: '4.6x',
      shares: '1.2M',
      followerGrowth: '+340K'
    },
    creativeHook: '“If you can name 3 ingredients in your current energy drink in 5 seconds I’ll give you $100...”',
    videoStyle: 'Fast-Cut High Energy Street Interviews with Pop-up Typography & Sound Effects',
    soundTrack: 'Hyper-Fast Breakbeat x Stomp Bass Trap Remix',
    soundTrendStatus: 'Breakout Viral',
    strategyDetails: {
      challenge: 'Legacy brands had 10x the TV and billboard budget; Volt needed instant cultural street cred.',
      creativeStrategy: 'Turned the product into the ultimate reward in spontaneous street trivia that felt 100% unstaged and genuinely hilarious.',
      hookFormula: 'Immediate dollar bill waving in front of the lens + countdown timer ticking.',
      creatorSeedingCount: 85,
      paidAmplify: 'Hook-rate testing across 60 variants; top 3 hook winners scaled with $120k paid social blitz.'
    },
    sampleComments: [
      { user: 'Leo Martinez', handle: '@leomtz', comment: 'The guy who drank the whole can while running caught me off guard 💀', likes: '31.2K' },
      { user: 'gym_sam', handle: '@samuel.lifts', comment: 'Zero sugar and no crash is an actual lifesaver during finals.', likes: '12.8K' },
      { user: 'Brand Social Admin', handle: '@voltsocial', comment: 'We literally went through 50 cans in Soho in 30 minutes lol', likes: '7.9K', verified: true }
    ],
    keyDeliverables: [
      '60 High-Energy Street Interview Episodes',
      'Dynamic CapCut Sound Design & Subtitle Packages',
      'YouTube Shorts 30-Day Omnipresence Cadence',
      'Influencer Gym Bag Seeding Box'
    ]
  },
  {
    id: 'drift-audio',
    title: 'Spatial Audio for Sleep Paralysis & Study',
    client: 'Drift Hi-Fi Earbuds',
    category: 'Consumer Tech',
    tagline: 'Making audiophile headphones go viral through binaural ASMR & late-night Tokyo walks.',
    platforms: ['TikTok', 'Instagram', 'YouTube Shorts'],
    coverGradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    thumbnailBadge: '41.2M VIEWS',
    metrics: {
      views: '41.2M',
      engagement: '18.1%',
      roas: '6.4x',
      shares: '690K',
      followerGrowth: '+180K'
    },
    creativeHook: '“Put your headphones in right now. Close your eyes. Tell me which side this car passes you on...”',
    videoStyle: 'Cinematic 4K Low-Light Tokyo POV with 3D Spatial Audio Simulations',
    soundTrack: 'Binaural 8D Spatial Rain & Neon Cyberpunk Ambience',
    soundTrendStatus: 'Original Brand Audio',
    strategyDetails: {
      challenge: 'Consumers couldn’t hear the audio quality through a silent Instagram or TikTok feed.',
      creativeStrategy: 'Created interactive "Earphone Tests" that forced users to put on headphones and tap replay 3-4 times to locate the sound.',
      hookFormula: 'Direct interactive challenge: "Put your left earbud in and turn to 50% volume".',
      creatorSeedingCount: 65,
      paidAmplify: 'Targeted tech lovers, gamers, and study students with ultra-high retention 8D audio ads.'
    },
    sampleComments: [
      { user: 'Kai Chen', handle: '@kaichen.mp3', comment: 'Bro I actually ducked my head I thought it was real behind me 😳', likes: '45.1K' },
      { user: 'Aura Studio', handle: '@aurasounds', comment: 'The mix engineering on this short is better than most Spotify releases.', likes: '15.4K', verified: true },
      { user: 'sarah_reads', handle: '@books_sarah', comment: 'My study session staple now. Ordered the midnight black pair!', likes: '8.3K' }
    ],
    keyDeliverables: [
      '30 Binaural Spatial Audio Shorts',
      '3D CGI Exploded Product Earbud Visualizer',
      'Dark-Mode Instagram Carousel Aesthetics',
      'Affiliate Creator Retargeting Suite'
    ]
  },
  {
    id: 'neo-streetwear',
    title: 'The 10-Minute Heavyweight Hoodie Drop',
    client: 'NEO Division Apparel',
    category: 'Fashion & Apparel',
    tagline: 'Building supreme-level scarcity through cryptic teasers and TikTok Shop countdowns.',
    platforms: ['TikTok', 'Instagram', 'TikTok Shop'],
    coverGradient: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
    thumbnailBadge: '$1.8M GMV',
    metrics: {
      views: '36.8M',
      engagement: '15.9%',
      roas: '7.1x',
      shares: '520K',
      followerGrowth: '+165K'
    },
    creativeHook: '“We cut up 40 vintage Carhartt jackets to make 100 hoodies. Here is why we’ll never make them again...”',
    videoStyle: 'Gritty Industrial Workshop B-Roll, Raw Scissors Cutting, Sewing Machine Beats',
    soundTrack: 'Distorted 90s Hip-Hop Instrumental with Heavy Kick Drum',
    soundTrendStatus: 'Verified Hit',
    strategyDetails: {
      challenge: 'Apparel market saturated with identical print-on-demand drop-shipped streetwear.',
      creativeStrategy: 'Show the visceral physical labor: 600GSM organic cotton, double-needle stitch torture tests, and strict numbered inventory cards.',
      hookFormula: 'Extreme scarcity + tactile destruction test in first 2 seconds.',
      creatorSeedingCount: 40,
      paidAmplify: 'Zero discounts. Whitelisted creator unboxing clips amplified 2 hours before the digital vault opened.'
    },
    sampleComments: [
      { user: 'Zack R.', handle: '@zackstreet', comment: 'Was in the checkout at 6:00:02 and still took an L. Restock pleaseeee', likes: '19.8K' },
      { user: 'Marcus Thorne', handle: '@mthorneofficial', comment: 'Quality is heavy as hell. Best fit in my wardrobe right now.', likes: '6.5K', verified: true },
      { user: 'hannah_fits', handle: '@fitcheck_hannah', comment: 'The wash tag having the unique edition number is so tough.', likes: '3.9K' }
    ],
    keyDeliverables: [
      'Drop Vault Cryptic Countdown Campaign',
      '40 VIP Streetwear Stylist Seed Packages',
      'TikTok Shop Live Inventory Depletion Event',
      'Lookbook Styling Carousel Grid System'
    ]
  }
];

export const AGENCY_SERVICES: AgencyService[] = [
  {
    id: 'short-form-studio',
    title: 'Viral Short-Form Content Studio',
    badge: 'FLAGSHIP ENGINE',
    iconName: 'Video',
    tagline: 'We script, shoot, edit, and sound-design 30-60 viral videos every month.',
    description: 'Stop posting boring corporate videos that get 200 views. We engineer high-retention TikToks, Reels, and YouTube Shorts with proven psychological hooks, dynamic soundscapes, and native pacing designed to dominate the algorithm.',
    coreDeliverables: [
      'Full monthly content calendar (20-60 videos)',
      'Hook scripting using our 12 proprietary retention models',
      'In-house studio filming or remote director kits',
      'Dynamic typography, sound effects, and color grading',
      'Platform-native thumbnail design and SEO metadata'
    ],
    playbookSteps: [
      { phase: 'Phase 01', title: 'Viral Hook Matrix', description: 'We test 15 unique opening hooks against your target customer avatar to find the lowest-resistance scroll-stopper.' },
      { phase: 'Phase 02', title: 'Rapid Production Sprint', description: 'Batch filming 15-30 videos in our high-production studio with multi-angle lighting and directional mics.' },
      { phase: 'Phase 03', title: 'Algorithm Sound & Edit', description: 'Editing with 1.8-second scene pacing, trending audio integration, and kinetic subtitle typography.' },
      { phase: 'Phase 04', title: 'Post & Real-Time Engagement', description: 'Timed publishing with active community response in the critical first 60 minutes of algorithmic momentum.' }
    ],
    metricHighlight: '8.4x',
    metricLabel: 'Average Watch-Time vs Industry Standard'
  },
  {
    id: 'creator-seeding',
    title: 'Creator Co-Ops & Influencer Seeding',
    badge: '500+ VETTED TALENT',
    iconName: 'Users',
    tagline: 'Authentic creator fleets that don’t look like cringey paid sponsorships.',
    description: 'Consumers have banner blindness for conventional ads. We build relationships with high-engagement micro and macro creators who genuinely fall in love with your brand, generating an endless stream of organic UGC and cultural endorsement.',
    coreDeliverables: [
      'Creator discovery and bespoke matchmaking',
      'Custom seeding boxes designed for unboxing virality',
      'Usage rights negotiation for paid ad whitelisting',
      'Performance tracking & affiliate attribution dashboard',
      'Spark Ads / Paid Partnership code deployment'
    ],
    playbookSteps: [
      { phase: 'Phase 01', title: 'Niche Community Mapping', description: 'Identifying creators with >8% engagement rates and hyper-loyal comment sections in your specific category.' },
      { phase: 'Phase 02', title: 'Sensory Seeding Unboxing', description: 'Sending custom sensory PR boxes with handwritten notes that creators genuinely want to film organically.' },
      { phase: 'Phase 03', title: 'Rights & Whitelisting Acquisition', description: 'Securing 90-365 day digital advertising rights to turn top organic posts into high-converting paid ads.' },
      { phase: 'Phase 04', title: 'Creator Affiliate Machine', description: 'Turning top performers into dedicated brand ambassadors with long-term rev-share agreements.' }
    ],
    metricHighlight: '76%',
    metricLabel: 'Organic Seeding Post-Rate (Unpaid)'
  },
  {
    id: 'trend-radar',
    title: '24/7 Trend Lab & Culture Jacking',
    badge: 'SUB-4 HR SPEED',
    iconName: 'Flame',
    tagline: 'Jumping on trending sounds, memes, and cultural moments before they peak.',
    description: 'In social media, being 48 hours late is worse than not posting at all. Our 24/7 trend lab monitors rising audio, meme templates, and cultural debates, enabling your brand to jump in with effortless wit and relevance.',
    coreDeliverables: [
      'Daily morning Trend Pulse briefing',
      'Rapid turnaround creative drafts (<4 hours)',
      'Meme translation into your specific brand voice',
      'Proactive comment section banter on competitor channels',
      'Crisis prevention and brand safety guardrails'
    ],
    playbookSteps: [
      { phase: 'Phase 01', title: 'Algorithmic Ear to the Ground', description: 'Proprietary scraping of velocity spikes in audio tracks under 5,000 uses before they hit the For You Page.' },
      { phase: 'Phase 02', title: 'Brand Tone Translation', description: 'Adapting the meme so it strengthens your product proposition rather than looking like an out-of-touch corporate dad.' },
      { phase: 'Phase 03', title: 'Greenlight & Deploy', description: 'Fast-track internal approval channel with a 60-minute window from draft to live publish.' },
      { phase: 'Phase 04', title: 'Top-Comment Domination', description: 'Seeding high-upvote witty comments across viral cultural videos to pull traffic back to your brand.' }
    ],
    metricHighlight: '<4 hrs',
    metricLabel: 'Trend Detection to Production Turnaround'
  },
  {
    id: 'paid-performance',
    title: 'Paid Social Performance & Spark Ads',
    badge: 'PROFIT ENGINE',
    iconName: 'TrendingUp',
    tagline: 'Scaling winning organic creative into predictable multi-million dollar revenue.',
    description: 'We eliminate the disconnect between the creative team and the media buyers. When an organic TikTok or Reel strikes gold, our performance team immediately amplifies it with whitelisted Spark Ads and Meta Advantage+ campaigns.',
    coreDeliverables: [
      'Creative testing matrix with 20+ hook iterations weekly',
      'TikTok Spark Ads and Meta Advantage+ campaign management',
      'Full-funnel attribution and ROAS tracking',
      'Landing page & conversion rate optimization (CRO)',
      'Custom post-click instant experience storefronts'
    ],
    playbookSteps: [
      { phase: 'Phase 01', title: 'Organic Incubation', description: 'Testing hooks organically on brand and creator handles to validate authentic retention without spending ad dollars.' },
      { phase: 'Phase 02', title: 'Scale The Outliers', description: 'Funneling budget exclusively into the top 3% of videos that achieved >12% engagement and >45% 3-sec hook rate.' },
      { phase: 'Phase 03', title: 'Creative Refresh Sprints', description: 'Swapping hooks and opening text overlays every 10 days to prevent ad fatigue and keep CAC low.' },
      { phase: 'Phase 04', title: 'Blended ROAS Optimization', description: 'Balancing direct acquisition ads with top-of-funnel cultural fame for sustained LTV growth.' }
    ],
    metricHighlight: '4.9x',
    metricLabel: 'Average Blended ROAS Across Active Clients'
  },
  {
    id: 'tiktok-shop',
    title: 'Social Commerce & TikTok Shop GMV Engine',
    badge: 'HIGH CONVERSION',
    iconName: 'ShoppingBag',
    tagline: 'Turning social attention directly into instant digital checkout and live shopping frenzy.',
    description: 'Social is no longer just brand awareness; it is the modern shopping mall. We build complete TikTok Shop infrastructures, train affiliate creator armies, and host live shopping marathons that generate six-figure drops.',
    coreDeliverables: [
      'TikTok Shop catalog setup, logistics & compliance',
      'Affiliate creator outreach & automated sample fulfillment',
      'Live shopping studio production and on-screen talent',
      'Exclusive product bundle engineering for impulse buying',
      'Shop SEO and product card optimization'
    ],
    playbookSteps: [
      { phase: 'Phase 01', title: 'Storefront Optimization', description: 'Configuring high-converting product detail pages, instant flash coupons, and bundle tiers.' },
      { phase: 'Phase 02', title: 'Affiliate Fleet Activation', description: 'Distributing samples to 200+ active TikTok Shop affiliates earning commission on every sale.' },
      { phase: 'Phase 03', title: 'Live Shopping Stream', description: 'Hosting high-energy 2 to 4 hour live selling broadcasts with countdown timers and live flash drops.' },
      { phase: 'Phase 04', title: 'Post-Purchase Loops', description: 'Automating review collection and unboxing incentives to compound organic social proof.' }
    ],
    metricHighlight: '$1.4M+',
    metricLabel: 'Monthly TikTok Shop GMV Generated'
  },
  {
    id: 'brand-persona',
    title: 'Brand Persona & Community Cult Building',
    badge: 'RETENTION CULT',
    iconName: 'Sparkles',
    tagline: 'Giving your brand an iconic voice that customers defend in the comments section.',
    description: 'Boring brands talk about features; iconic brands build a distinct online persona. We define your tone of voice, inside jokes, reply etiquette, and visual language so your audience feels part of an exclusive club.',
    coreDeliverables: [
      'Comprehensive Brand Voice & Persona Bible',
      'Reply guidelines for community banter & controversy handling',
      'Custom AR face filters and Instagram Story sticker packs',
      'Private Discord / VIP broadcast channel strategy',
      'Co-branded meme templates and custom sound stems'
    ],
    playbookSteps: [
      { phase: 'Phase 01', title: 'Archetype Definition', description: 'Is your brand the Chaotic Gen Z Intern, The Unhinged Expert, or The Sophisticated Minimalist?' },
      { phase: 'Phase 02', title: 'Inside Joke Lore Building', description: 'Developing recurring characters, mascots, and community phrases that your followers repeat in the comments.' },
      { phase: 'Phase 03', title: 'Comment Section Warfare', description: 'Out-witting other brands and leaving memorable top replies on cultural viral videos.' },
      { phase: 'Phase 04', title: 'Superfan Rituals', description: 'Rewarding top commenters with surprise gift packages, creator access, and secret drop links.' }
    ],
    metricHighlight: '92%',
    metricLabel: 'Positive Sentiment Across Brand Touchpoints'
  }
];

export const LIVE_TREND_RADAR: TrendingItem[] = [
  {
    id: 'trend-01',
    type: 'sound',
    name: 'Midnight Funk Bass Drop (Sped Up)',
    platform: 'TikTok',
    velocity: 'EXPLOSIVE (+240%)',
    volume: '542K Videos',
    vibe: 'High-energy transformation, glow-up, sudden reveal',
    recommendedNiches: ['Fashion', 'Beauty', 'Fitness', 'Before & After'],
    viralHookExample: '“Show the camera your room right now, then cut on the bass drop to where you actually are...”',
    whyItWorks: 'The anticipation curve holds attention for 4.2 seconds before the beat drop, guaranteeing 100% completion rate for algorithmic distribution.',
    audioDuration: '0:14'
  },
  {
    id: 'trend-02',
    type: 'hook_template',
    name: 'The “Stop Buying This If...” Gatekeeper Hook',
    platform: 'TikTok',
    velocity: 'RISING (+85%)',
    volume: '280K Videos',
    vibe: 'Contrarian advice, reverse psychology, urgency',
    recommendedNiches: ['Tech Gadgets', 'Skincare', 'Personal Finance', 'Supplements'],
    viralHookExample: '“Stop buying expensive noise-cancelling headphones unless you actually do this one setting in your phone...”',
    whyItWorks: 'Taps into FOMO and loss aversion. The viewer feels they are wasting money if they swipe away before the tip.',
  },
  {
    id: 'trend-03',
    type: 'visual_format',
    name: 'Macro Lens ASMR Texture Cuts',
    platform: 'Instagram',
    velocity: 'PEAK VIRAL',
    volume: '890K Reels',
    vibe: 'Sensory satisfaction, hyper-crisp, tactile',
    recommendedNiches: ['Food & Beverage', 'Cosmetics', 'Mechanical Goods', 'Apparel'],
    viralHookExample: 'Extreme close up of cream oozing or fabric stretching under tension with zero background music, pure sound.',
    whyItWorks: 'Triggers visual ASMR. Rewatch rate is extraordinarily high because human eyes are captivated by microscopic textures.'
  },
  {
    id: 'trend-04',
    type: 'meme_engine',
    name: '“The Group Chat Said No, But...”',
    platform: 'TikTok',
    velocity: 'RISING (+85%)',
    volume: '165K Videos',
    vibe: 'Impulsive buying, rebellious indulgence, relatable humor',
    recommendedNiches: ['E-Commerce', 'Streetwear', 'Travel', 'Restaurants'],
    viralHookExample: '“My group chat told me not to buy a 600GSM heavyweight hoodie in July... they were wrong.”',
    whyItWorks: 'Instantly puts the viewer into an intimate, relatable mindset. Comments inevitably debate whether the group chat was right.'
  },
  {
    id: 'trend-05',
    type: 'sound',
    name: 'Vintage French Cinema Accordion Lo-Fi',
    platform: 'Instagram',
    velocity: 'RISING (+85%)',
    volume: '210K Reels',
    vibe: 'Aesthetic café life, slow living, quiet luxury, curated taste',
    recommendedNiches: ['Lifestyle', 'Coffee & Bakeries', 'Home Decor', 'Minimalist Jewelry'],
    viralHookExample: 'Slow-panning warm sunlight across espresso crema with subtle cursive text: “Sundays that felt like cinema.”',
    whyItWorks: 'Elevates mundane daily routines into a romanticized European aesthetic that viewers save to mood boards.',
    audioDuration: '0:22'
  }
];

export const VETTED_CREATORS: CreatorTalent[] = [
  {
    id: 'cr-01',
    name: 'Kira Vance',
    handle: '@kiravance.skin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    niche: 'Beauty & Skincare',
    primaryPlatform: 'TikTok',
    followers: '480K',
    avgViews: '125K',
    engagementRate: '12.4%',
    audienceSplit: '82% Female (18-34)',
    signatureStyle: 'Scientific ingredient breakdowns with brutal honesty and microscope skin-cam tests.',
    brandFits: ['Clean Skincare', 'Dermatology Brands', 'Hair Health', 'Wellness Tonics']
  },
  {
    id: 'cr-02',
    name: 'Devon Wells',
    handle: '@devon_street',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    niche: 'Streetwear & Style',
    primaryPlatform: 'Instagram',
    followers: '620K',
    avgViews: '210K',
    engagementRate: '9.8%',
    audienceSplit: '68% Male (18-28)',
    signatureStyle: 'High-contrast 90s camcorder fit-checks, thrift-flipping, and sneaker silhouette reviews.',
    brandFits: ['Footwear', 'Heavyweight Hoodies', 'Accessories', 'Vintage Watch Brands']
  },
  {
    id: 'cr-03',
    name: 'Sora Tanaka',
    handle: '@soradesign.lab',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    niche: 'Tech & Gadgets',
    primaryPlatform: 'YouTube',
    followers: '890K',
    avgViews: '340K',
    engagementRate: '14.2%',
    audienceSplit: '74% Male / 26% Female (20-38)',
    signatureStyle: 'Cyberpunk desk setups, tactile mechanical keyboard typing, and EDC gear minimalism.',
    brandFits: ['Audio Hardware', 'Ergonomic Workstations', 'Smart Home', 'SaaS Tools']
  },
  {
    id: 'cr-04',
    name: 'Liam & Jax',
    handle: '@roommates_comedy',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    niche: 'Gen Z Comedy',
    primaryPlatform: 'TikTok',
    followers: '1.4M',
    avgViews: '680K',
    engagementRate: '18.1%',
    audienceSplit: '54% Female / 46% Male (16-30)',
    signatureStyle: 'Chaotic sketch comedy placing everyday brand products in absurd roommate arguments.',
    brandFits: ['Snacks & Beverages', 'Gaming Apps', 'Fast Fashion', 'Consumer Electronics']
  },
  {
    id: 'cr-05',
    name: 'Elena Rostova',
    handle: '@elena_movement',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
    niche: 'Fitness & Wellness',
    primaryPlatform: 'Instagram',
    followers: '510K',
    avgViews: '180K',
    engagementRate: '11.5%',
    audienceSplit: '79% Female (22-40)',
    signatureStyle: 'Mobility routines, Pilates aesthetic vlogs, cold plunge rituals, and clean eating bowls.',
    brandFits: ['Athleisure', 'Electrolytes', 'Supplements', 'Recovery Tech']
  },
  {
    id: 'cr-06',
    name: 'Marco Rossi',
    handle: '@marcocooks',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
    niche: 'Food & Flavor',
    primaryPlatform: 'TikTok',
    followers: '920K',
    avgViews: '420K',
    engagementRate: '15.7%',
    audienceSplit: '58% Female / 42% Male (20-45)',
    signatureStyle: 'High-speed sizzling pans, ASMR cutting boards, and unapologetic 15-minute pasta dishes.',
    brandFits: ['Cookware', 'Specialty Ingredients', 'Sauces & Spices', 'Beverages']
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: 'SYNQ took us from 2,000 views on Reels to 40 million views on TikTok in 90 days. Our direct e-commerce sales literally quadrupled.',
    author: 'Seraphina Vance',
    role: 'Founder & CEO',
    company: 'Glow Rituals Skincare',
    metric: '4.2x Revenue Surge'
  },
  {
    quote: 'Most agencies send you a 40-page deck and zero videos. SYNQ had our first 15 viral scripts written and shot in week one. The energy is unmatched.',
    author: 'Marcus Brody',
    role: 'VP of Marketing',
    company: 'Volt Energy Beverages',
    metric: '84M Organic Views'
  },
  {
    quote: 'Their ability to turn a technical consumer audio product into a hypnotic ASMR viral sensation blew our board away. 6.4x blended ROAS.',
    author: 'David Lindqvist',
    role: 'Chief Brand Officer',
    company: 'Drift Audio Tech',
    metric: '6.4x Blended ROAS'
  }
];
