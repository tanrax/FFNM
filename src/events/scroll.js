
//===
// FUNCTIONS
//===

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

