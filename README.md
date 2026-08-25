# Portfolio Site

A static portfolio site — no build step, no framework. Content lives in
plain JS data files so you can add/edit projects without touching layout
code.

## Structure

```
index.html              Home page (hero, work grid, experience, misc, about)
case-study.html          One template, reused for every project via ?id=
css/style.css             All styling
js/helpers.js             Shared render helpers
js/render-home.js         Builds the home page from the data files
js/render-case-study.js   Builds a case study page from projects.js
js/data/projects.js       Your 5 (or more) case studies — EDIT THIS
js/data/experience.js     Your 2 (or more) work experiences — EDIT THIS
js/data/misc.js           Miscellaneous / product-only items — EDIT THIS
assets/                   Put your images here (projects/, experience/, misc/)
```

## Adding or editing content

You will almost never need to touch the `.html` or `.css` files. Just edit
the three files in `js/data/`:

- **New case study** → copy one of the objects in `projects.js`, paste it as
  a new entry, change `id` to something unique, fill in the fields. It
  automatically appears as a new card on the home page and gets its own
  page at `case-study.html?id=your-new-id`.
- **New experience project** → find the right company object in
  `experience.js`, add an entry to its `projects` array.
- **New misc item** → add an entry to `misc.js`.
- **Reorder anything** → just reorder the array entries; display order
  follows array order.

Each data file has comments at the top explaining every field.

## Adding images

Drop image files into `assets/projects/`, `assets/experience/`, or
`assets/misc/` (subfolders per project if that's cleaner for you), then
point the relevant field at the path, e.g.:

```js
thumbnail: "assets/projects/project-one/thumb.jpg",
```

Until you add a real path (leave it `null`), that spot shows a dashed
placeholder block so you can see where images are needed.

## Previewing locally

No build tools needed — just open `index.html` in a browser. If images
don't load due to browser file:// restrictions, run a tiny local server
from this folder instead:

```
python3 -m http.server 8080
```

then visit `http://localhost:8080`.

## Publishing to GitHub Pages

1. Create a new repo on GitHub — name it `yourusername.github.io` if you
   want it at the root domain, or anything else for a project subpath.
2. From this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/REPO_NAME.git
   git push -u origin main
   ```
3. On GitHub, go to the repo's **Settings → Pages**, set source to the
   `main` branch, root folder, and save.
4. Your site will be live at `https://yourusername.github.io` (or
   `https://yourusername.github.io/REPO_NAME` for a project repo) within
   a minute or two.

From then on, any `git push` updates the live site automatically.
