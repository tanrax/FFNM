
//===
// VARIABLES
//===
const EVENTS = ['is-click', 'is-scroll-up', 'is-scroll-down', 'is-hover', 'is-visible', 'is-not-visible'];
const FUNCTION_TREE = {
    'class': ['add', 'remove', 'toggle']
};
let elementsValidates = [];
let lastScrollTop = undefined;
