// Renders an <img> if a path is given, otherwise a styled placeholder block.
function mediaEl(path, alt, ratioLabel) {
  if (path) {
    const img = document.createElement("img");
    img.src = path;
    img.alt = alt || "";
    img.loading = "lazy";
    return img;
  }
  const div = document.createElement("div");
  div.className = "img-placeholder";
  div.textContent = `ADD IMAGE${ratioLabel ? " — " + ratioLabel : ""}`;
  return div;
}

function el(tag, attrs, children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else node.setAttribute(k, v);
    }
  }
  (children || []).forEach(c => { if (c) node.appendChild(c); });
  return node;
}
