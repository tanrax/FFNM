
//===
// FUNCTIONS
//===

/**
 * Method add events is-scroll
 * return void
 */
function addEventScroll() {
    const eventScrollDown = 'is-scroll-down';
    const eventScrollUp = 'is-scroll-up';
    const eventScrollTop = 'is-scroll-top';
    let elementsDown = getElementsValidatesByEvent(eventScrollDown);
    let elementsUp = getElementsValidatesByEvent(eventScrollUp);
    let elementsTop = getElementsValidatesByEvent(eventScrollTop);
    window.addEventListener("scroll", () => {

        let posScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Scroll down - is-scroll-down
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

        // Scroll up - is-scroll-up
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

        // Scroll top - is-scroll-top
        elementsTop.forEach((element) => {
            let params = splitParams(element, eventScrollTop);
            if (posScroll <= 0) {
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
            } else {
                switch(params.functionParent) {
                case 'class':
                    switch(params.functionChild) {
                    case 'add':
                        element.classList.remove(params.value);
                        break;
                    case 'remove':
                        element.classList.add(params.value);
                        break;
                    }
                    break;
                }
            }
        });
    }, false);
}

