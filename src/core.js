document.addEventListener('DOMContentLoaded', () => {

    //===
    // VARIABLES
    //===
    const EVENTS = ['i-click', 'i-scroll-up', 'i-scroll-down'];
    const FUNCTION_TREE = {
        'class': ['add', 'remove', 'toggle']
    };
    let elementsValidates = [];

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
                        return RegExp(`^${key}:${method}\\('\\w+', *'[#,.,a-zA-Z]\\w*'\\)$`).test(element.getAttribute(event));
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
     * Method add events click
     * return void
     */
    function addEventClick() {
        let eventClick = 'i-click';
        return [...document.querySelectorAll(`[${eventClick}]`)].forEach((element) => {
            let params = splitParams(element, eventClick);
            switch(params.functionParent) {
                case 'class':
                    [...document.querySelectorAll(params.target)].forEach((item) => {
                        element.addEventListener('click', () => {
                            switch(params.functionChild) {
                                case 'add':
                                    item.classList.add(params.value);
                                    break;
                                case 'remove':
                                    item.classList.remove(params.value);
                                    break;
                                case 'toggle':
                                    item.classList.toggle(params.value);
                                    break;
                            }
                        });
                    });
                break;
            }
        });
    }

    /**
     * Method return params
     * return JSON - {'functionParent': '', 'functionChild': '', 'value': '', 'target': ''}
     * example - i-click="class:add('show', '#menu')"
     * return {'functionParent': 'class', 'functionChild': 'add', 'value': 'show', 'target': '#menu'}
     */
    function splitParams(element, attribute) {
        let params = element.getAttribute(attribute);
        let functionParent = RegExp(`^(\\w+):`).exec(params)[1];
        let functionChild = RegExp(`:(\\w+)\\(`).exec(params)[1];
        let value = RegExp(`\\(\'(\\w+)\',`).exec(params)[1];
        let target = RegExp(`, *\'([#,.,a-zA-Z]\\w*)\'\\)`).exec(params)[1];
        return {'functionParent': functionParent, 'functionChild': functionChild, 'value': value, 'target': target};
    }


    //===
    // INIT
    //===
    validateSyntax();
    addEventClick();
});
