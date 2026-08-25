/**
 * PROJECTS DATA
 * ---------------------------------------------------------
 * One object per case study. This array drives both the
 * card grid on the home page AND the individual case-study
 * pages (case-study.html?id=...). Order here = order shown
 * on the home page (edit the array order to reorder cards).
 *
 * FIELDS
 *   id         - unique url-safe slug, used in the link
 *                e.g. case-study.html?id=THIS_VALUE
 *   number     - drawing/reference number shown in the title
 *                block, e.g. "DWG-01". Purely cosmetic, not
 *                a ranking.
 *   title      - project name
 *   year       - year or year range, e.g. "2024" or "2023–24"
 *   role       - your role on the project
 *   material   - key materials / medium, comma separated
 *   summary    - 1-2 sentence description, shown on the card
 *                and at the top of the case study page
 *   thumbnail  - path to card image, or null for a placeholder
 *   heroImage  - path to large image at top of case study, or null
 *   content    - array of free-form sections. Each section is
 *                { heading, body }. Add/remove/rename sections
 *                per project — there's no fixed structure, so
 *                use whatever headings make sense for that
 *                project (NOT required to be process stages).
 *   gallery    - array of image paths (or null placeholders)
 *                shown in a grid near the bottom of the page
 */

window.PROJECTS = [
  {
    id: "project-one",
    number: "DWG-01",
    title: "Project Title One",
    year: "2024",
    role: "Lead Designer",
    material: "TBD",
    summary: "One to two sentence summary of what this project is and the core problem it addressed.",
    thumbnail: null,
    heroImage: null,
    content: [
      { heading: "Overview", body: "Replace with the project overview — what it is, who it was for, why it exists." },
      { heading: "Approach", body: "Replace with how you approached the problem." },
      { heading: "Outcome", body: "Replace with what shipped or was produced, and the result." }
    ],
    gallery: [null, null, null, null]
  },
  {
    id: "project-two",
    number: "DWG-02",
    title: "Project Title Two",
    year: "2024",
    role: "Designer",
    material: "TBD",
    summary: "One to two sentence summary of what this project is and the core problem it addressed.",
    thumbnail: null,
    heroImage: null,
    content: [
      { heading: "Overview", body: "Replace with the project overview." },
      { heading: "Approach", body: "Replace with how you approached the problem." },
      { heading: "Outcome", body: "Replace with what shipped or was produced, and the result." }
    ],
    gallery: [null, null, null, null]
  },
  {
    id: "project-three",
    number: "DWG-03",
    title: "Project Title Three",
    year: "2023",
    role: "Designer",
    material: "TBD",
    summary: "One to two sentence summary of what this project is and the core problem it addressed.",
    thumbnail: null,
    heroImage: null,
    content: [
      { heading: "Overview", body: "Replace with the project overview." },
      { heading: "Approach", body: "Replace with how you approached the problem." },
      { heading: "Outcome", body: "Replace with what shipped or was produced, and the result." }
    ],
    gallery: [null, null, null, null]
  },
  {
    id: "project-four",
    number: "DWG-04",
    title: "Project Title Four",
    year: "2023",
    role: "Designer",
    material: "TBD",
    summary: "One to two sentence summary of what this project is and the core problem it addressed.",
    thumbnail: null,
    heroImage: null,
    content: [
      { heading: "Overview", body: "Replace with the project overview." },
      { heading: "Approach", body: "Replace with how you approached the problem." },
      { heading: "Outcome", body: "Replace with what shipped or was produced, and the result." }
    ],
    gallery: [null, null, null, null]
  },
  {
    id: "project-five",
    number: "DWG-05",
    title: "Project Title Five",
    year: "2022",
    role: "Designer",
    material: "TBD",
    summary: "One to two sentence summary of what this project is and the core problem it addressed.",
    thumbnail: null,
    heroImage: null,
    content: [
      { heading: "Overview", body: "Replace with the project overview." },
      { heading: "Approach", body: "Replace with how you approached the problem." },
      { heading: "Outcome", body: "Replace with what shipped or was produced, and the result." }
    ],
    gallery: [null, null, null, null]
  }
];
