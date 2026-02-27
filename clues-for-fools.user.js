// ==UserScript==
// @name         Clues for Fools
// @namespace    https://github.com/nilox94/
// @version      0.1.3
// @description  Speedrun Clues by Sam with high-visibility highlights that make leads impossible to miss.
// @author       nilox94
// @match        https://cluesbysam.com/
// @icon         https://cluesbysam.com/images/favicon-64x64.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(`
/* Layout */
#root {
  display: flex;
  flex-direction: column;
}

#grid {
  margin-top: 0;
}

/*
#root > .card-grid-container {
  margin-bottom: 0;
}
 */

#root > .bottom {
  width: unset;
  padding: 0 0 5px 0;
}

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

/* Hints */
.card.profession-referenced .profession {
  color: var(--tag-color-1);
}

.card.name-referenced .name {
  color: var(--tag-color-1);
  opacity: .8;
}

p.hint.flavour {
  font-style: var(--non-clue-font-style);
  color: var(--text-muted);
}
  `)
})();
