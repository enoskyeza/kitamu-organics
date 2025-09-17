// src/types/projects.ts

export type Currency = 'UGX' | 'USD';

export interface Breadcrumb { label: string; href: string; }
export interface GalleryImage { src: string; alt: string; caption?: string; }

export interface KPI {
  key: string;            // e.g., "households_engaged"
  label: string;          // e.g., "Households Engaged"
  unit?: string;          // e.g., "households", "kg", "%"
  baseline?: number;
  current?: number;
  target?: number;
}

export interface BudgetItem {
  label: string;
  amount: number;
  currency: Currency;
  description?: string;
}

export interface Funding {
  summary?: string;
  items: BudgetItem[];
  total?: number;         // optional convenience field
  note?: string;          // e.g., “Budgets are indicative…”
}

export interface Download {
  title: string;
  url: string;            // /files/kitamu-project-brief.pdf
  filetype: 'pdf' | 'docx' | 'xlsx' | 'pptx';
  sizeKB?: number;
  publishedAt?: string;   // ISO
}

export interface Partner {
  name: string;
  role?: string;          // e.g., “Training partner”, “Certification”
  logo?: string;          // /images/partners/xyz.svg
  website?: string;
}

export interface Contact {
  name: string;
  role?: string;
  phone?: string;
  email?: string;
}

export type ProjectCategory =
  | 'beekeeping'
  | 'agroforestry'
  | 'manufacturing'
  | 'training'
  | 'community'
  | 'research';

export type ProjectStatus = 'planned' | 'active' | 'completed' | 'paused';

export interface TimelineMilestone {
  date: string;           // ISO
  title: string;
  description?: string;
  status?: 'done' | 'in-progress' | 'blocked' | 'up-next';
}

export interface CTA {
  label: string;          // e.g., "Sponsor a Hive"
  href: string;           // /contact?topic=sponsor-a-hive or WhatsApp link
  style?: 'primary' | 'secondary' | 'outline';
}

export interface Project {
  id: string;
  slug: string;           // for /projects/[slug]
  title: string;
  shortTitle?: string;
  tagline?: string;
  category: ProjectCategory;
  status: ProjectStatus;

  hero: {
    image: string;        // /images/projects/beekeeping/hero.jpg
    imageAlt: string;
    badge?: string;       // e.g., "Flagship"
  };

  breadcrumbs?: Breadcrumb[];

  overview: {
    problem: string;
    solution: string;
    objectives: string[]; // bullet goals
    beneficiaries: {
      primary: string;    // e.g., "Smallholder farmers (youth & women included)"
      secondary?: string;
      householdsTargeted?: number;
      genderInclusionNote?: string;
    };
    geography: {
      region: string;     // "Northern Uganda"
      districts: string[]; // ["Kitgum","Gulu","Lamwo"]
      coordinatesCenter?: [number, number]; // [lat, lng]
    };
  };

  copy: {
    intro: string;        // opening paragraph(s)
    activities: string[]; // bullet list of core activities
    sustainability?: string;
    risksMitigation?: string;
  };

  impact: {
    narrative: string;    // human story of impact
    kpis: KPI[];
    stories?: {
      title: string;
      person?: string;    // storyteller name (first name ok)
      location?: string;  // parish/subcounty/district
      photo?: string;
      quote?: string;
      body?: string;
    }[];
  };

  gallery: GalleryImage[]; // mini gallery

  funding?: Funding;

  sponsorship?: {
    packages: {
      name: string;
      amount: number;
      currency: Currency;
      benefits: string[];
      cta?: CTA;
    }[];
    customSupportNote?: string;
  };

  downloads?: Download[];
  partners?: Partner[];
  contacts?: Contact[];
  timeline?: TimelineMilestone[];
  ctas?: CTA[];           // page-level CTAs

  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    shareImage?: string;
  };

  relatedSlugs?: string[]; // for “Related projects”
}

export type Projects = Project[];
