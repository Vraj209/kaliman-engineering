/**
 * Site copy and routing config. Keep in sync with `docs/business.md`.
 */

export const siteConfig = {
  company: {
    legalName: "Kalimal Engineering",
    shortName: "Kali Engineering",
  },
  tagline:
    "The best range of job work, CNC, VMC, lathe & rings — effective & timely delivery",
  logo: {
    /** Public URL for `public/logo-image.jpeg` */
    src: "/logo-image.jpeg",
    alt: "Kalimal Engineering",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  elevatorPitch:
    "Kalimal Engineering offers the best range of contract job work — CNC and VMC machining, lathe work, rings, and related precision work — with effective, timely delivery and dependable execution.",
  contact: {
    email: "kalimalengineering@gmail.com",
    phones: [
      {
        label: "Phone",
        display: "+91 94286 47791",
        tel: "+919428647791",
      },
      {
        label: "Phone (Alt)",
        display: "+91 90339 72684",
        tel: "+919033972684",
      },
    ],
    address:
      "C-444, Nr. Berger Paints, G.I.D.C. Estate, V.U. Nagar, Anand — 388121",
    hours: "Hours TBD — update from verified records",
  },
  mailto: {
    quoteSubject: "Quote request — Kalimal Engineering",
  },
  services: [
    {
      title: "Job Work (General)",
      description:
        "Contract manufacturing and custom job work across agreed specifications. We handle diverse requirements under a single engagement model with clear scope and realistic schedules.",
      bullets: [
        "Custom parts per customer specifications",
        "Flexible batch sizes — prototype to production",
        "Single point of contact for project coordination",
      ],
    },
    {
      title: "CNC Job Work",
      description:
        "Programmed CNC production and prototypes per customer drawings. Tight tolerances, repeatable quality, and efficient turnaround on complex geometries.",
      bullets: [
        "Multi-axis CNC programming and operation",
        "Prototype and production runs",
        "Tight tolerance machining to specification",
      ],
    },
    {
      title: "CNC Machining Job Work",
      description:
        "Precision CNC machining for components and assemblies across a range of materials. From single-piece prototypes to medium-volume production.",
      bullets: [
        "Components and assemblies across materials",
        "Consistent quality through programmed toolpaths",
        "Scalable from one-off to batch production",
      ],
    },
    {
      title: "VMC Machine Job Work",
      description:
        "Vertical machining center work for milling, drilling, and complex multi-axis features. Ideal for parts requiring high-precision surface finishing.",
      bullets: [
        "Milling, drilling, and tapping operations",
        "Complex multi-axis feature machining",
        "High-precision surface finishing",
      ],
    },
    {
      title: "Lathe Machine Job Work",
      description:
        "Turning, boring, and cylindrical machining on manual and CNC lathes. Reliable execution for shafts, bushings, and rotational components.",
      bullets: [
        "Turning and boring operations",
        "Cylindrical and face machining",
        "Shafts, bushings, and rotational parts",
      ],
    },
    {
      title: "Rings",
      description:
        "Ring-type components and related precision parts manufactured to specification. Custom dimensions and materials as per customer requirements.",
      bullets: [
        "Ring-type components to specification",
        "Custom dimensions and materials",
        "Consistent quality across batches",
      ],
    },
  ],
  industries: [
    "General Industrial & OEM Suppliers",
    "Equipment Manufacturers",
    "Automotive Component Suppliers",
    "Precision Engineering Firms",
  ],
  differentiators: [
    {
      title: "Best Range of Job Work",
      description:
        "CNC, VMC, lathe, rings, and general job work under one engagement model — no need to coordinate across multiple vendors.",
    },
    {
      title: "Effective & Timely Delivery",
      description:
        "A stated commitment to on-time completion backed by realistic scheduling and proactive communication throughout every project.",
    },
    {
      title: "Partnership Approach",
      description:
        "Clear scope, realistic schedules, and open communication on custom runs. We work as an extension of your team, not just a supplier.",
    },
  ],
  stats: [
    { value: "6+", label: "Service categories" },
    { value: "100%", label: "On-time delivery commitment" },
    { value: "B2B", label: "Partnership model" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];

/** mailto: link for quote requests with subject line from config */
export function quoteMailto(): string {
  const params = new URLSearchParams({
    subject: siteConfig.mailto.quoteSubject,
  });
  return `mailto:${siteConfig.contact.email}?${params.toString()}`;
}

/** tel: link for the primary phone number */
export function telHref(index = 0): string {
  return `tel:${siteConfig.contact.phones[index].tel}`;
}
