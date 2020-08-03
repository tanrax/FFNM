
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

    // Visible
    const onIntersectionVisible = (entries) => {
        entries.forEach((entry) => {
            let element = entry.target;
            if (entry.isIntersecting) {
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
    };
    const observerVisible = new IntersectionObserver(onIntersectionVisible);
    elementsVisibles.forEach((element) => {
        observerVisible.observe(element);
    });

    // Not visible
    const onIntersectionNotVisible = (entries) => {
        entries.forEach((entry) => {
            let element = entry.target;
            if (!entry.isIntersecting) {
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
    };

    const observerNotVisible = new IntersectionObserver(onIntersectionNotVisible);
    elementsNotVisibles.forEach((element) => {
        observerNotVisible.observe(element);
    });
}

