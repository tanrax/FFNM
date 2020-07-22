document.addEventListener('DOMContentLoaded', () => {

    //===
    // VARIABLES
    //===
    const EVENTS = ['is-click', 'is-scroll-up', 'is-scroll-down', 'is-hover', 'is-view', 'is-visible', 'is-not-visible'];
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

    /**
     * Method add events is-click
     * return void
     */
    function addEventClick() {
        let eventClick = 'is-click';
        return getElementsValidatesByEvent(eventClick).forEach((element) => {
            let params = splitParams(element, eventClick);
            switch(params.functionParent) {
                case 'class':
                [...document.querySelectorAll(params.target)].concat(params.target === undefined ? element : undefined).forEach((item) => {
                    if (item !== undefined) {
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
                    }
                    });
                break;
            }
        });
    }

    /**
     * Method add events is-scroll
     * return void
     */
    function addEventScroll() {
        let eventScrollDown = 'is-scroll-down';
        let eventScrollUp = 'is-scroll-up';
        let elementsDown = getElementsValidatesByEvent(eventScrollDown);
        let elementsUp = getElementsValidatesByEvent(eventScrollUp);
        window.addEventListener("scroll", () => {
            let posScroll = window.pageYOffset || document.documentElement.scrollTop;
            // Scroll down
            elementsDown.forEach((element) => {
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
            elementsUp.forEach((element) => {
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


    /**
     * Method add events is-hover
     * return void
     */
    function addEventHover() {
        let eventHover = 'is-hover';
        return getElementsValidatesByEvent(eventHover).forEach((element) => {
            let params = splitParams(element, eventHover);
            switch(params.functionParent) {
                case 'class':
                [...document.querySelectorAll(params.target)].concat(params.target === undefined ? element : undefined).forEach((item) => {
                    if (item !== undefined) {
                        // Enter
                        switch(params.functionChild) {
                            case 'add':
                                // Enter
                                element.addEventListener('mouseenter', () => {
                                    item.classList.add(params.value);
                                });
                                // Out
                                element.addEventListener('mouseout', () => {
                                    item.classList.remove(params.value);
                                });
                                break;
                            case 'remove':
                                // Enter
                                element.addEventListener('mouseenter', () => {
                                    item.classList.remove(params.value);
                                });
                                // Out
                                element.addEventListener('mouseout', () => {
                                    item.classList.add(params.value);
                                });
                                break;
                            case 'toggle':
                                // Enter
                                element.addEventListener('mouseenter', () => {
                                    item.classList.toggle(params.value);
                                });
                                // Out
                                element.addEventListener('mouseout', () => {
                                    item.classList.toggle(params.value);
                                });
                                break;
                        }
                    }
                });
                break;
            }
       });
    }

    /**
     * Method that checks if an element is visible in the viewport
     * return bool
     */
    function isInViewport (element) {
	      let distance = element.getBoundingClientRect();
	      return distance.top >= 0 &&
		           distance.left >= 0 &&
		           distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		           distance.right <= (window.innerWidth || document.documentElement.clientWidth);
    };

    /**
     * Method that manages the events is-visible and is-not-visible
     * return void
     */
    function addEventVisible() {
        let eventVisible = 'is-visible';
        let eventNotVisible = 'is-not-visible';
        let elementsVisibles = getElementsValidatesByEvent(eventVisible);
        let elementsNotVisibles = getElementsValidatesByEvent(eventNotVisible);
        window.addEventListener("scroll", () => {
            // Visible
            elementsVisibles.forEach((element) => {
                if (isInViewport(element)) {
                    let params = splitParams(element, eventVisible);
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
            // Not visible
            elementsNotVisibles.forEach((element) => {
                if (!isInViewport(element)) {
                    let params = splitParams(element, eventNotVisible);
                    switch(params.functionParent) {
                    case 'class':
                        switch(params.functionChild) {
                        case 'add':
                            element.classList.add(params.value);
                            console.log('date')
                            break;
                        case 'remove':
                            element.classList.remove(params.value);
                            break;
                        }
                        break;
                    }
                }
            });
        }, false);
    }

    //===
    // INIT
    //===
    validateSyntax();
    addEventClick();
    addEventScroll();
    addEventHover();
    addEventVisible();
});
