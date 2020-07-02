
//===
// VARIABLES
//===
const EVENTS = ['i-click', 'i-view', 'i-scroll-up', 'i-scroll-down', 'i-hover'];
const FUNCTION_TREE = {
    'class': ['add', 'remove', 'toggle']
};

//===
// FUNCTIONS
//===
function validateSyntax() {

    // Get every items from EVENTS

    // Check all event syntax
    return EVENTS.map((event) => {
        // Check element FUNCTION_TREE
        return R.map((element) => {
            // Check KEY FUNCTION_TREE
            return R.map((key) => {
                // Check METHODS FUNCTION_TREE
                return R.map((method) => {
                    return RegExp(`^${key}:${method}\\('\\w+', *'[#,.,a-zA-Z]\\w*'\\)$`).test(element.getAttribute(event));
                }, FUNCTION_TREE[key]).some(method => method);
            }, Object.keys(FUNCTION_TREE)).every(key => key);
        }, document.querySelectorAll(`[${event}]`)).every(item => item);
    }).every(event => event);
}


//===
// LINTER
//===


//===
// INIT
//===
console.log("EStabien " + validateSyntax());
