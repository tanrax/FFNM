document.addEventListener('DOMContentLoaded', () => {

    //===
    // VARIABLES
    //===
    const EVENTS = ['i-click', 'i-scroll-up', 'i-scroll-down'];
    const FUNCTION_TREE = {
        'class': ['add', 'remove', 'toggle']
    };
    let elementsValidates = [];
    let lastScrollTop = undefined;

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
     * Method return params
     * return JSON - {'functionParent': '', 'functionChild': '', 'value': '', 'target': ''}
     * example - i-click="class:add('show', '#menu')"
     * return {'functionParent': 'class', 'functionChild': 'add', 'value': 'show', 'target': '#menu'}
     */
    function splitParams(element, attribute) {
        let params = element.getAttribute(attribute);
        let functionParent = RegExp(`^(\\w+):`).exec(params)[1];
        let functionChild = RegExp(`:(\\w+)\\(`).exec(params)[1];
        let resultValue = RegExp(`\\(\'(\\w+)\',`).exec(params);
        let value = resultValue !== null ? resultValue.exec(params)[1] : undefined;
        let resultTarget = RegExp(`, *\'([#,.,a-zA-Z]\\w*)\'\\)`).exec(params);
        let target = resultTarget !== null ? resultTarget.exec(params)[1] : undefined;
        return {'functionParent': functionParent, 'functionChild': functionChild, 'value': value, 'target': target};
    }

    /**
     * Method add events i-click
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
     * Method add events i-scroll
     * return void
     */
    function addEventScroll() {
        let eventScrollDown = 'i-scroll-down';
        let eventScrollUp = 'i-scroll-up';
        window.addEventListener("scroll", () => {
            let posScroll = window.pageYOffset || document.documentElement.scrollTop;
            // Scroll down
            [...document.querySelectorAll(`[${eventScrollDown}]`)].forEach((element) => {
                if (posScroll > lastScrollTop) {
                    let params = splitParams(element, eventScrollDown);
                    switch(params.functionParent) {
                    case 'class':
                        switch(params.functionChild) {
                        case 'add':
                            element.classList.add(params.value);
                            break;
                        case 'remove':
                            element.classList.remove(params.value);
                            break;
                        }
                        break;
                    }
                }
            });
            // Scroll up
            [...document.querySelectorAll(`[${eventScrollUp}]`)].forEach((element) => {
                if (posScroll <= lastScrollTop) {
                    let params = splitParams(element, eventScrollUp);
                    switch(params.functionParent) {
                    case 'class':
                        switch(params.functionChild) {
                        case 'add':
                            element.classList.add(params.value);
                            break;
                        case 'remove':
                            element.classList.remove(params.value);
                            break;
                        }
                        break;
                    }
                }
            });
            lastScrollTop = posScroll <= 0 ? 0 : posScroll; // For Mobile or negative scrolling
        }, false);
    }

    //===
    // INIT
    //===
    validateSyntax();
    addEventClick();
    addEventScroll();
});
