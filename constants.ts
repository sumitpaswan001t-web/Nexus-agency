import { Project, Service, Article, TeamMember, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'DIGITAL ARCHITECTURE',
    shortDescription: 'Scalable systems for enterprise-grade applications.',
    fullDescription: 'We do not build websites; we engineer digital ecosystems. Our approach to digital architecture roots itself in modularity, scalability, and absolute performance. We deconstruct complex business requirements into atomic units of logic, rebuilding them into resilient platforms capable of handling high-volume transactions and data throughput.',
    deliverables: ['System Design', 'Cloud Infrastructure', 'API Development', 'Microservices Strategy'],
    methodology: 'Our methodology follows a strict rigorous audit, followed by a component-based architectural plan that prioritizes uptime and developer experience.'
  },
  {
    id: 's2',
    title: 'INTERFACE ENGINEERING',
    shortDescription: 'Precision UI/UX for complex workflows.',
    fullDescription: 'Aesthetics without function is waste. We design interfaces that accelerate user decision-making. By stripping away decorative noise, we focus on information density, hierarchy, and interaction mechanics. This results in tools that professionals actually enjoy using, increasing operational efficiency and reducing error rates.',
    deliverables: ['UX Research', 'UI Design Systems', 'Prototyping', 'Frontend Development'],
    methodology: 'We employ a user-centric, data-driven design process. Every pixel must earn its place on the screen through functional necessity.'
  },
  {
    id: 's3',
    title: 'BRAND POSITIONING',
    shortDescription: 'Authority-driven identity for market leaders.',
    fullDescription: 'Your brand is not your logo; it is your reputation. We craft visual identities that command respect. We reject trends in favor of timeless, structural design systems that communicate stability, innovation, and competence. We position our clients not just as participants in their market, but as the standard-bearers.',
    deliverables: ['Visual Identity', 'Brand Guidelines', 'Tone of Voice', 'Marketing Collateral'],
    methodology: 'Strategic subtraction. We remove the superfluous to reveal the core truth of the organization.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'APEX TERMINAL',
    client: 'Apex Financial',
    industry: 'FinTech',
    services: ['Interface Engineering', 'Digital Architecture'],
    year: 2024,
    thumbnailImage: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
    challenge: 'Apex needed to consolidate five disparate trading tools into a single, unified dashboard without sacrificing the speed required for high-frequency trading.',
    solution: 'We engineered a React-based micro-frontend architecture, allowing independent teams to deploy updates to specific modules without risking overall system stability.',
    outcomes: ['30% reduction in trade execution time', 'Unified auth system', 'Zero downtime deployment'],
    gallery: [
      'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&w=800&q=80', 
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p2',
    title: 'LOGIC STREAM',
    client: 'Global Logistics Corp',
    industry: 'Logistics',
    services: ['Digital Architecture'],
    year: 2023,
    thumbnailImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    challenge: 'Legacy infrastructure was unable to handle real-time tracking for a fleet of 50,000 vehicles, leading to data latency and operational blind spots.',
    solution: 'Migrated the entire backend to an event-driven architecture using Kafka and Node.js, enabling sub-second data propagation across the global network.',
    outcomes: ['Real-time visibility achieved', '40% reduction in server costs', 'API response time < 50ms'],
    gallery: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', 
      'https://images.unsplash.com/photo-1565514020176-db79237b7546?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p3',
    title: 'VANTAGE POINT',
    client: 'Vantage Reality',
    industry: 'Real Estate',
    services: ['Brand Positioning', 'Interface Engineering'],
    year: 2024,
    thumbnailImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    challenge: 'A luxury real estate firm was struggling to differentiate itself in a saturated market of generic "premium" aesthetics.',
    solution: 'Developed a brutalist, high-contrast visual identity and a WebGL-powered property viewer that emphasizes architectural structure over lifestyle photography.',
    outcomes: ['200% increase in lead quality', 'Award-winning digital experience', 'Brand recognition in key markets'],
    gallery: [
      'https://images.unsplash.com/photo-1470075801209-17f9ec0cade6?auto=format&fit=crop&w=800&q=80', 
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p4',
    title: 'QUANTUM HEALTH',
    client: 'Q-Health Systems',
    industry: 'Healthcare',
    services: ['Interface Engineering'],
    year: 2023,
    thumbnailImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    challenge: 'Doctors were burning out due to confusing EHR interfaces that required too many clicks to perform simple tasks.',
    solution: 'Radically simplified the physician dashboard, surfacing critical patient data immediately and using keyboard shortcuts for rapid data entry.',
    outcomes: ['15 minutes saved per patient visit', 'Doctor satisfaction score up 40%', 'Reduced data entry errors'],
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-2187580023f7?auto=format&fit=crop&w=800&q=80', 
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'ELENA KORVES',
    role: 'PRINCIPAL ARCHITECT',
    bio: 'Former systems engineer at massive scale. Elena believes code is infrastructure, not poetry. She demands rigour in every pull request.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    expertise: ['System Design', 'Cloud Native', 'Security'],
    isLeadership: true
  },
  {
    id: 't2',
    name: 'MARCUS VANE',
    role: 'DESIGN DIRECTOR',
    bio: 'A minimalist purist who believes the best interface is no interface. Marcus enforces the grid with authoritarian precision.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    expertise: ['UI Systems', 'Typography', 'Interaction'],
    isLeadership: true
  },
  {
    id: 't3',
    name: 'SARAH JENKINS',
    role: 'SENIOR DEVELOPER',
    bio: 'Full-stack specialist with a focus on performance optimization and accessibility.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    expertise: ['React', 'Node.js', 'a11y'],
    isLeadership: false
  },
  {
    id: 't4',
    name: 'DAVID CHEN',
    role: 'STRATEGIST',
    bio: 'Translates business goals into technical requirements. The bridge between the boardroom and the terminal.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    expertise: ['Product Strategy', 'Analytics', 'Growth'],
    isLeadership: false
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    slug: 'death-of-decoration',
    title: 'THE DEATH OF DECORATION',
    excerpt: 'Why modern digital products are rejecting skeuomorphism and flat design in favor of raw structuralism.',
    category: 'Design',
    publishDate: 'OCT 12, 2024',
    readTime: 5,
    author: { name: 'Marcus Vane', role: 'Design Director' },
    body: `
      <h2>Function Over Form</h2>
      <p>The era of cute illustrations and friendly rounded corners is ending. Users are fatigued by infantilizing interfaces that treat them like children. They crave tools that respect their intelligence and their time.</p>
      <p>Structuralism in digital design is not about making things ugly; it is about honesty. It exposes the grid, the data, and the hierarchy without hiding behind metaphors.</p>
      <h2>The Return of Density</h2>
      <p>For years, "whitespace" was the holy grail. But for professional tools, density is efficiency. We are seeing a swing back towards high-density interfaces that allow expert users to parse vast amounts of information at a glance.</p>
    `
  },
  {
    id: 'a2',
    slug: 'system-first-architecture',
    title: 'SYSTEM-FIRST ARCHITECTURE',
    excerpt: 'Building design systems that actually scale involves more than just a Figma library.',
    category: 'Engineering',
    publishDate: 'SEP 28, 2024',
    readTime: 8,
    author: { name: 'Elena Korves', role: 'Principal Architect' },
    body: `
      <h2>Code as Source of Truth</h2>
      <p>A design system that lives only in a design tool is a hallucination. Until it is codified in component libraries with strict props and typing, it does not exist.</p>
      <h2>Tokenization Strategy</h2>
      <p>We approach styling through strict tokenization. Colors, spacing, and typography are not values; they are variables. This abstraction layer allows us to re-theme entire enterprise suites without touching a line of component logic.</p>
    `
  },
  {
    id: 'a3',
    slug: 'brutalist-performance',
    title: 'PERFORMANCE IS A FEATURE',
    excerpt: 'How stripping away JavaScript bloat improves conversion rates and SEO.',
    category: 'Engineering',
    publishDate: 'AUG 15, 2024',
    readTime: 6,
    author: { name: 'Sarah Jenkins', role: 'Senior Developer' },
    body: `
      <h2>The Cost of JavaScript</h2>
      <p>Every kilobyte of JavaScript blocks the main thread. We treat script tags as liabilities. By moving logic to the server or using native browser APIs, we achieve near-instant time-to-interactive.</p>
    `
  }
];

export const STATS: Stat[] = [
  { label: 'PROJECTS SHIPPED', value: '142', suffix: '+' },
  { label: 'CLIENT VALUATION', value: '4.2', suffix: 'B' },
  { label: 'AWARDS WON', value: '28', suffix: '' },
  { label: 'YEARS ACTIVE', value: '08', suffix: '' }
];