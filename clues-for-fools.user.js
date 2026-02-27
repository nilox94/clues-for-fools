// ==UserScript==
// @name         Clues for Fools
// @namespace    https://github.com/nilox94/
// @version      1.0.0
// @description  Speedrun Clues by Sam with high-visibility highlights that make leads impossible to miss.
// @author       nilox94
// @copyright    2026, Danilo Gómez
// @license      Apache-2.0
// @match        https://cluesbysam.com/
// @icon         https://cluesbysam.com/images/favicon-64x64.png
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(`
/* Theme */

body.theme-default.dark {
  --highlight-color: #ffcc00;
}

body.theme-default.light {
  --highlight-color: #333649;
}

body.theme-acc-1.dark {
  --highlight-color: #00d4ff;
}

body.theme-acc-1.light {
  --highlight-color: #4b0082;
}

/* Layout */

#root {
  display: flex;
  flex-direction: column;
}

#grid {
  margin-top: 0;
}

#root>.bottom {
  width: unset;
  padding: 0 0 5px 0;
}

/* Card Spacing */

.card {
  height: 100%;
  min-height: 118px;
}

@media (min-width: 537px) {
  .card {
    width: 8em;
    height: 7.75em;
  }

  .card-back p.hint:not(.flavour) {
    font-size: 12px;
  }
}

.card-back p.hint {
  padding: 0 5px;
}

/* References */

.card.name-referenced .name,
.card.profession-referenced .profession {
  color: var(--highlight-color);
  font-weight: bold;
  opacity: 1;
  letter-spacing: 0.5px;
}

body.dark .card.name-referenced .name,
body.dark .card.profession-referenced .profession {
  text-shadow: 0px 0px 5px var(--shadow-color);
}

/* Flavored Hints */

p.hint.flavour {
  color: var(--text-muted);
}
  `)
})();
