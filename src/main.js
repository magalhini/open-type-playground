/* jshint esversion:6 */
require('./styles/main.scss');

function toggleFeature(e) {
  let parent = closest(e.target, '.feature');
  let featureName = parent.getAttribute('data-type');
  let sample = parent.querySelector('.feature__sample');

  sample.classList.toggle(featureName);
}

/**
 * For each toggle, map it to toggleFeature()
 */

let toggles = getElements('input[type="checkbox"]');
toggles.forEach(toggle => addEventListener('change', toggleFeature));

// Kick off animation.
setTimeout(() => document.body.classList.add('ready'), 20);

/** Helpers **/
function closest (el, sel) {
  if (el.closest) return el.closest(sel);
  let matches = el.webkitMatchesSelector ? 'webkitMatchesSelector' : (el.msMatchesSelector ? 'msMatchesSelector' : 'matches');

  while (el) {
    if (el.nodeType === 1 && el[matches](sel)) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}

function getElements(sel) {
    return Array.prototype.slice.call(document.querySelectorAll(sel));
}
