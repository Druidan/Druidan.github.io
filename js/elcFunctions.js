//This function will grab an element by its class, but only the last one in the array of elements by class. Most useful when replacing html IDs with Classes.
function elemByClass (selectedClass) {
    let result;
    selectedClass.forEach(element => {
        result = element
    });
    return result;
};

function funcOnClass (querySeleced, func) {
    querySeleced.forEach(element => {
        func(element)
    });
}

function clickClass (querySeleced, func) {
    if (typeof querySeleced === 'object' && querySeleced !== null){
        if(querySeleced.length >= 1){
            querySeleced.forEach(element => {
                element.addEventListener('click', func)
            });
        } else if (objectLength(querySeleced) === 0) {
            querySeleced.addEventListener('click', func)
        } else if (querySeleced === null) {
            say ("The element is null.");
        } else if (querySeleced === undefined) {
            say ("The element is undefined.");
        } else {
            say ("Something is wrong here!")
        };
    };
};

function hasClass (el, className) {
    if (el.classList) 
        return el.classList.contains(className)
    // For browsers that don't support the classList property - 
    else
        return !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`))
}
// ----------------

function addClass (el, className) {
    if (el.classList)
        el.classList.add(className)
    // For browsers that don't support the classList property - 
    else if (!hasClass(el, className)) el.className += ' ' + className // For browsers that don't support the classList property - 
}
// ----------------

function removeClass (el, className) {
    if (el.classList)
        el.classList.remove(className)
    // For browsers that don't support the classList property - 
    else if (hasClass(el, className)) { 
        const reg = new RegExp(`(\\s|^)${className}(\\s|$)`)
        el.className = el.className.replace(reg, ' ')
    }
}

function toggleClass (el, toggleClass) {
    if (el.classList) {
        say(el.classList)
        el.classList.toggle(toggleClass);
        say(el.classList)
    // For browsers that don't support the classList property - 
    } else {
        const elClasses = el.className.split(" ");
        const i = elClasses.indexOf(toggleClass);
        if (i >= 0) 
            elClasses.splice(i, 1);
        else 
            elClasses.push(toggleClass);
            el.className = classes.join(" "); 
    }};

// Check Type and log of a variable.
function q (check) {
    console.log(`Q: This ${typeof check} has a value of:`);
    console.log(check)
}

// Console log as a message.
function say (log) {
    console.log(`Message: ${log}`);
}

// Console log in a table.
function table (log) {
    console.table(log);
}

// Returns the length of an object.
function objectLength (object) {
    return Object.keys(object).length;
}

// Turns an integer into a string with commas.
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// From an array, create a new array of strings that match a provided string. 
function matchesFromArr(StringToMatch, arr) {
    return arr.filter(item => {
        const regex = new RegExp(StringToMatch, 'gi');
        return item.match(regex)
    });
}

// Create a new array minus the item at a provided index.
function sliceIndex(array, index) {
    return newArr = [
        ...array.slice(0, index),
        ...array.slice(index +1)
    ];
};