function getExperienceId() {
  return new URLSearchParams(window.location.search).get("id");
}

function renderExperienceProject(ep) {
  const h2 = el("h2", {}, []); h2.textContent = ep.title;
  const blockChildren = [h2];

  if (ep.skills && ep.skills.length) {
    const skillsRow = el("div", { class: "exp-skills" }, ep.skills.map(t => {
      const tag = el("span", { class: "exp-skill" }, []);
      tag.textContent = t;
      return tag;
    }));
    blockChildren.push(skillsRow);
  }

  const bodyText = el("div", { class: "body-text" }, []); bodyText.textContent = ep.description;
  blockChildren.push(bodyText);

  const imgGrid = el(
    "div",
    { class: "cs-section-images" },
    (ep.images || []).map(img => mediaEl(img, ep.title, "4:3"))
  );

  let media = imgGrid;
  if (ep.bullets && ep.bullets.length) {
    const bulletsList = el("ul", { class: "exp-bullets" }, ep.bullets.map(s => {
      const li = el("li", {}, []);
      li.innerHTML = s;
      return li;
    }));
    media = el("div", { class: "exp-media-row" }, [imgGrid, bulletsList]);
  }
  blockChildren.push(media);

  return el("div", { class: "cs-block" }, blockChildren);
}

function renderConfidentialityBlock(text) {
  const noteBlock = el("dl", { class: "cs-title-block exp-confidentiality" }, [
    el("div", { class: "field" }, [
      el("dt", {}, []),
      el("dd", {}, [])
    ])
  ]);
  noteBlock.querySelector("dt").textContent = "Confidentiality";
  noteBlock.querySelector("dd").textContent = text;
  return noteBlock;
}

function renderExperienceEntry(x) {
  const logo = el("div", { class: "exp-logo" }, [mediaEl(x.logo, `${x.company} logo`)]);
  const headLeft = el("div", { class: "exp-head-left" }, [
    logo,
    el("div", {}, [
      el("h3", {}, []),
      el("div", { class: "exp-role" }, [])
    ])
  ]);
  const head = el("div", { class: "exp-head" }, [
    headLeft,
    el("div", { class: "exp-dates" }, [])
  ]);
  head.querySelector("h3").textContent = x.company;
  head.querySelector(".exp-role").textContent = `${x.role} · ${x.location}`;
  head.querySelector(".exp-dates").textContent = x.dates;

  const summary = el("p", { class: "exp-summary" }, []);
  summary.textContent = x.summary;

  const confidentialityBlock = x.confidentiality ? renderConfidentialityBlock(x.confidentiality) : null;

  let summaryBlock = summary;
  let confidentialityInRow = false;
  if (x.heroImage) {
    const heroImage = el("div", { class: "exp-hero-image" }, [mediaEl(x.heroImage, `${x.company} hero`)]);
    const textColChildren = [summary];
    if (confidentialityBlock) {
      textColChildren.push(confidentialityBlock);
      confidentialityInRow = true;
    }
    const textCol = el("div", { class: "exp-text-col" }, textColChildren);
    summaryBlock = el("div", { class: "exp-summary-row" }, [heroImage, textCol]);
  }

  const entryChildren = [head, summaryBlock];

  if (confidentialityBlock && !confidentialityInRow) {
    entryChildren.push(confidentialityBlock);
  }

  const projectsWrap = el("div", { class: "exp-projects" }, (x.projects || []).map(renderExperienceProject));
  entryChildren.push(projectsWrap);

  return el("div", { class: "experience-entry" }, entryChildren);
}

function renderExperiencePage() {
  const id = getExperienceId();
  const x = window.EXPERIENCE.find(e => e.id === id);
  const root = document.getElementById("exp-root");

  if (!x) {
    root.appendChild(el("div", { class: "cs-empty" }, []))
      .textContent = "Experience not found. Go back to the professional section and pick one.";
    return;
  }

  document.title = `${x.company} — Portfolio`;

  const backLink = el("a", { class: "back-link", href: "index.html#experience" }, []);
  backLink.textContent = "← Back to home";

  const wrap = el("div", { class: "wrap" }, [backLink, renderExperienceEntry(x)]);
  root.appendChild(wrap);
}

document.addEventListener("DOMContentLoaded", renderExperiencePage);
