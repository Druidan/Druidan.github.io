
// This file holds utility functions we can use if we do vanilla js to do similar things to jQuery. If we use jQuery we can delete this file.

function selectedClass (querySeleced, func) {
    querySeleced.forEach(element => {
        func(element)
    });
}

function clickClass (querySeleced, func) {
    if (typeof querySeleced === 'object' && querySeleced !== null){
        if(querySeleced.length === 1){
            querySeleced.forEach(element => {
                element.addEventListener('click', func)
            });
        } else if(querySeleced.length > 1){
            querySeleced.forEach(element => {
                element.addEventListener('click', func)
            })
        } else if (querySeleced === null) {
            say ("The element is Null.");
        } else {
            say ("Something is wrong here!")
        };
    };
};

function hasClass (el, className) {
    if (el.classList)
        return el.classList.contains(className)
    else
        return !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`))
}
// ----------------

function addClass (el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className)) el.className += ' ' + className
}
// ----------------

function removeClass (el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        const reg = new RegExp(`(\\s|^)${className}(\\s|$)`)
        el.className = el.className.replace(reg, ' ')
    }
}

function q (check) {
    console.log(`Q: This ${typeof check} has a value of:`);
    console.log(check)
}

function say (log) {
    console.log(`Message: ${log}`);
}

function objectLength (object) {
    return Object.keys(object).length;
}