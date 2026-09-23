export type SkillGroup = {
  category: string;
  items: string[];
};

export type PortfolioProject = {
  id: string;
  year: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  previewUrl: string;
};

export type WorkExperience = {
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type SocialLink = ContactLink & {
  icon: 'github' | 'linkedin' | 'email';
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/jaycenusa',
    external: true,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jay-cen-14903615a',
    external: true,
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:Jaycenca.github@gmail.com',
    icon: 'email',
  },
];

export const resumeLink = {
  label: 'Resume',
  href: 'Jay_Cen_Frontend_Resume.pdf',
  download: 'Jay_Cen_Frontend_Resume.pdf',
} as const;

export const portfolioStats = [
  { label: 'Years exp.', value: '3+' },
  { label: 'Stack', value: 'Angular, TypeScript, HTML, CSS' },
  { label: 'Based in', value: 'New York, USA' },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frameworks & Libraries',
    items: ['Angular', 'RxJS', 'NgRx', 'React', 'Tailwind CSS', 'Contentful', 'Algolia'],
  },
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'Java'],
  },
  {
    category: 'Tooling & Build',
    items: ['Webpack', 'Vite', 'ESLint'],
  },
  {
    category: 'Testing Tools',
    items: ['Jest', 'Cypress', 'Playwright', 'Postman', 'DBeaver'],
  },
  {
    category: 'APIs & Databases',
    items: ['REST', 'PostgreSQL', 'MongoDB', 'IBM DB2'],
  },
  {
    category: 'DevOps & Platforms',
    items: ['Git', 'GitHub Actions', 'Docker', 'Azure AD', 'Azure DevOps'],
  },
  {
    category: 'Observability',
    items: ['Dynatrace'],
  },
  {
    category: 'Design & Collaboration',
    items: ['Figma', 'Jira', 'Confluence'],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '01',
    year: 'June 2026 — In Progress',
    name: 'Auto Shop Inventory Management System',
    description:
      'A full-width React application for managing auto shop parts inventory—browse stock, add and update parts, filter by category, and receive low-stock email alerts.',
    tags: ['React', 'TypeScript', 'Webpack', 'Express'],
    githubUrl: 'https://github.com/jaycenusa/auto-shop-inventory-management-system/',
    previewUrl: 'https://jaycenusa.github.io/auto-shop-inventory-management-system/',
  },
  {
    id: '02',
    year: '2026',
    name: 'Portfolio Jay Cen',
    description:
      'A personal portfolio website showcasing Jay Cen as a UX-minded, quality-driven frontend engineer with dedicated pages, responsive layout, and automated CI/CD.',
    tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Playwright'],
    githubUrl: 'https://github.com/jaycenusa/portfolio-jay-cen/',
    previewUrl: 'https://jaycenusa.github.io/portfolio-jay-cen/',
  },
];

export const workExperience: WorkExperience[] = [
  {
    period: 'Oct 2022 — June 2025',
    role: 'Software Engineer',
    company: 'Rogers Telecommunications Inc.',
    location: 'Brampton, ON, Canada',
    bullets: [
      'Built a real-time Angular application (TypeScript, RxJS, NgRx) that marketing teams use to configure promotions and discounts, contributing to a 25% reduction in rate card melt; partnered with product managers and designers to turn requirements into production UI.',
      'Cut load times 50% for large datasets by redesigning component architecture with lazy-loaded modules, OnPush change detection, and centralized NgRx state.',
      'Reduced average incident investigation time from 1 hour to 10 minutes by integrating Dynatrace RUM and centralized logging into real-time frontend performance and error dashboards.',
      'Resolved 20+ high-risk vulnerabilities with Product, Security, and QA teams while holding release dates in an Agile/Scrum process.',
      'Shipped to Azure Kubernetes through Azure CI/CD pipelines and built versioned Spring Boot REST APIs consumed by the frontend.',
    ],
  },
  {
    period: 'May 2022 — Oct 2022',
    role: 'QA Engineer',
    company: 'Rogers Telecommunications Inc.',
    location: 'Brampton, ON, Canada',
    bullets: [
      'Automated 200+ unit and E2E tests with Playwright, cutting manual regression effort by 90%; published reports via Monocart Reporter and Akamai NetStorage.',
      'Wrote and executed 100+ test cases across the Angular frontend and Spring Boot APIs using Postman, SoapUI, and Katalon, logging 10+ defects in Jira and reaching 100% test case validation within project deadlines.',
    ],
  },
  {
    period: 'May 2019 — August 2020',
    role: 'Software Engineer Intern',
    company: 'IBM Canada',
    location: 'Markham, ON, Canada',
    bullets: [
      'Built full-stack features for B2B web platforms and a JavaScript internal results dashboard; automated 90% of manual end-to-end test cases using Protractor, Jasmine, and Postman.',
    ],
  },
  {
    period: 'January 2019 — April 2019',
    role: 'Software Engineer Intern',
    company: 'Scotiabank',
    location: 'Scarborough, ON, Canada',
    bullets: [
      'Developed a full-stack JSP web application used by 40+ back-office users to analyze and validate incoming bank transactions (Java EE, Apache Tomcat, HTML); gathered requirements from business stakeholders and iterated on user feedback.',
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/jaycenusa',
    external: true,
  },
  {
    label: 'Portfolio repo',
    href: 'https://github.com/jaycenusa/portfolio-jay-cen/',
    external: true,
  },
  {
    label: 'Live site',
    href: 'https://jaycenusa.github.io/portfolio-jay-cen/',
    external: true,
  },
];
