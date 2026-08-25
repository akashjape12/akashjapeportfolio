// ---------- WORK GRID ----------
function renderProjectCard(p) {
  const thumb = el("div", { class: "thumb" }, [mediaEl(p.thumbnail, p.title, "4:3")]);

  const titleBlock = el("dl", { class: "title-block" }, []);
  const fields = [
    ["No.", p.number],
    ["Year", p.year],
    ["Material", p.material],
    ["Role", p.role]
  ];
  fields.forEach(([label, value]) => {
    const field = el("div", { class: "field" }, [
      el("dt", {}, []),
      el("dd", {}, [])
    ]);
    field.querySelector("dt").textContent = label;
    field.querySelector("dd").textContent = value || "—";
    titleBlock.appendChild(field);
  });

  const body = el("div", { class: "card-body" }, [
    el("h3", {}, []),
    el("p", { class: "summary" }, []),
    titleBlock
  ]);
  body.querySelector("h3").textContent = p.title;
  body.querySelector(".summary").textContent = p.summary;

  const card = el("a", { class: "project-card", href: `case-study.html?id=${encodeURIComponent(p.id)}` }, [thumb, body]);
  return card;
}

function renderWork() {
  const grid = document.getElementById("work-grid");
  if (!grid) return;
  window.PROJECTS.forEach(p => grid.appendChild(renderProjectCard(p)));
  const count = document.getElementById("work-count");
  if (count) count.textContent = `${window.PROJECTS.length} projects`;
}

// ---------- EXPERIENCE ----------
function renderExperienceProject(ep) {
  const thumb = el("div", { class: "thumb" }, [mediaEl(ep.image, ep.title, "4:3")]);
  const h4 = el("h4", {}, []); h4.textContent = ep.title;
  const p = el("p", {}, []); p.textContent = ep.description;
  return el("div", { class: "exp-project" }, [thumb, h4, p]);
}

function renderExperienceEntry(x) {
  const head = el("div", { class: "exp-head" }, [
    el("div", {}, [
      el("h3", {}, []),
      el("div", { class: "exp-role" }, [])
    ]),
    el("div", { class: "exp-dates" }, [])
  ]);
  head.querySelector("h3").textContent = x.company;
  head.querySelector(".exp-role").textContent = `${x.role} · ${x.location}`;
  head.querySelector(".exp-dates").textContent = x.dates;

  const summary = el("p", { class: "exp-summary" }, []);
  summary.textContent = x.summary;

  const projectsWrap = el("div", { class: "exp-projects" }, (x.projects || []).map(renderExperienceProject));

  return el("div", { class: "experience-entry" }, [head, summary, projectsWrap]);
}

function renderExperience() {
  const wrap = document.getElementById("experience-list");
  if (!wrap) return;
  window.EXPERIENCE.forEach(x => wrap.appendChild(renderExperienceEntry(x)));
}

// ---------- MISC ----------
function renderMiscItem(m) {
  const thumb = el("div", { class: "thumb" }, [mediaEl(m.image, m.title, "1:1")]);
  const cap = el("div", { class: "cap" }, []);
  cap.textContent = m.caption || m.title;
  const tag = m.link ? "a" : "div";
  const attrs = m.link ? { class: "misc-item", href: m.link, target: "_blank", rel: "noopener" } : { class: "misc-item" };
  return el(tag, attrs, [thumb, cap]);
}

function renderMisc() {
  const grid = document.getElementById("misc-grid");
  if (!grid) return;
  window.MISC.forEach(m => grid.appendChild(renderMiscItem(m)));
}

document.addEventListener("DOMContentLoaded", () => {
  renderWork();
  renderExperience();
  renderMisc();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
