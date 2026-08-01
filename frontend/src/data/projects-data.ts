export interface Project {
  id: string
  title: string
  description: string
  category: string
  subCategory?: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  studentsCount: number
  duration: string
  mentor: {
    name: string
    role: string
    avatar: string
  }
  techStack: string[]
  stipend?: string
  hasCertificate: boolean
  thumbnail: string
  demoUrl?: string
  enrolled?: boolean
  progress?: number // 0-100 percentage
  rating: number
  popular?: boolean
  dateAdded: string
}

export interface CategoryFilter {
  id: string
  name: string
  count: number
  subcategories: { id: string; name: string; count: number }[]
}

export const CATEGORIES_DATA: CategoryFilter[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    count: 42,
    subcategories: [
      { id: 'llms', name: 'LLMs & Fine-Tuning', count: 18 },
      { id: 'computer-vision', name: 'Computer Vision', count: 14 },
      { id: 'nlp', name: 'NLP & Chatbots', count: 10 }
    ]
  },
  {
    id: 'fullstack',
    name: 'Full Stack Development',
    count: 38,
    subcategories: [
      { id: 'saas-apps', name: 'SaaS Applications', count: 20 },
      { id: 'e-commerce', name: 'E-Commerce Platforms', count: 18 }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    count: 29,
    subcategories: [
      { id: 'react-apps', name: 'React Apps', count: 15 },
      { id: 'design-systems', name: 'Design Systems & UI', count: 14 }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development',
    count: 31,
    subcategories: [
      { id: 'microservices', name: 'Microservices Architecture', count: 16 },
      { id: 'api-gateway', name: 'REST & GraphQL APIs', count: 15 }
    ]
  },
  {
    id: 'react-next',
    name: 'React & Next.js',
    count: 35,
    subcategories: [
      { id: 'next-15', name: 'Next.js App Router', count: 22 },
      { id: 'server-components', name: 'Server Actions & Components', count: 13 }
    ]
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    count: 24,
    subcategories: [
      { id: 'express', name: 'Express & NestJS', count: 14 },
      { id: 'realtime-sockets', name: 'WebSockets & Realtime', count: 10 }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    count: 45,
    subcategories: [
      { id: 'fastapi', name: 'FastAPI & Django', count: 25 },
      { id: 'data-automation', name: 'Scripting & Automation', count: 20 }
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    count: 19,
    subcategories: [
      { id: 'bi-dashboards', name: 'BI & Dashboarding', count: 11 },
      { id: 'predictive-models', name: 'Predictive Analysis', count: 8 }
    ]
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    count: 16,
    subcategories: [
      { id: 'penetration-testing', name: 'Penetration Testing', count: 9 },
      { id: 'threat-analysis', name: 'Threat Detection AI', count: 7 }
    ]
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Development',
    count: 22,
    subcategories: [
      { id: 'react-native', name: 'React Native', count: 14 },
      { id: 'flutter', name: 'Flutter', count: 8 }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps',
    count: 18,
    subcategories: [
      { id: 'ci-cd', name: 'CI/CD Pipelines', count: 10 },
      { id: 'docker-k8s', name: 'Docker & Kubernetes', count: 8 }
    ]
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    count: 20,
    subcategories: [
      { id: 'aws', name: 'AWS Architecture', count: 12 },
      { id: 'serverless', name: 'Serverless Functions', count: 8 }
    ]
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    count: 15,
    subcategories: [
      { id: 'figma', name: 'Figma Design Systems', count: 9 },
      { id: 'user-research', name: 'User Testing & Wireframing', count: 6 }
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    count: 12,
    subcategories: [
      { id: 'smart-contracts', name: 'Solidity Smart Contracts', count: 7 },
      { id: 'dapps', name: 'Web3 dApps', count: 5 }
    ]
  },
  {
    id: 'iot',
    name: 'IoT',
    count: 10,
    subcategories: [
      { id: 'smart-home', name: 'Smart Home Automation', count: 6 },
      { id: 'sensor-networks', name: 'Industrial IoT Telemetry', count: 4 }
    ]
  },
  {
    id: 'software-testing',
    name: 'Software Testing',
    count: 14,
    subcategories: [
      { id: 'e2e-testing', name: 'Playwright & Cypress E2E', count: 8 },
      { id: 'unit-testing', name: 'Jest & TDD Practices', count: 6 }
    ]
  }
]

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Autonomous AI Customer Support Agent',
    description: 'Build an end-to-end multi-agent support workspace with vector embeddings, semantic retrieval, and real-time human handoff.',
    category: 'AI & Machine Learning',
    subCategory: 'LLMs & Fine-Tuning',
    difficulty: 'Advanced',
    studentsCount: 1420,
    duration: '4 Weeks',
    mentor: {
      name: 'Dr. Aris Thorne',
      role: 'Principal AI Scientist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    techStack: ['Python', 'LangChain', 'FastAPI', 'Next.js', 'Pinecone'],
    stipend: '₹10,000 / mo',
    hasCertificate: true,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    enrolled: true,
    progress: 68,
    rating: 4.9,
    popular: true,
    dateAdded: '2026-07-15'
  },
  {
    id: 'proj-2',
    title: 'Enterprise SaaS Boilerplate & Billing System',
    description: 'Full-stack multi-tenant SaaS application with Stripe billing subscriptions, RBAC authorization, and automated deployment pipelines.',
    category: 'Full Stack Development',
    subCategory: 'SaaS Applications',
    difficulty: 'Intermediate',
    studentsCount: 2310,
    duration: '3 Weeks',
    mentor: {
      name: 'Elena Rostova',
      role: 'Senior Tech Lead @ Vercel',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
    },
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Stripe'],
    stipend: '₹10,000 / mo',
    hasCertificate: true,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    enrolled: true,
    progress: 35,
    rating: 4.8,
    popular: true,
    dateAdded: '2026-07-20'
  },
  {
    id: 'proj-3',
    title: 'Real-Time Financial Analytics Engine',
    description: 'High-throughput stock market ticker processing pipeline with WebSocket feeds, interactive Candlestick charts, and anomaly detection.',
    category: 'React & Next.js',
    subCategory: 'Server Actions & Components',
    difficulty: 'Advanced',
    studentsCount: 980,
    duration: '5 Weeks',
    mentor: {
      name: 'Marcus Vance',
      role: 'Staff Engineer @ FinTech Inc',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    techStack: ['React', 'Next.js', 'WebSockets', 'Apache Kafka', 'Recharts'],
    stipend: '₹10,000 / mo',
    hasCertificate: true,
    thumbnail: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600&auto=format&fit=crop&q=80',
    enrolled: false,
    rating: 4.9,
    popular: true,
    dateAdded: '2026-06-10'
  },
  {
    id: 'proj-4',
    title: 'Scalable Microservices E-Commerce Backend',
    description: 'Distributed REST & gRPC API architecture for catalog, inventory, order processing, and fault-tolerant event queues.',
    category: 'Backend Development',
    subCategory: 'Microservices Architecture',
    difficulty: 'Advanced',
    studentsCount: 1650,
    duration: '4 Weeks',
    mentor: {
      name: 'Devon Miller',
      role: 'Cloud Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    },
    techStack: ['Node.js', 'Go', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL'],
    stipend: '₹10,000 / mo',
    hasCertificate: true,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    enrolled: false,
    rating: 4.7,
    popular: false,
    dateAdded: '2026-07-01'
  },
  {
    id: 'proj-5',
    title: 'Design System & Component Library',
    description: 'Construct a accessible, themeable UI component system with Tailwind CSS, Storybook documentation, and automated npm publishing.',
    category: 'Frontend Development',
    subCategory: 'Design Systems & UI',
    difficulty: 'Beginner',
    studentsCount: 3100,
    duration: '2 Weeks',
    mentor: {
      name: 'Sarah Chen',
      role: 'Lead UI/UX Engineer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
    },
    techStack: ['React', 'Tailwind CSS', 'Storybook', 'Radix UI', 'TypeScript'],
    hasCertificate: true,
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    enrolled: true,
    progress: 100,
    rating: 4.9,
    popular: true,
    dateAdded: '2026-05-18'
  },
  {
    id: 'proj-6',
    title: 'AI Video Summarizer & Transcript Search',
    description: 'Transform YouTube videos into structured chapters, instant search indexes, and automatic multi-language AI transcriptions.',
    category: 'Python',
    subCategory: 'FastAPI & Django',
    difficulty: 'Intermediate',
    studentsCount: 1890,
    duration: '3 Weeks',
    mentor: {
      name: 'Dr. Aris Thorne',
      role: 'Principal AI Scientist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    techStack: ['Python', 'FastAPI', 'Whisper API', 'OpenAI', 'React'],
    stipend: '₹10,000 / mo',
    hasCertificate: true,
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80',
    enrolled: false,
    rating: 4.8,
    popular: false,
    dateAdded: '2026-07-10'
  },
  {
    id: 'proj-7',
    title: 'Zero-Trust Cybersecurity Scanner & Auditor',
    description: 'Automated vulnerability scanner for HTTP headers, CORS configurations, dependency CVE checks, and automated PDF compliance reporting.',
    category: 'Cyber Security',
    subCategory: 'Penetration Testing',
    difficulty: 'Advanced',
    studentsCount: 740,
    duration: '4 Weeks',
    mentor: {
      name: 'Vikram Sethi',
      role: 'Cybersecurity Consultant',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
    },
    techStack: ['Python', 'Docker', 'Bash', 'OWASP ZAP', 'Next.js'],
    stipend: '₹10,000 / mo',
    hasCertificate: true,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
    enrolled: false,
    rating: 4.9,
    popular: false,
    dateAdded: '2026-06-25'
  },
  {
    id: 'proj-8',
    title: 'Cross-Platform Fitness Tracking Mobile App',
    description: 'Build a iOS & Android fitness tracking app with wearable bluetooth sync, workout planning, and interactive progress widgets.',
    category: 'Mobile App Development',
    subCategory: 'React Native',
    difficulty: 'Intermediate',
    studentsCount: 1520,
    duration: '3 Weeks',
    mentor: {
      name: 'Aisha Patel',
      role: 'Mobile Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    },
    techStack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'GraphQL'],
    hasCertificate: true,
    thumbnail: 'https://images.unsplash.com/photo-1510519138161-58446232811f?w=600&auto=format&fit=crop&q=80',
    enrolled: false,
    rating: 4.7,
    popular: true,
    dateAdded: '2026-07-02'
  },
  {
    id: 'proj-9',
    title: 'Cloud Infrastructure GitOps with Terraform & Kubernetes',
    description: 'Set up an automated infrastructure-as-code repository provisioned on AWS EKS with Prometheus monitoring and ArgoCD deployments.',
    category: 'DevOps',
    subCategory: 'Docker & Kubernetes',
    difficulty: 'Advanced',
    studentsCount: 1120,
    duration: '4 Weeks',
    mentor: {
      name: 'Devon Miller',
      role: 'Cloud Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    },
    techStack: ['Terraform', 'Kubernetes', 'AWS', 'ArgoCD', 'GitHub Actions'],
    stipend: '₹10,000 / mo',
    hasCertificate: true,
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    enrolled: false,
    rating: 4.9,
    popular: false,
    dateAdded: '2026-07-18'
  }
]
