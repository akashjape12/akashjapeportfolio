/**
 * EXPERIENCE DATA
 * ---------------------------------------------------------
 * One object per role. Order here = order shown on the page
 * (edit array order to reorder, e.g. most recent first).
 *
 * Nested "projects" are lighter-weight than the main case
 * studies — a title, short description, and one image, with
 * no process detail. If a project done at this job deserves
 * a full case study instead, put it in projects.js and just
 * skip it here (or reference it however you like in the copy).
 */

window.EXPERIENCE = [
  {
    id: "company-one",
    company: "Company Name One",
    role: "Job Title",
    dates: "2023 — Present",
    location: "City, State",
    summary: "One paragraph describing the role, team, and scope of responsibility.",
    projects: [
      { title: "Mini project A", description: "Short one to two sentence description.", image: null },
      { title: "Mini project B", description: "Short one to two sentence description.", image: null },
      { title: "Mini project C", description: "Short one to two sentence description.", image: null }
    ]
  },
  {
    id: "company-two",
    company: "Company Name Two",
    role: "Job Title",
    dates: "2021 — 2023",
    location: "City, State",
    summary: "One paragraph describing the role, team, and scope of responsibility.",
    projects: [
      { title: "Mini project A", description: "Short one to two sentence description.", image: null },
      { title: "Mini project B", description: "Short one to two sentence description.", image: null }
    ]
  }
];
