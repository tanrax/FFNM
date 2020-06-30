//===
// VARIABLES
//===
enum EVENTS {'i-click', 'i-scroll-up', 'i-scroll-down', 'i-hover'}

//===
// FUNCTIONS
//===
function validateSyntax(): boolean {

    // Check every event
    let eventsKeys = Object.keys(EVENTS).filter(key => !isNaN(Number(EVENTS[key])));
    eventsKeys.forEach((event) => {
        let ddd = document.querySelector(`[${event}]`).length
        console.log(ddd)
    })
    return true
}


//===
// LINTER
//===


//===
// INIT
//===
validateSyntax()
