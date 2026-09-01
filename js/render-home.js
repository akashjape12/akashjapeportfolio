// ---------- WORK GRID ----------
function renderProjectCard(p) {
  const thumb = el("div", { class: "thumb" }, [mediaEl(p.thumbnail, p.title, "4:3")]);

  const titleBlock = el("dl", { class: "title-block" }, []);
  const fields = [
    ["Material", p.material]
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
function renderExperienceCard(x) {
  const logo = el("div", { class: "exp-logo" }, [mediaEl(x.logo, `${x.company} logo`)]);
  const nameGroup = el("div", {}, [
    el("h3", {}, []),
    el("div", { class: "exp-role" }, []),
    el("div", { class: "exp-dates" }, [])
  ]);
  const titleRow = el("div", { class: "exp-head-left" }, [logo, nameGroup]);

  nameGroup.querySelector("h3").textContent = x.company;
  nameGroup.querySelector(".exp-role").textContent = x.role;
  nameGroup.querySelector(".exp-dates").textContent = x.dates;

  const body = el("div", { class: "card-body" }, [
    titleRow,
    el("p", { class: "summary" }, [])
  ]);
  body.querySelector(".summary").textContent = x.summary;

  const cardChildren = [];
  if (x.thumbnail) {
    cardChildren.push(el("div", { class: "thumb" }, [mediaEl(x.thumbnail, `${x.company} thumbnail`, "4:3")]));
  }
  cardChildren.push(body);

  return el("a", { class: "project-card", href: `experience.html?id=${encodeURIComponent(x.id)}` }, cardChildren);
}

function renderExperience() {
  const wrap = document.getElementById("experience-list");
  if (!wrap) return;
  window.EXPERIENCE.forEach(x => wrap.appendChild(renderExperienceCard(x)));
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

function renderMiscGrid(process) {
  const grid = document.getElementById("misc-grid");
  if (!grid) return;
  grid.innerHTML = "";
  const items = process === "all" ? window.MISC : window.MISC.filter(m => m.process === process);
  items.forEach(m => grid.appendChild(renderMiscItem(m)));
}

function renderMisc() {
  const grid = document.getElementById("misc-grid");
  if (!grid) return;

  const select = document.getElementById("misc-filter");
  if (select) {
    const allOption = el("option", { value: "all" }, []);
    allOption.textContent = "All Processes";
    select.appendChild(allOption);

    (window.MISC_CATEGORIES || []).forEach(cat => {
      const option = el("option", { value: cat }, []);
      option.textContent = cat;
      select.appendChild(option);
    });

    select.addEventListener("change", () => renderMiscGrid(select.value));
  }

  renderMiscGrid(select ? select.value : "all");
}

document.addEventListener("DOMContentLoaded", () => {
  renderWork();
  renderExperience();
  renderMisc();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
