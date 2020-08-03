
//===
// FUNCTIONS
//===

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

