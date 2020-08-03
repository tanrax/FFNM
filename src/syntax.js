
//===
// FUNCTIONS
//===

/**
 * Method that validates syntax and reports.
 * return - Bool
 */
function validateSyntax() {
    elementsValidates = [];
    // Check all event syntax
    return EVENTS.map((event) => {
        // Check element FUNCTION_TREE
        return [...document.querySelectorAll(`[${event}]`)].map((element) => {
            // Check KEY FUNCTION_TREE
            let checked = Object.keys(FUNCTION_TREE).map((key) => {
                // Check METHODS FUNCTION_TREE
                return FUNCTION_TREE[key].map((method) => {
                    return RegExp(`^${key}:${method}\\('.+'(, ?'[.#i\\w][_-\\w0-9]+')?\\)$`).test(element.getAttribute(event));
                }).some(method => method);
            }).every(key => key);
            if(checked) {
                // Save element validate
                elementsValidates.push(element);
            } else {
                // Notify error
                console.error('FFNM: Bad syntax');
                console.error(element);
            }
            return checked;
        }).every(item => item);
    }).every(event => event);
}


/**
 * Method return params
 * return JSON - {'functionParent': '', 'functionChild': '', 'value': '', 'target': ''}
 * example - is-click="class:add('show', '#menu')"
 * return {'functionParent': 'class', 'functionChild': 'add', 'value': 'show', 'target': '#menu'}
 */
function splitParams(element, attribute) {
    let params = element.getAttribute(attribute);
    let functionParent = RegExp("^(\\w+):").exec(params)[1];
    let functionChild = RegExp(":(\\w+)\\(").exec(params)[1];
    let value = RegExp("\\(\'(\\w[_-\\w0-9]+)\',?").exec(params)[1];
    let resultTarget = RegExp(", ?\'([.#i\\w][_-\\w0-9]+)\'\\)");
    let target = resultTarget.exec(params) !== null ? resultTarget.exec(params)[1] : undefined;
    return {'functionParent': functionParent, 'functionChild': functionChild, 'value': value, 'target': target};
}

/**
 * Method that returns all validated elements filtered by an event
 * return Array
 */
function getElementsValidatesByEvent(nameEvent) {
    return [...elementsValidates].filter(element => {
        return element.hasAttribute(nameEvent);
    });
}
