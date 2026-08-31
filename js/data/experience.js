/**
 * EXPERIENCE DATA
 * ---------------------------------------------------------
 * One object per role. Order here = order shown on the page
 * (edit array order to reorder, e.g. most recent first).
 *
 * Nested "projects" are lighter-weight than the main case
 * studies — a title, short description, an "images" array
 * (zero or more photos — use [] or omit for none), and an
 * optional "skills" list (solutions/skills bullets shown next
 * to the images) — with no process detail. If a project done
 * at this job deserves a full case study instead, put it in
 * projects.js and just skip it here (or reference it however
 * you like in the copy).
 */

window.EXPERIENCE = [
  {
    id: "SharkNinja",
    company: "SharkNinja",
    logo: "assets/experience/sn/snlogo.jpeg", // <-- put logo image path/URL here, e.g. "assets/logos/sharkninja.png"
    role: "Product Development Engineering Intern, Advanced Development",
    dates: "May 2026 - August 2026",
    location: "Boston, MA",
    summary: "Product Design and Ideation for the Frozen Treats product line, focusing on new product conceptualization, user experience, testing, and cross-functional validation.",
    confidentiality: "Specific project details, designs, and outcomes are withheld under employer confidentiality agreements.", // <-- edit or set to null to omit this section
    projects: [
      { title: "Rotary Shaft Retention Mechanism", description: "Metal shaft simultaneously rotates and translates up and down. Designed a safe, reliable, and intuitive mechanism to secure shaft during operation and release it for maintenance and cleaning.", images: ["assets/experience/sn/blade diagram.png"], skills: ["Constraints: User-operated. Translate and rotate with the shaft. Dishwasher-safe.", "Solution: Developed four concept variants of a spring-loaded button mechanism operable with one hand.","Testing and Validation: User demos with laser-sintered prototypes, cross-functional testing with Product Integrity and Product Development teams."] },
      { title: "Safety Interlock for 3-Part Assembly", description: "Designed and prototyped a mechanical interlock to prevent operation if incorrectly assembled.", images: ["assets/experience/sn/interlock diag.png"], skills: ["Constraints: Must not add complexity to assembly process. Resilient to impact, water, and heat cycles. Poka-Yoked to a single orientation.", "Solution: Pin displaces and engages switch in only one orientation."] },
      { title: "New Product Ideation", description: "Developed a product pitch and proof-of-concept design for a novel countertop appliance.", images: ["assets/experience/sn/fruit.jpeg"], skills: ["POC design for a chamber withstanding both negative and positive pressure. Test stand evaluated for safety and seal.","Learned air-intensive cooking techniques with vacuum pumps, heating elements and cooling technology.","Desirability: Explored industrial technology and competitor products across commercial and household culinary settings.", "Viability: Assessed cost implications, and consumer demands.", "Feasibility: Evaluated technical constraints around user safety, regulatory requirements, and assembly complexity."] }
    ]
  },
  {
    id: "Qorvo",
    company: "Qorvo",
    logo: "assets/experience/qorvo/qorvologo.png", // <-- put logo image path/URL here
    role: "Process Engineering Intern",
    dates: "May 2025 - August 2025",
    location: "Richardson, TX",
    summary: "Root cause analysis, optimization, and new process development for semiconductor packaging fab. Took initiative to design shop tooling and organization according to 5S principles.",
    confidentiality: "Specific project details are withheld under employer confidentiality agreements.", // <-- edit or set to null to omit this section
    projects: [
      { title: "Epoxy Dispense Defect Investigation", description: "DoE-driven investigation of epoxy dispensing defects in an automated lid-attach packaging process.", images: ["assets/experience/qorvo/nordsonsyringes.jpg"], skills: ["Isolated root cause as needle geometry.", "Reduced defect occurrence by 96%."] },
      { title: "Epoxy Dispense Process Automation", description: "Developed an automated process to replace manual epoxy application for scalable production.", images: ["assets/experience/qorvo/qfnchip.jpg"], skills: ["Conducted stakeholder studies to understand current shop process.", "Validated process equivalence using cross-sectioning, optical measurement, and JEDEC MSL testing."] },
      { title: "5S Tooling: Wafer Tray Storage", description: "Designed centralized wafer tray storage to universally store wafer trays of varying sizes. Reduced friction to locate trays for die-attach processes, thus improving throughput.", images: ["assets/experience/qorvo/shelf.jpeg"], skills: ["Minimized Cost: Exclusively ESD-compliant thermoplastics (additively manufactured) and off-the-shelf components.", "Iterated design several times with iterative stakeholder feedback."] }
    ]
  }
];
