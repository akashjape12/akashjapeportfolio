function getProjectId() {
  return new URLSearchParams(window.location.search).get("id");
}

function renderCaseStudy() {
  const id = getProjectId();
  const project = window.PROJECTS.find(p => p.id === id);
  const root = document.getElementById("cs-root");

  if (!project) {
    root.appendChild(el("div", { class: "cs-empty" }, []))
      .textContent = "Project not found. Go back to the work section and pick a project.";
    return;
  }

  document.title = `${project.title} — Portfolio`;

  // header
  const headerInner = el("div", { class: "wrap" }, [
    el("a", { class: "back-link", href: "index.html#work" }, []),
    el("h1", {}, []),
    el("p", { class: "summary" }, [])
  ]);
  headerInner.querySelector(".back-link").textContent = "← Back to home";
  headerInner.querySelector("h1").textContent = project.title;
  headerInner.querySelector(".summary").textContent = project.description;

  const titleBlock = el("dl", { class: "cs-title-block" }, []);
  [["Material", project.material]]
    .forEach(([label, value]) => {
      const field = el("div", { class: "field" }, [el("dt", {}, []), el("dd", {}, [])]);
      field.querySelector("dt").textContent = label;
      field.querySelector("dd").textContent = value || "—";
      titleBlock.appendChild(field);
    });
  headerInner.appendChild(titleBlock);
  const header = el("div", { class: "cs-header" }, [headerInner]);

  // hero image (omitted entirely, not a placeholder, when heroImage is null)
  let hero = null;
  if (project.heroImage) {
    const heroImg = mediaEl(project.heroImage, project.title, "16:9");
    if (project.heroImagePosition) heroImg.style.objectPosition = project.heroImagePosition;
    hero = el("div", { class: "wrap" }, [el("div", { class: "cs-hero" }, [heroImg])]);
  }

  // content blocks
  const blocksWrap = el("div", { class: "wrap" }, []);
  (project.content || []).forEach(section => {
    const h2 = el("h2", {}, []); h2.textContent = section.heading;
    const p = el("div", { class: "body-text" }, []); p.innerHTML = section.body;
    const bodyChildren = [p];

    if (section.images && section.images.length) {
      const imgGrid = el(
        "div",
        { class: "cs-section-images" },
        section.images.map(img => mediaEl(img, section.heading, "4:3"))
      );
      bodyChildren.push(imgGrid);
    }

    const block = el("div", { class: "cs-block" }, [h2, el("div", { class: "body" }, bodyChildren)]);
    blocksWrap.appendChild(block);
  });

  // gallery
  if (project.gallery && project.gallery.some(g => g)) {
    const galleryWrap = el("div", { class: "cs-block" }, [
      (() => { const h2 = el("h2", {}, []); h2.textContent = "Gallery"; return h2; })(),
      el("div", { class: "body" }, [
        el("div", { class: "cs-gallery" }, project.gallery.map(g => mediaEl(g, project.title, "4:3")))
      ])
    ]);
    blocksWrap.appendChild(galleryWrap);
  }

  // prev / next nav
  const idx = window.PROJECTS.findIndex(p => p.id === id);
  const prev = window.PROJECTS[(idx - 1 + window.PROJECTS.length) % window.PROJECTS.length];
  const next = window.PROJECTS[(idx + 1) % window.PROJECTS.length];
  const nav = el("div", { class: "cs-nav wrap" }, [
    el("a", { href: `case-study.html?id=${encodeURIComponent(prev.id)}` }, []),
    el("a", { href: `case-study.html?id=${encodeURIComponent(next.id)}` }, [])
  ]);
  nav.children[0].textContent = `← ${prev.title}`;
  nav.children[1].textContent = `${next.title} →`;

  root.appendChild(header);
  if (hero) root.appendChild(hero);
  root.appendChild(blocksWrap);
  root.appendChild(nav);
}

document.addEventListener("DOMContentLoaded", renderCaseStudy);
