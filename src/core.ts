
//===
// VARIABLES
//===
enum EVENTS {'i-click', 'i-scroll-up', 'i-scroll-down', 'i-hover'}

//===
// FUNCTIONS
//===
function validateSyntax(): boolean {

    // Get every items from EVENTS
    let eventsKeys: string[] = R.filter(key => !isNaN(Number(EVENTS[key])), Object.keys(EVENTS));

    // Check all event syntax
    return eventsKeys.map((event) => {
        return R.map((element) => {
            console.log(element.getAttribute(event))
            return /^${event}/.test(element.getAttribute(event))
        }, document.querySelectorAll(`[${event}]`)).every(item => item)
    }).every(event => event)
}


//===
// LINTER
//===


//===
// INIT
//===
validateSyntax()
