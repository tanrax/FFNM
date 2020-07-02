
//===
// VARIABLES
//===
const EVENTS = ['i-click', 'i-scroll-up', 'i-scroll-down', 'i-hover'];

//===
// FUNCTIONS
//===
function validateSyntax() {

    // Get every items from EVENTS

    // Check all event syntax
    return EVENTS.map((event) => {
        return R.map((element) => {
            console.log(element.getAttribute(event));
            return /^${event}/.test(element.getAttribute(event));
        }, document.querySelectorAll(`[${event}]`)).every(item => item);
    }).every(event => event);
}


//===
// LINTER
//===


//===
// INIT
//===
validateSyntax();
