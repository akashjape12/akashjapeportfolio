/**
 * MISC DATA
 * ---------------------------------------------------------
 * Lightweight items — product only, no process detail. Add as
 * many as you like; the grid reflows automatically. "link" is
 * optional (leave null if there's nothing to click through to).
 *
 * MISC_CATEGORIES drives the "isolate by process" dropdown
 * above the grid. To add a new manufacturing process, just add
 * its label to this array — the dropdown picks it up
 * automatically. Each item's "process" field must match one of
 * these labels exactly to be included in that filter.
 */

window.MISC_CATEGORIES = ["FDM", "Woodworking", "Laser Cut"];

window.MISC = [
  { title: "Modular Chessboard", image: "assets/misc/chess.jpeg", link: null, caption: "Modular chess set designed for portability", process: "FDM" },
  { title: "Wine Screw-Driver", image: "assets/misc/wine.jpeg", link: null, caption: "Wine Screw-Driver", process: "FDM" },
  { title: "Oak Stool", image: "assets/misc/stool.jpeg", link: null, caption: "White Oak stool stained with Walnut", process: "Woodworking" },
  { title: "Customizable Office Sign", image: "assets/misc/sign.jpeg", link: null, caption: "Customizable signage for university office", process: "Laser Cut" },
  { title: "Lamp Dimmer", image: "assets/misc/lampdim.jpg", link: null, caption: "Removable lamp dimmer leveraging visual character of FDM infill", process: "FDM" },
  { title: "End-Grain Cutting Board", image: "assets/misc/board.jpeg", link: null, caption: "Walnut and Cherry end-grain cutting board", process: "Woodworking" },
  { title: "Backlit Lithophane Stand", image: "assets/misc/lithophaneon.jpeg", link: null, caption: "Laser-cut stand to display a lithophane", process: "Laser Cut" },
  { title: "Scooter Lock", image: "assets/misc/scooter.jpg", link: null, caption: "A mount for securing a U-shaped steel lock to the scooter handlebars.", process: "FDM" },
  { title: "Crane Sculpture", image: "assets/misc/crane.jpeg", link: null, caption: "Laser-cut sculpture of an origami crane", process: "Laser Cut" },
  { title: "Record Stand", image: "assets/misc/recordstand.jpeg", link: null, caption: "Tabletop vinyl record display", process: "Laser Cut" },
  { title: "Sustainable Spool Storage", image: "assets/misc/spool.jpeg", link: null, caption: "Workshop storage repurposing old filament spools", process: "FDM" },
];
