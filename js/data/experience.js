/**
 * EXPERIENCE DATA
 * ---------------------------------------------------------
 * One object per role. Order here = order shown on the page
 * (edit array order to reorder, e.g. most recent first).
 *
 * Optional "heroImage" on a role: shown to the left of that
 * role's summary paragraph. Omit or leave unset for no image —
 * the summary then renders full-width as usual.
 *
 * Optional "thumbnail" on a role: shown atop that role's card
 * on the home page (same treatment as the work/case-study
 * cards). Omit or leave null for a text-only card.
 *
 * Nested "projects" are lighter-weight than the main case
 * studies — a title, an optional "skills" list (short skill/tool
 * words shown as a row of boxes under the title — omit or leave
 * empty for none), a short description, an "images" array (zero
 * or more photos — use [] or omit for none), and an optional
 * "bullets" list (Constraints/Solution/Testing-style bullets
 * shown next to the images) — with no process detail. If a
 * project done at this job deserves a full case study instead,
 * put it in projects.js and just skip it here (or reference it
 * however you like in the copy).
 */

window.EXPERIENCE = [
  {
    id: "SharkNinja",
    company: "SharkNinja",
    logo: "assets/experience/sn/snlogo.jpeg", // <-- put logo image path/URL here, e.g. "assets/logos/sharkninja.png"
    heroImage: "assets/experience/sn/creami.jpeg", // <-- optional image path shown left of the summary; leave null for none
    thumbnail: "assets/experience/sn/creami.jpeg", // <-- optional image path shown atop this role's home-page card; leave null for none
    role: "Product Design Engineering Intern, Advanced Development",
    dates: "May 2026 - August 2026",
    location: "Needham, MA",
    summary: "Product Design and Ideation for the Frozen Treats product line. Focused on user experience, industrial design, early-stage prototyping, and new concept ideation.",
    confidentiality: "Specific project details, designs, and outcomes are withheld under employer confidentiality agreements.", // <-- edit or set to null to omit this section
    projects: [
      { title: "Rotary Shaft Retention Mechanism - P1 Concept Path", description: "Metal shaft simultaneously rotates and translates vertically to process semi-solid substrate. Designed a safe, reliable, and intuitive mechanism to secure the shaft during operation and release it for maintenance and cleaning.", images: ["assets/experience/sn/bladestages.png"], skills: ["Solidworks", "DFM", "Rapid Prototyping", "Multi-part Assembly", "Human-Centered Design"], bullets: ["<b>Constraints:</b><ul><li>User-operated</li><li>Translate and rotate with the shaft</li><li>Dishwasher-safe</li></ul>", "<b>Solution:</b><ul><li>Developed four concept variants of a spring-loaded button mechanism operable with one hand</li><li>Concepts varied by UX touchpoints, assembly complexity, and ergonomics</li><li>Assembly designed to mitigate ingress and biological growth</li></ul>","<b>Testing and Validation:</b><ul><li>User demos with laser-sintered prototypes</li><li>Cross-functional testing with Product Integrity and Product Development teams</li></ul>"] },
      { title: "Safety Interlock for 3-Part Assembly - P2 Concept Path", description: "Designed and prototyped a mechanical interlock to prevent operation if incorrectly assembled.", images: ["assets/experience/sn/interlock diag.png"], skills: ["Solidworks", "DFM", "Rapid Prototyping", "Multi-part Assembly", "Human-Centered Design"], bullets: ["<b>Constraints:</b><ul><li>Must not add complexity to assembly UX</li><li>Resilient to water and heat cycles in dishwasher</li></ul>", "<b>Solution:</b><ul><li>Pin displaces and engages switch in only one orientation</li><li>Pin housing features drainage to allow crossflow during cleaning</li><li>Bayonet features modified to poka-yoke assembly process to a single orientation for pin engagement</li></ul>", "<b>Testing and Validation:</b><ul><li>Conducted user demos to gain UX feedback on assembly process</li><li>Conducted wash trials, documented regions of excessive ingress, and iterated drainage design to target those regions</li></ul>"] },
      { title: "New Product Ideation", description: "Owned product pitch and proof-of-concept design for a novel countertop appliance.", images: ["assets/experience/sn/fruit.jpeg"], skills: ["Concept Ideation", "Pneumatic System Design", "Rapid Prototyping", "Pitch Development", "Market Research"], bullets: ["POC design for a chamber withstanding pressures between 0 and 17 bar.","Learned pneumatic cooking techniques with vacuum pumps, heating elements, and cooling technology.","<b>Desirability:</b><ul><li>Explored industrial technology and competitor products across commercial and household culinary settings</li></ul>", "<b>Viability:</b><ul><li>Assessed implications of cost drivers including pumps, valves, and seals</li><li>Researched sales trends for similar consumer technologies</li></ul>", "<b>Feasibility:</b><ul><li>POC: Glass vacuum chamber with steel clamp to withstand pressures between 0 and 17 bar</li></ul>"] }
    ]
  },
  {
    id: "Qorvo",
    company: "Qorvo",
    logo: "assets/experience/qorvo/qorvologo.png", // <-- put logo image path/URL here
    heroImage: null, // <-- optional image path shown left of the summary; leave null for none
    thumbnail: "assets/experience/qorvo/qfnchip.jpg", // <-- optional image path shown atop this role's home-page card; leave null for none
    role: "Process Engineering Intern",
    dates: "May 2025 - August 2025",
    location: "Richardson, TX",
    summary: "Root cause analysis, optimization, and new process development for semiconductor packaging fab. Took initiative to design shop tooling and organization according to 5S principles.",
    confidentiality: "Specific project details are withheld under employer confidentiality agreements.", // <-- edit or set to null to omit this section
    projects: [
      { title: "5S Tooling: Wafer Tray Storage", description: "Designed centralized wafer tray storage to universally store wafer trays of varying sizes.", images: ["assets/experience/qorvo/shelf.jpeg"], skills: ["Solidworks", "DFM", "Rapid Prototyping", "Multi-part Assembly", "Human-Centered Design"], bullets: ["Minimized Cost: Exclusively ESD-compliant thermoplastics (additively manufactured) and off-the-shelf components.", "Incorporated stakeholder feedback and anthropometric data to ensure optimal UX touchpoints.", "Reduced friction to locate trays for die-attach processes, thus improving throughput."] },
      { title: "Epoxy Dispense Defect Investigation", description: "DoE-driven investigation of epoxy dispensing defects in an automated lid-attach packaging process.", images: ["assets/experience/qorvo/nordsonsyringes.jpg"], skills: [], /* <-- optional skill/tool tag words, e.g. ["CAD", "DFM"] */ bullets: ["Isolated root cause as needle geometry.", "Reduced defect occurrence by 96%."] },
      { title: "Epoxy Dispense Process Automation", description: "Developed an automated process to replace manual epoxy application for scalable production.", images: ["assets/experience/qorvo/qfnchip.jpg"], skills: [], /* <-- optional skill/tool tag words, e.g. ["CAD", "DFM"] */ bullets: ["Conducted stakeholder studies to understand current shop process.", "Validated process equivalence using cross-sectioning, optical measurement, and JEDEC MSL testing."] }
    ]
  }
];
