
//===
// FUNCTIONS
//===

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

