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
  serviceCategories: [
    {
      category: "CNC Machining Services",
      image: "/cnc-machining.png",
      description:
        "Precision CNC machining with multi-axis capabilities, tight tolerances, and superior surface finishes for prototypes through production.",
      services: [
        {
          slug: "cnc-job-work",
          title: "CNC Job Work",
          description:
            "Programmed CNC production and prototypes per customer drawings. Tight tolerances, repeatable quality, and efficient turnaround on complex geometries.",
          longDescription:
            "Our CNC job work service covers the full spectrum of programmed machining — from single prototypes to recurring production batches. We work directly from your 2D drawings or 3D models, programming toolpaths that deliver consistent results run after run. Whether you need a one-off proof-of-concept or a repeat order of hundreds, we manage the process end-to-end with clear communication at every stage.",
          bullets: [
            "Multi-axis CNC programming and operation",
            "Prototype and production runs",
            "Tight tolerance machining to specification",
          ],
          howItWorks: [
            { step: "Drawing Review", description: "We review your drawings or CAD models to confirm dimensions, tolerances, and material requirements." },
            { step: "Programming", description: "Our team programs optimized CNC toolpaths for accuracy and efficient cycle times." },
            { step: "Machining", description: "Parts are machined on our CNC equipment with in-process checks for critical dimensions." },
            { step: "Inspection & Delivery", description: "Finished parts are inspected against your specifications, documented, and delivered on schedule." },
          ],
        },
        {
          slug: "cnc-machining",
          title: "CNC Machining",
          description:
            "Multi-axis CNC machining for components and assemblies across a range of materials — aluminum, steel, brass, and engineering plastics.",
          longDescription:
            "Our CNC machining service handles components and assemblies across aluminum, steel, stainless steel, brass, and engineering plastics. With multi-axis capability we produce parts with complex features in fewer setups, reducing lead time and improving positional accuracy. From one-off pieces to medium-volume batches, our machining centre is set up to scale with your demand.",
          bullets: [
            "3-axis, 4-axis machining capabilities",
            "Components and assemblies across materials",
            "Scalable from one-off to batch production",
          ],
          howItWorks: [
            { step: "Material Selection", description: "We help select the right material grade based on your application, load, and environment requirements." },
            { step: "Fixturing & Setup", description: "Custom fixtures and work-holding are prepared to ensure part stability and repeatable positioning." },
            { step: "Multi-Axis Machining", description: "Parts are machined across multiple axes, reducing setups and improving geometric accuracy." },
            { step: "Quality Assurance", description: "Each part is measured and verified against your drawing before packing and dispatch." },
          ],
        },
        {
          slug: "cnc-prototyping",
          title: "CNC Prototyping",
          description:
            "Rapid CNC prototyping with fast turnaround. Design validation, iterative development, and material testing before committing to production.",
          longDescription:
            "Get functional prototypes machined from production-grade materials — not just 3D-printed approximations. Our CNC prototyping service lets you validate fit, form, and function before committing to tooling or volume production. Fast iteration cycles mean you can test multiple design revisions without long lead times, catching issues early and reducing overall project risk.",
          bullets: [
            "Quick-turn prototype machining",
            "Design validation and iteration",
            "Material testing and finish evaluation",
          ],
          howItWorks: [
            { step: "Design Intake", description: "Share your CAD files or sketches. We review geometry and suggest any DFM improvements." },
            { step: "Rapid Programming", description: "Toolpaths are generated quickly, prioritizing turnaround over maximum cycle-time optimization." },
            { step: "Prototype Machining", description: "Your part is machined from the actual production material for realistic testing." },
            { step: "Feedback Loop", description: "Review the prototype, request changes, and iterate — we turn revisions around fast." },
          ],
        },
        {
          slug: "precision-machining",
          title: "Precision Machining",
          description:
            "Ultra-precision machining achieving tight tolerances for critical applications. CMM inspection and quality documentation available.",
          longDescription:
            "When tolerances matter down to hundredths of a millimeter, our precision machining service delivers. We combine rigid machine setups, controlled environments, and CMM inspection to hit the tightest callouts reliably. Full quality documentation — including dimensional reports and material certificates — is available for every job, supporting your downstream assembly and compliance requirements.",
          bullets: [
            "Tight tolerances for critical dimensions",
            "CMM inspection and measurement",
            "Quality documentation and traceability",
          ],
          howItWorks: [
            { step: "Tolerance Analysis", description: "We review your GD&T callouts and plan the machining strategy around critical features." },
            { step: "Controlled Machining", description: "Parts are machined with optimized feeds, speeds, and thermal management for dimensional stability." },
            { step: "CMM Inspection", description: "Critical dimensions are verified on a coordinate measuring machine with full traceability." },
            { step: "Documentation", description: "Inspection reports, material certs, and CoC documents are provided as required." },
          ],
        },
        {
          slug: "cnc-milling",
          title: "CNC Milling",
          description:
            "Multi-axis CNC milling for complex geometries, pockets, slots, and contoured surfaces. High-speed machining for improved surface finish.",
          longDescription:
            "Our CNC milling service tackles complex 3D geometries, deep pockets, precision slots, and contoured surfaces that require multi-axis coordination. High-speed machining strategies improve surface finish and reduce secondary operations. Whether your part is a simple plate with precision holes or a multi-feature housing, our milling capability covers the full range.",
          bullets: [
            "Complex geometry and contour milling",
            "High-speed machining capability",
            "Fine surface finish achievable",
          ],
          howItWorks: [
            { step: "CAM Programming", description: "3D toolpaths are generated from your model, optimized for surface quality and cycle time." },
            { step: "Tool Selection", description: "Cutters are selected for the material and feature — balancing rigidity, reach, and finish." },
            { step: "Milling Operations", description: "Roughing and finishing passes produce the final geometry with controlled step-overs." },
            { step: "Surface Verification", description: "Surface finish and dimensional accuracy are checked before the part leaves the machine." },
          ],
        },
        {
          slug: "cnc-turned-components",
          title: "CNC Turned Components",
          description:
            "CNC turning for cylindrical, conical, and rotational parts. Live tooling available for secondary operations in a single setup.",
          longDescription:
            "Produce cylindrical, conical, and complex rotational components on our CNC turning centres. Live tooling capability means cross-drilling, flats, keyways, and other secondary features can be completed in the same setup — reducing handling, improving concentricity, and shortening lead times. Ideal for shafts, bushings, connectors, and any part with rotational symmetry.",
          bullets: [
            "Cylindrical and conical turning",
            "Live tooling for secondary ops",
            "Single-setup efficiency for complex parts",
          ],
          howItWorks: [
            { step: "Part Assessment", description: "We evaluate the geometry to plan turning and live-tooling operations in minimal setups." },
            { step: "CNC Turning", description: "The workpiece is turned to profile, maintaining tight diameter and length tolerances." },
            { step: "Secondary Features", description: "Cross-holes, flats, threads, and grooves are added with live tooling without re-chucking." },
            { step: "Final Inspection", description: "Diameters, runout, and surface finish are verified before dispatch." },
          ],
        },
      ],
    },
    {
      category: "VMC Machining Services",
      image: "/vmc-machining.png",
      description:
        "Vertical machining center work for milling, drilling, tapping, and multi-axis features requiring high-precision surface finishing.",
      services: [
        {
          slug: "vmc-machine-job-work",
          title: "VMC Machine Job Work",
          description:
            "Vertical machining center work for milling, drilling, and complex multi-axis features. Ideal for parts requiring precise surface finishing.",
          longDescription:
            "Our VMC job work service covers a wide range of milling, drilling, and tapping operations on vertical machining centres. These rigid, accurate machines are ideal for producing flat, prismatic, and multi-feature parts with excellent surface quality. From one-off tooling components to batch production of housings and plates, our VMCs deliver consistent results.",
          bullets: [
            "Milling, drilling, and tapping operations",
            "Complex multi-axis feature machining",
            "High-precision surface finishing",
          ],
          howItWorks: [
            { step: "Job Planning", description: "We review your part and plan the sequence of milling, drilling, and tapping operations." },
            { step: "Work Holding Setup", description: "Fixtures or vises are configured to securely hold the part for all required operations." },
            { step: "VMC Machining", description: "The machine runs the programmed operations — milling faces, drilling holes, and cutting features." },
            { step: "Deburring & Check", description: "Parts are deburred, cleaned, and dimensionally checked before delivery." },
          ],
        },
        {
          slug: "vmc-milling-drilling",
          title: "VMC Milling & Drilling",
          description:
            "Precision milling and drilling on VMC platforms for plates, blocks, housings, and structural components with tight hole-position accuracy.",
          longDescription:
            "When your parts need precisely positioned holes, milled pockets, or face-finished surfaces, our VMC milling and drilling service delivers. We machine plates, blocks, housings, and structural components with tight hole-position accuracy and consistent repeatability across batches. Ideal for mounting plates, base frames, and enclosure components.",
          bullets: [
            "Precision hole positioning",
            "Plates, blocks, and housing machining",
            "Consistent repeatability across batches",
          ],
          howItWorks: [
            { step: "Drawing Verification", description: "Hole positions, depths, and tolerances are confirmed against your drawing or model." },
            { step: "Datum Setup", description: "Work coordinates and datums are established to ensure positional accuracy across all features." },
            { step: "Milling & Drilling", description: "Faces are milled and holes are drilled, bored, or tapped in the programmed sequence." },
            { step: "Position Verification", description: "Hole positions and surface dimensions are measured and compared to specification." },
          ],
        },
        {
          slug: "vmc-complex-features",
          title: "VMC Complex Features",
          description:
            "Multi-axis VMC work for complex 3D contours, angular features, and multi-face machining in a single setup.",
          longDescription:
            "For parts that need 3D contours, angular features, or machining on multiple faces, our VMC complex features service reduces the number of setups and improves accuracy. By machining more features in a single clamping, we minimize cumulative positioning errors and shorten production time — particularly valuable for jigs, fixtures, and multi-feature housings.",
          bullets: [
            "3D contour and angular features",
            "Multi-face machining in one setup",
            "Reduced setup time and improved accuracy",
          ],
          howItWorks: [
            { step: "Feature Analysis", description: "We identify which features can be combined into fewer setups for better accuracy." },
            { step: "Multi-Face Programming", description: "Toolpaths are programmed to machine multiple faces and angles without re-clamping." },
            { step: "Precision Execution", description: "Complex contours and angular features are cut with controlled step-overs and tool changes." },
            { step: "Multi-Point Inspection", description: "All critical features are measured across faces to verify inter-feature relationships." },
          ],
        },
      ],
    },
    {
      category: "Lathe Machining Services",
      image: "/lathe-machining.png",
      description:
        "Turning, boring, and cylindrical machining on manual and CNC lathes for shafts, bushings, and rotational components.",
      services: [
        {
          slug: "lathe-machine-job-work",
          title: "Lathe Machine Job Work",
          description:
            "Turning, boring, and cylindrical machining on manual and CNC lathes. Reliable execution for shafts, bushings, and rotational components.",
          longDescription:
            "Our lathe job work covers the full range of turning operations — OD turning, boring, facing, grooving, threading, and parting — on both manual and CNC lathes. We handle shafts, bushings, spacers, sleeves, and any rotational component. Whether you need a single replacement part or a production run, our lathe shop delivers reliable results with realistic lead times.",
          bullets: [
            "Turning and boring operations",
            "Cylindrical and face machining",
            "Shafts, bushings, and rotational parts",
          ],
          howItWorks: [
            { step: "Specification Review", description: "Diameters, lengths, threads, and surface finish requirements are confirmed from your drawing." },
            { step: "Machine Selection", description: "We assign the job to the best-suited lathe — manual for flexibility, CNC for precision and volume." },
            { step: "Turning Operations", description: "The part is turned, bored, threaded, or grooved per the operation sequence." },
            { step: "Dimensional Check", description: "Diameters, runout, and thread gauges are checked before the part is released." },
          ],
        },
        {
          slug: "cnc-lathe-turning",
          title: "CNC Lathe Turning",
          description:
            "Programmed CNC lathe turning for high-precision cylindrical parts. Consistent quality and tight tolerances across production volumes.",
          longDescription:
            "Our CNC lathe turning service provides high-precision, programmed turning for cylindrical parts where consistency and tight tolerances are essential. Once the program is proven, every part in the batch matches the first — making this ideal for production runs of shafts, connectors, fittings, and similar rotational components with demanding dimensional requirements.",
          bullets: [
            "High-precision cylindrical turning",
            "Consistent quality in production runs",
            "Tight diameter and length tolerances",
          ],
          howItWorks: [
            { step: "Program Development", description: "CNC turning programs are written and simulated to verify toolpaths before cutting." },
            { step: "First Article", description: "A first-off part is machined and fully measured to validate the setup against your drawing." },
            { step: "Production Run", description: "Once approved, the batch runs with periodic in-process sampling for consistency." },
            { step: "Batch Inspection", description: "Statistical sampling and final inspection confirm the batch meets specification." },
          ],
        },
        {
          slug: "manual-lathe-work",
          title: "Manual Lathe Work",
          description:
            "Conventional lathe operations for one-off parts, repairs, and low-volume work where flexibility and quick turnaround matter.",
          longDescription:
            "Sometimes a skilled operator on a manual lathe is the fastest path to a finished part. Our manual lathe work is ideal for one-off repairs, replacement parts, urgent turnarounds, and low-volume jobs where the overhead of CNC programming isn't justified. Experienced machinists handle facing, turning, boring, threading, and knurling with hands-on precision.",
          bullets: [
            "One-off and repair work",
            "Low-volume flexible production",
            "Quick turnaround for urgent requirements",
          ],
          howItWorks: [
            { step: "Quick Assessment", description: "We review your part — often a sketch, sample, or verbal description is enough to start." },
            { step: "Manual Machining", description: "An experienced machinist sets up and turns the part using conventional lathe techniques." },
            { step: "Fit Check", description: "For repair or replacement work, we check the part against the mating component if available." },
            { step: "Fast Dispatch", description: "Finished parts are delivered quickly — same-day turnaround is possible for simple jobs." },
          ],
        },
      ],
    },
    {
      category: "General Job Work & Speciality",
      image: "/custom-parts.png",
      description:
        "Contract manufacturing, ring components, and custom precision parts under a single engagement model with clear scope.",
      services: [
        {
          slug: "general-job-work",
          title: "Job Work (General)",
          description:
            "Contract manufacturing and custom job work across agreed specifications. We handle diverse requirements under a single engagement model.",
          longDescription:
            "Our general job work service is designed for customers who need a reliable manufacturing partner without managing multiple vendors. We take on diverse machining requirements — across CNC, VMC, and lathe platforms — under a single engagement model with clear scope, agreed specifications, and a single point of contact. Ideal for OEMs and procurement teams who value simplicity and accountability.",
          bullets: [
            "Custom parts per customer specifications",
            "Flexible batch sizes — prototype to production",
            "Single point of contact for project coordination",
          ],
          howItWorks: [
            { step: "Scope Definition", description: "We agree on the parts list, specifications, materials, quantities, and delivery schedule." },
            { step: "Process Planning", description: "Each part is routed to the right machine and process based on its features and tolerances." },
            { step: "Execution", description: "Parts are manufactured per the agreed plan, with updates provided at milestones." },
            { step: "Delivery & Reporting", description: "Completed parts are inspected, packed, and delivered with any required documentation." },
          ],
        },
        {
          slug: "rings-ring-components",
          title: "Rings & Ring Components",
          description:
            "Ring-type components and related precision parts manufactured to specification. Custom dimensions and materials as per requirements.",
          longDescription:
            "We manufacture ring-type components — bearing races, spacer rings, retaining rings, sealing rings, and custom ring profiles — to your dimensional and material specifications. Whether you need a single prototype ring or a batch of hundreds, we machine them with consistent ID/OD tolerances, surface finish, and concentricity. Material options span mild steel, alloy steel, stainless, and brass.",
          bullets: [
            "Ring-type components to specification",
            "Custom dimensions and materials",
            "Consistent quality across batches",
          ],
          howItWorks: [
            { step: "Ring Specification", description: "ID, OD, thickness, material, and any special features (grooves, chamfers) are confirmed." },
            { step: "Bar or Tube Stock", description: "We source appropriate round stock or tube to minimize material waste and machining time." },
            { step: "Turning & Finishing", description: "Rings are turned to dimension, with any secondary features added as required." },
            { step: "Batch Consistency Check", description: "A sampling plan ensures every ring in the batch meets your dimensional requirements." },
          ],
        },
        {
          slug: "custom-precision-parts",
          title: "Custom Precision Parts",
          description:
            "Bespoke precision components machined to your drawings and tolerances. From simple brackets to complex multi-feature assemblies.",
          longDescription:
            "When off-the-shelf won't do, our custom precision parts service machines bespoke components exactly to your drawings and tolerances. From simple brackets and mounting plates to complex multi-feature assemblies requiring CNC milling, turning, and drilling, we manage the full manufacturing process. We can also assist with material sourcing if you need specific grades or certifications.",
          bullets: [
            "Machined to customer drawings",
            "Simple to complex geometries",
            "Material sourcing assistance available",
          ],
          howItWorks: [
            { step: "Drawing & DFM Review", description: "We review your drawings, flag any manufacturability concerns, and confirm the approach." },
            { step: "Material Procurement", description: "If needed, we source the specified material grade — or suggest alternatives for cost/lead-time." },
            { step: "Multi-Process Machining", description: "Parts are routed through CNC, VMC, or lathe operations as the geometry requires." },
            { step: "Final QC & Packing", description: "Every part is inspected, any required documentation is prepared, and parts are packed for shipment." },
          ],
        },
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

export type ServiceDetail =
  (typeof siteConfig.serviceCategories)[number]["services"][number];

export type ServiceCategory = (typeof siteConfig.serviceCategories)[number];

/** Look up a sub-service by slug, returning the service and its parent category. */
export function getServiceBySlug(slug: string) {
  for (const cat of siteConfig.serviceCategories) {
    const svc = cat.services.find((s) => s.slug === slug);
    if (svc) return { service: svc, category: cat };
  }
  return null;
}

/** All slugs for static generation. */
export function getAllServiceSlugs(): string[] {
  return siteConfig.serviceCategories.flatMap((cat) =>
    cat.services.map((s) => s.slug),
  );
}
