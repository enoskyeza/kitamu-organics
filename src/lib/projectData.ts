// src/data/projects.ts
import type { Projects } from "@/types/ProjectType";

export const projects: Projects = [
  {
    id: "proj-001",
    slug: "beekeeping-expansion",
    title: "Beekeeping Expansion",
    shortTitle: "Apiary Network & Training",
    tagline: "Training, starter hives, and market access for smallholders",
    category: "beekeeping",
    status: "active",
    hero: {
      image: "/images/projects/beekeeping/hero.jpg",
      imageAlt: "Kitamu trainers demonstrating hive inspection in Kitgum",
      badge: "Flagship",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Beekeeping Expansion", href: "/projects/beekeeping-expansion" },
    ],
    overview: {
      problem:
        "Rural households in Northern Uganda face low farm incomes, climate shocks, and limited access to reliable buyers. Youth and women often lack practical, asset-light enterprises they can start close to home.",
      solution:
        "We build village-level apiary networks by training farmers, supplying starter hives, providing extension support, and guaranteeing offtake for clean, well-handled honey.",
      objectives: [
        "Train 1,200 new beekeepers across 24 sub-counties in the next 12 months.",
        "Install 2,400 certified Langstroth and Top-bar hives with safety gear.",
        "Set up 24 demo apiaries and 12 aggregation points for quality control.",
        "Raise average honey yield per hive from 4 kg to 10 kg per season.",
      ],
      beneficiaries: {
        primary: "Smallholder farmers (with deliberate inclusion of youth & women).",
        secondary: "Local shopkeepers and transporters benefiting from aggregation points.",
        householdsTargeted: 4000,
        genderInclusionNote:
          "At least 55% of trainees are women; training schedules accommodate childcare and market days.",
      },
      geography: {
        region: "Northern Uganda",
        districts: ["Kitgum", "Gulu", "Lamwo", "Pader", "Agago"],
        coordinatesCenter: [3.2969, 32.8867],
      },
    },
    copy: {
      intro:
        "We’re scaling practical, climate-friendly livelihoods through bees. Our trainers deliver hands-on sessions on hive placement, colony management, and hygienic harvesting, then walk with farmers through their first season.",
      activities: [
        "Village workshops on bee biology, hive management, and harvest hygiene.",
        "Starter kit distribution: hive(s), suit, smoker, hive tool.",
        "On-farm coaching and WhatsApp support groups for peer learning.",
        "Quality-assured aggregation and timely payments via mobile money.",
      ],
      sustainability:
        "Profits from Kitamu product sales fund extension services. Farmer groups build savings to replace gear and add hives annually.",
      risksMitigation:
        "Mitigate bush fires via community fire lines; deter theft with coded branding and group monitoring; reduce pest losses with routine inspections.",
    },
    impact: {
      narrative:
        "By linking training, assets, and a guaranteed market, households create new income streams while improving local pollination and crop yields.",
      kpis: [
        { key: "households_engaged", label: "Households Engaged", unit: "hh", baseline: 0, current: 2300, target: 4000 },
        { key: "hives_installed", label: "Hives Installed", unit: "hives", baseline: 0, current: 1350, target: 2400 },
        { key: "yield_per_hive", label: "Yield per Hive", unit: "kg/season", baseline: 4, current: 7, target: 10 },
        { key: "avg_income_gain", label: "Avg. Seasonal Income Gain", unit: "UGX", baseline: 0, current: 240000, target: 480000 },
      ],
      stories: [
        {
          title: "“My first harvest paid school fees.”",
          person: "Grace A.",
          location: "Omiya Anyima, Kitgum",
          photo: "/images/projects/beekeeping/story-grace.jpg",
          quote:
            "I feared bees at first, but with the suit and training I harvested clean honey and sold to Kitamu the same week.",
          body:
            "Grace joined a women’s group in 2024. After two coaching visits, she harvested 12 kg from two hives and received mobile money payment at the aggregation point.",
        },
      ],
    },
    gallery: [
      { src: "/images/projects/beekeeping/1.jpg", alt: "Women trainees in suits", caption: "Women-led cohort" },
      { src: "/images/projects/beekeeping/2.jpg", alt: "Hive placement near woodlot", caption: "Proper siting" },
      { src: "/images/projects/beekeeping/3.jpg", alt: "Clean honey draining", caption: "Hygienic handling" },
    ],
    funding: {
      summary:
        "Funding focuses on trainee kits, field coaching, and aggregation infrastructure to guarantee quality and market access.",
      items: [
        { label: "Starter hive + safety kit per farmer", amount: 450000, currency: "UGX", description: "Hive, suit, smoker, hive tool" },
        { label: "Trainer & extension visits (per sub-county, per quarter)", amount: 1800000, currency: "UGX" },
        { label: "Aggregation point equipment (settling tanks, food-grade drums)", amount: 5200000, currency: "UGX" },
      ],
      note: "Budgets are indicative and refined after site assessments.",
    },
    sponsorship: {
      packages: [
        {
          name: "Sponsor a Hive",
          amount: 150000,
          currency: "UGX",
          benefits: ["Personalized tag on hive", "Photo update after first harvest", "Impact report (1 page)"],
          cta: { label: "Sponsor a Hive", href: "/contact?topic=sponsor-hive", style: "primary" },
        },
        {
          name: "Train a Farmer",
          amount: 120000,
          currency: "UGX",
          benefits: ["Covers training materials", "Protective gloves", "WhatsApp support enrollment"],
          cta: { label: "Fund Training", href: "/contact?topic=train-a-farmer", style: "secondary" },
        },
        {
          name: "Set up a Demo Apiary",
          amount: 3500000,
          currency: "UGX",
          benefits: ["Community signage", "Quarterly progress briefs", "Field visit opportunity"],
        },
      ],
      customSupportNote: "Corporate CSR packages available on request.",
    },
    downloads: [
      { title: "Beekeeping Expansion – Project Brief", url: "/files/kitamu-beekeeping-brief.pdf", filetype: "pdf", sizeKB: 980 },
    ],
    partners: [
      { name: "District Production Officers", role: "Local extension coordination" },
      { name: "UNBS", role: "Quality guidance for honey handling" },
    ],
    contacts: [
      { name: "Odong Wycliff", role: "Programs Lead", phone: "+256 7XX XXX XXX", email: "programs@kitamu.co.ug" },
    ],
    timeline: [
      { date: "2025-01-15", title: "Cohort mobilization", status: "done" },
      { date: "2025-03-10", title: "Training wave 1", status: "done" },
      { date: "2025-08-30", title: "Aggregation points upgrade", status: "in-progress" },
      { date: "2025-11-15", title: "Harvest 1 payments", status: "up-next" },
    ],
    ctas: [
      { label: "Join as a Trainee", href: "/services#training", style: "primary" },
      { label: "Wholesale Enquiry", href: "/contact?topic=wholesale", style: "outline" },
    ],
    seo: {
      title: "Beekeeping Expansion | Kitamu Natural Organics",
      description:
        "Training and hives for smallholders in Northern Uganda, with guaranteed offtake and quality aggregation.",
      keywords: ["Uganda beekeeping", "honey training", "apiary Northern Uganda"],
      shareImage: "/images/projects/beekeeping/hero.jpg",
    },
    relatedSlugs: ["fmnr-program", "natural-product-manufacturing"],
  },

  {
    id: "proj-002",
    slug: "fmnr-program",
    title: "FMNR Program",
    shortTitle: "Farmer-Managed Natural Regeneration",
    tagline: "Restoring trees with farmers—no costly planting required",
    category: "agroforestry",
    status: "active",
    hero: {
      image: "/images/projects/fmnr/hero.jpg",
      imageAlt: "Regenerated on-farm trees shading cassava fields",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "FMNR Program", href: "/projects/fmnr-program" },
    ],
    overview: {
      problem:
        "Degraded farmland, erratic rains, and bare landscapes reduce yields and increase vulnerability.",
      solution:
        "Coach farmers to identify and manage naturally occurring tree shoots on their own fields—protect, prune, and multiply.",
      objectives: [
        "Train 900 farmers in FMNR techniques across 18 parishes.",
        "Restore 1,200 hectares through natural regeneration and assisted pruning.",
        "Integrate bees & trees: improve forage for apiaries near farms.",
      ],
      beneficiaries: {
        primary: "Mixed-crop smallholders (especially women managing plots near homesteads).",
        secondary: "Beekeepers benefiting from improved forage and windbreaks.",
        householdsTargeted: 2000,
      },
      geography: {
        region: "Northern Uganda",
        districts: ["Kitgum", "Pader", "Agago"],
      },
    },
    copy: {
      intro:
        "FMNR is simple, scalable, and farmer-owned. Instead of planting, we protect what’s already sprouting. The result is shade, soil cover, and habitat—for people and pollinators.",
      activities: [
        "On-farm demos: identifying good shoots, stump selection, and correct pruning.",
        "Grazing management and tree guards to protect seedlings.",
        "Community field days and peer-to-peer learning groups.",
        "Monitoring plots with photo points and seasonal scoring.",
      ],
      sustainability:
        "Trees regenerate from existing root systems, reducing costs. Farmer groups enforce by-laws to protect regrowth.",
      risksMitigation:
        "Use low-cost guards against livestock browsing; community sensitization to reduce cutting; fire lines for dry seasons.",
    },
    impact: {
      narrative:
        "Within two seasons, formerly bare fields develop shade and leaf litter. Soils hold moisture, and bees find forage through the dry months.",
      kpis: [
        { key: "hectares_restored", label: "Hectares Under FMNR", unit: "ha", baseline: 0, current: 640, target: 1200 },
        { key: "farms_adopting", label: "Farms Adopting FMNR", unit: "farms", baseline: 0, current: 780, target: 2000 },
        { key: "tree_density", label: "On-Farm Tree Density", unit: "trees/ha", baseline: 8, current: 26, target: 40 },
      ],
      stories: [
        {
          title: "Shade returned—so did ground cover",
          person: "Okema P.",
          location: "Atiak, Pader",
          photo: "/images/projects/fmnr/story-okema.jpg",
          quote: "We didn’t buy seedlings—just protected what was there. Now the field is cooler and yields improved.",
        },
      ],
    },
    gallery: [
      { src: "/images/projects/fmnr/1.jpg", alt: "Selective pruning demo", caption: "Correct pruning" },
      { src: "/images/projects/fmnr/2.jpg", alt: "Tree guards around shoots", caption: "Protecting regrowth" },
      { src: "/images/projects/fmnr/3.jpg", alt: "Before and after plot", caption: "Visible change in one season" },
    ],
    funding: {
      summary:
        "Cost-effective coaching and low-cost protection materials enable wide coverage across villages.",
      items: [
        { label: "Community facilitator (per month)", amount: 650000, currency: "UGX" },
        { label: "Pruning kits & gloves (per cluster)", amount: 980000, currency: "UGX" },
        { label: "Field day logistics (per parish event)", amount: 420000, currency: "UGX" },
      ],
    },
    sponsorship: {
      packages: [
        {
          name: "Adopt a Parish",
          amount: 5200000,
          currency: "UGX",
          benefits: ["Branding on demo signage", "Quarterly progress brief", "Field visit"],
        },
        {
          name: "Equip a Facilitator",
          amount: 750000,
          currency: "UGX",
          benefits: ["Toolkit, protective gear, bicycle maintenance"],
        },
      ],
      customSupportNote: "Blended FMNR + Beekeeping sponsorships available.",
    },
    downloads: [
      { title: "FMNR Training Outline", url: "/files/kitamu-fmnr-outline.pdf", filetype: "pdf", sizeKB: 540 },
    ],
    partners: [
      { name: "Sub-county Natural Resources Offices", role: "By-law support & community mobilization" },
      { name: "Local Farmer Groups", role: "Peer learning & monitoring" },
    ],
    contacts: [
      { name: "Programs Desk", email: "programs@kitamu.co.ug" },
    ],
    timeline: [
      { date: "2025-02-01", title: "Facilitator onboarding", status: "done" },
      { date: "2025-04-01", title: "Cohort trainings", status: "in-progress" },
      { date: "2025-10-01", title: "Midline assessment", status: "up-next" },
    ],
    ctas: [
      { label: "Join a Training", href: "/services#training", style: "primary" },
      { label: "Sponsor a Parish", href: "/contact?topic=adopt-parish", style: "secondary" },
    ],
    seo: {
      title: "FMNR Program | Kitamu Natural Organics",
      description: "Farmer-led tree regeneration that restores soils and supports beekeeping.",
      keywords: ["FMNR Uganda", "agroforestry", "natural regeneration"],
      shareImage: "/images/projects/fmnr/hero.jpg",
    },
    relatedSlugs: ["beekeeping-expansion", "natural-product-manufacturing"],
  },

  {
    id: "proj-003",
    slug: "natural-product-manufacturing",
    title: "Natural Product Manufacturing",
    shortTitle: "From Hive to Jar in Kitgum",
    tagline: "Local processing, strict quality, more value at the source",
    category: "manufacturing",
    status: "active",
    hero: {
      image: "/images/projects/manufacturing/hero.jpg",
      imageAlt: "Kitamu processing line for honey and shea butter",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Natural Product Manufacturing", href: "/projects/natural-product-manufacturing" },
    ],
    overview: {
      problem:
        "Raw commodities exported without value addition keep farmer incomes low and reduce local jobs.",
      solution:
        "Operate a food-safe processing facility in Kitgum to produce pure honey, cold-pressed shea butter, odii, and related products—while enforcing quality standards.",
      objectives: [
        "Achieve HACCP-aligned procedures and UNBS mark for key product lines.",
        "Scale throughput to 1,000+ kg/month of honey with <1% rejection rate.",
        "Create stable youth & women employment in processing and packaging.",
      ],
      beneficiaries: {
        primary: "Beekeepers and shea collectors supplying raw materials.",
        secondary: "Retailers and local consumers accessing certified products.",
      },
      geography: {
        region: "Northern Uganda",
        districts: ["Kitgum"],
      },
    },
    copy: {
      intro:
        "Kitamu’s processing hub keeps value here at home. We standardize filtration, settling, and packing for honey; and cold-press shea butter with clean, traceable inputs.",
      activities: [
        "Quality assurance: moisture tests, traceability logs, and batch coding.",
        "Food-safe processing line upgrades and staff training.",
        "Product development: Kitamu Honey Wine, odii variants, infused oils.",
      ],
      sustainability:
        "Local value addition improves rural incomes and funds ongoing training for suppliers. Waste streams (wax cappings) are repurposed.",
      risksMitigation:
        "Supplier training reduces adulteration risk; process controls and random sampling keep quality high.",
    },
    impact: {
      narrative:
        "A reliable buyer and a clean factory change incentives upstream. Farmers invest in better handling when they see consistent prices and fair weights.",
      kpis: [
        { key: "monthly_throughput", label: "Honey Throughput", unit: "kg/month", baseline: 0, current: 720, target: 1000 },
        { key: "jobs_created", label: "Jobs Created", unit: "staff", baseline: 0, current: 18, target: 25 },
        { key: "rejection_rate", label: "Batch Rejection Rate", unit: "%", baseline: 5, current: 1.2, target: 1.0 },
      ],
      stories: [
        {
          title: "Reliable offtake built my apiary",
          person: "Akello J.",
          location: "Palabek, Lamwo",
          photo: "/images/projects/manufacturing/story-akello.jpg",
          quote:
            "Since Kitamu started packing locally, I added more hives because I trust their weighing and payments.",
        },
      ],
    },
    gallery: [
      { src: "/images/projects/manufacturing/1.jpg", alt: "Settling tanks", caption: "Food-grade settling" },
      { src: "/images/projects/manufacturing/2.jpg", alt: "Labeling line", caption: "Traceable batches" },
      { src: "/images/projects/manufacturing/3.jpg", alt: "QC test", caption: "Moisture checks" },
    ],
    funding: {
      summary: "Targeted capex and QA systems unlock certification and scale.",
      items: [
        { label: "HACCP documentation & audits", amount: 9500000, currency: "UGX" },
        { label: "QC equipment (refractometer, scales, seals)", amount: 6200000, currency: "UGX" },
        { label: "Packaging line upgrades", amount: 17800000, currency: "UGX" },
      ],
    },
    sponsorship: {
      packages: [
        {
          name: "QC Lab Booster",
          amount: 7200000,
          currency: "UGX",
          benefits: ["Recognition on batch certificates", "Quarterly QC report"],
        },
        {
          name: "Packaging Partner",
          amount: 12500000,
          currency: "UGX",
          benefits: ["Co-branding on cartons", "Factory tour + impact brief"],
        },
      ],
    },
    downloads: [
      { title: "Manufacturing Overview", url: "/files/kitamu-manufacturing.pdf", filetype: "pdf", sizeKB: 760 },
    ],
    partners: [
      { name: "UNBS", role: "Standards & certification" },
      { name: "Local Retailers", role: "Market access" },
    ],
    contacts: [
      { name: "Production Desk", email: "production@kitamu.co.ug", phone: "+256 7XX XXX XXX" },
    ],
    timeline: [
      { date: "2025-03-01", title: "QA SOPs rollout", status: "done" },
      { date: "2025-06-15", title: "Packaging line upgrade", status: "in-progress" },
      { date: "2025-09-30", title: "UNBS audit window", status: "up-next" },
    ],
    ctas: [
      { label: "Wholesale & B2B", href: "/contact?topic=wholesale", style: "primary" },
    ],
    seo: {
      title: "Natural Product Manufacturing | Kitamu Natural Organics",
      description: "Local value addition for honey, shea butter, and more—right in Kitgum.",
      keywords: ["Uganda honey processing", "shea butter cold pressed", "UNBS quality"],
      shareImage: "/images/projects/manufacturing/hero.jpg",
    },
    relatedSlugs: ["beekeeping-expansion", "fmnr-program"],
  },
];
