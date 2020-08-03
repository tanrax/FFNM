
//===
// FUNCTIONS
//===

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
