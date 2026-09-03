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
 *   title      - project name
 *   material   - key materials / medium, comma separated
 *   summary    - 1-2 sentence description, shown on the card
 *                and at the top of the case study page
 *   thumbnail  - path to card image, or null for a placeholder
 *   heroImage  - path to large image at top of case study, or null
 *   heroImagePosition - optional CSS object-position value (e.g.
 *                "center 30%" or "top") to shift which part of a
 *                cropped hero image is visible. Omit for centered.
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
    id: "cushionorganizer",
    title: "Cushioned Organizer",
    material: "PLA, Felt, Aluminum",
    summary: "Desktop piece for glasses and everyday items. Inspired by vintage jewelry box.",
    description: "While traveling in Ireland, I came across a vintage jewelry box featuring a cushioned top and a small drawer. I had never seen anything of the sort, and initially thought that the cushion could hold eyeglasses. The kind shop owner corrected my assumptions, but I left with inspiration nonetheless. The design below deconstructs the form of the jewelry box using an FDM printed frame, a sheet aluminum tray from MUJI, and red felt for the eyeglasses cushion.",
    thumbnail: "assets/projects/Cushioned Organizer/render.jpeg",
    heroImage: "assets/projects/Cushioned Organizer/render.jpeg",
    heroImagePosition: "center 46%", // e.g. "center 30%" to shift the crop (0% = top, 100% = bottom); leave null for centered
    content: [
      { heading: "Inspiration", body: "", images: ["assets/projects/Cushioned Organizer/inspiration.jpeg"] },
      { heading: "Next Steps", body: "<ul><li>Fabricate frame out of PLA and assemble with felt</li><li><b>Ideal Material:</b> Anodized aluminum in a charcoal shade</li></ul>", images: null },
    ],
    gallery: [null, null, null, null]
  },
  {
    id: "mdm2024",
    title: "2024 Medical Device Makeathon",
    material: "Medical Grade Silicone",
    summary: "Collaboratively developed novel speculum design for cervical procedures. Won 2nd place at a 2-day sprint makeathon.",
    description: "Competed at the 6th annual Medical Device Makeathon, where our team collaborated over 48 hours to solve a design challenge centered on women's health. Dividing tasks into research, design, prototyping, and presentation, we were able to deliver a thorough prototype and win 2nd place.",
    thumbnail: "assets/projects/mdm/mdmspec.png",
    heroImage: "assets/projects/mdm/mdmspec.png",
    heroImagePosition: null, // e.g. "center 30%" to shift the crop (0% = top, 100% = bottom); leave null for centered
    content: [
      { heading: "Presentation", body: '<a class="cs-link-box" href="assets/projects/mdm/MMM.pdf" download="MDM-2024-Presentation.pdf">View presentation (PDF)</a>' },
    ],
    gallery: [null, null, null, null]
  },
  {
    id: "mahjong",
    title: "Mahjong Bookshelf",
    material: "Walnut, Red Oak, Acrylic Paint, Mahjong Tiles",
    summary: "Bookshelf inspired by mahjong motifs and artwork.",
    description: "This project was inspired by a mahjong tile placed as a paperweight on my brunch bill one Sunday morning. I was captivated by the tile's form and refreshing green color, and wanted to see it in my own home. I designed a bookshelf that incorporates the tiles as a decorative element, taking advantage of both the icons and the backing color to offer unique views from every angle. The latticed walls are made of walnut strips inspired by kumiko joinery, and the base itself is red oak stained green. The base houses another mosaic of tiles which, although often hidden by books, will offer a pop of color when books are removed from the shelf. The render represents the icons as red dots for simplicity, but the final product aims to play with the variety of artworks featured across the 146 tiles of a standard set.",
    thumbnail: "assets/projects/mahjong shelf/render.jpeg",
    heroImage: "assets/projects/mahjong shelf/render.jpeg",
    heroImagePosition: null, // e.g. "center 30%" to shift the crop (0% = top, 100% = bottom); leave null for centered
    content: [
      { heading: "Initial Concept Sketch", body: "<ul><li>Hastily hashed out in the post-brunch food coma</li></ul>", images: ["assets/projects/mahjong shelf/sketch.jpeg"] },
      { heading: "Tiles", body: "", images: ["assets/projects/mahjong shelf/tile.jpg"] },
      { heading: "Next Steps", body: "<ul><li>Lattice construction with repeatable slats for accuracy and efficiency</li><li>Stain base block to closely resemble the tile's green hue, hex code #56862E</li></ul>", images: ["assets/projects/mahjong shelf/strips.PNG"]},
    ],
    gallery: [null, null, null, null]
  },
  {
    id: "lampstorage",
    title: "Lamp Storage Bin",
    material: "PETG",
    summary: "Storage solution for IKEA Lauters lamp.",
    description: "I have an IKEA Lauters lamp next to my bed. It is a beautiful piece of furniture, and provides a warm, glowing light for reading and relaxation. The only issue I had was that the wide base made it impossible to also have a nightstand. Tired of leaving my phone and belongings on a cardboard box on the floor, I designed a storage bin that mounts directly to the lamp's frame.",
    thumbnail: "assets/projects/lampbin/lampbin.png",
    heroImage: null,
    heroImagePosition: null, // e.g. "center 30%" to shift the crop (0% = top, 100% = bottom); leave null for centered
    content: [
      { heading: "Lauters Lamp", body: "", images: ["assets/projects/lampbin/lauters full.jpeg", "assets/projects/lampbin/lautersmount.jpeg"] },
      { heading: "Storage Bin", body: "<ul><li>Bin mounts on circular surface shown above.</li><li>3-part assembly: Each piece sits in the space between two legs.</li></ul>", images: ["assets/projects/lampbin/lampbin.png"] }
    ],
    gallery: [null, null, null, null]
  },
  {
    id: "modularvessel",
    title: "Modular Vessel",
    material: "PLA",
    summary: "System of collapsible rings that form a storage vessel of variable size. Intended for travel and the outdoors.",
    description: "The idea for this concept arose from a backpacking trip where I had to pack a bowl, drinking cup, and larger vessel in the same pack. Packing all three took too much space, and I wondered if there was a modular solution to allow for a variety of sizes. I aimed to take advantage of a tool that every hiker has: the carabiner. The idea was to have a modular system of N rings that would stack and expand to allow for 2^N size combinations. Much of the prototyping work on this has been regarding the fastening and expansion mechanisms, and the fluid storage remains in development.",
    thumbnail: "assets/projects/modcup/modcup_summary.jpg",
    heroImage: "assets/projects/modcup/modcup_summary.jpg",
    heroImagePosition: null, // e.g. "center 30%" to shift the crop (0% = top, 100% = bottom); leave null for centered
    content: [
      {
        heading: "Concept 1",
        body: "<ul><li>Solid rings with magnet connections at 90 degree intervals.</li><li>90 degree rotation of any ring allows for 1 cm of extended height.</li><li>Structurally unstable, assembly easily fell apart during use.</li></ul>",
        images: ["assets/projects/modcup/conc1.jpg"]
      },
      {
        heading: "Concept 2",
        body: "<ul><li>Greater degree of complexity: ball magnets travel along channels within each ring.</li><li>Double the number of magnets at each connection point to reduce 'wobbling' about the magnet.</li><li>Design Failures: Fluctuating attractive/repulsive forces as paired ball magnets rotate in channel, assembly challenge to install magnets.</li></ul>",
        images: ["assets/projects/modcup/conc2.jpg"]
      },
      {
        heading: "Concept 3",
        body: "<ul><li>Print-in-place part: Interlocked rings with internal bayonet travel path; rings assemble with magnets.</li><li>Design Failures: Internal supports difficult to remove without suffering damage to part; minimal shear across ring contact surfaces required to separate magnets.</li></ul>",
        images: ["assets/projects/modcup/conc3_mech.jpg", "assets/projects/modcup/conc3_supp.jpg", "assets/projects/modcup/conc3_damage.jpg", "assets/projects/modcup/demo video.mov"]
      },
      {
        heading: "Concept 4",
        body: "<ul><li>Improved on Concept 3.</li><li>Modified internal bayonet for stability and manufacturability.</li><li>Modified support structure for improved post-processing.</li><li>Added physical bosses to support shear across magnets.</li><li>Design Failures: Bosses around each magnet too thin to reliably print; get damaged easily.</li></ul>",
        images: ["assets/projects/modcup/conc4_mech.jpg", "assets/projects/modcup/conc4_supp.jpg", "assets/projects/modcup/con4_boss.jpg"]
      },
      {
        heading: "Concept 5",
        body: "<ul><li>Improved on Concept 4.</li><li>Thickened bosses for manufacturability and strength.</li><li><b>Next Steps:</b> Experiment with fabrics and flexible polymers to create inner sleeve for fluid retention.</li></ul>",
        images: ["assets/projects/modcup/conc5.jpg"]
      }
    ],
    gallery: [null, null, null, null]
  },
  {
    id: "modularbackpackmod",
    title: "Modular Backpack Storage System",
    material: "Aluminum, PETG",
    summary: "Universal storage solution for heavy items, fluid containers, and more.",
    description: "My backpack features a fabric loop system along one side instead of a bottle sleeve. While the loop system was efficient for clips and rings, I found it difficult to store larger items like bottles or tripods with stability. I developed a system that revolves around a single clip and allows any attachment to securely fasten to the side of the pack.",
    thumbnail: "assets/projects/backpackmod/model.jpeg",
    heroImage: null,
    heroImagePosition: null, // e.g. "center 30%" to shift the crop (0% = top, 100% = bottom); leave null for centered
    content: [
      { heading: "Core Design",
        body: "<ul><li>Aluminum clip hooks into two adjacent loops.</li><li>Wedge shape acts as adapter to allow any attachment to securely fasten to clip.</li></ul>",
        images: ["assets/projects/backpackmod/clipdemo.jpeg", "assets/projects/backpackmod/clipfull.jpeg","assets/projects/backpackmod/mod photo.png","assets/projects/backpackmod/clipandmod.jpeg"] },
      { heading: "Next Steps",
        body: "<ul><li>Attachment sits at an angle due to fabric flexibility. Will sew rigid board into inner bag lining for structural support.</li><li>Machine clip out of aluminum for durability and appearance.</li></ul>",
        images: ["assets/projects/backpackmod/model.jpeg"] }
    ],
    gallery: [null, null, null, null]
  },
];
