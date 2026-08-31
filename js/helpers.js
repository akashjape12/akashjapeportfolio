const VIDEO_EXTENSIONS = /\.(mp4|webm|mov|m4v)(\?.*)?$/i;

// Renders an <img> (or <video controls> for a video path) if a path is
// given, otherwise a styled placeholder block.
function mediaEl(path, alt, ratioLabel) {
  if (path) {
    if (VIDEO_EXTENSIONS.test(path)) {
      const video = document.createElement("video");
      video.src = path;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      if (alt) video.setAttribute("aria-label", alt);
      return video;
    }
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
