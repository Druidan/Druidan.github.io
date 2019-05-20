document.addEventListener("DOMContentLoaded", function() { 
    //My JS starts past this point.

//Global Page States
let aboutMeUp = false;
let portfolioUp = false;
let contactUp = false;

//Global Button Grab
const homeMenuBtn = document.querySelectorAll(".fa-home");
const featuresMenuBtn = document.querySelectorAll(".fa-angle-double-down");
const introSection = document.querySelectorAll(".introSection");
const portfolioBtn = document.querySelectorAll(".portfolioNavItem");
const portfolioHeader = document.querySelectorAll(".portfolioHeader");
const aboutBtn = document.querySelectorAll(".aboutNavItem");
const aboutSection = document.querySelectorAll(".aboutMeSection");
const contactBtn = document.querySelectorAll(".contactMeItem");
const contactSection = document.querySelectorAll(".contactMeSection");
const allPortfolioItems = document.querySelectorAll(".portfolioItemWrapper");
const header = document.querySelectorAll(".elcHeader");


const folder = document.querySelectorAll(".folder");

// clickClass(header, helloWorld);
clickClass(folder, swapFolder);

// function helloWorld(header) {
//     alert(`Hello World! ${header}`)
// }

function swapFolder(folder) {
    let thisElement;
    if(hasClass(folder.srcElement, "folderCover")) {
        thisElement = folder.srcElement.parentElement
    } else if(hasClass(folder.srcElement, "folder")){
        thisElement = folder.srcElement
    }
    const childrenEle = thisElement.children[1];

    // If this folder is already selected and open, deselect it and close it.
    if (hasClass(thisElement, "selectFolder")) {
        removeClass(thisElement, "selectFolder");
        if(hasClass(childrenEle, "openFolder")) {
            removeClass(childrenEle, "openFolder");
            addClass(thisElement, "closedFolder")
            addClass(childrenEle, "closeFolder");
        }
    } else {
        // If this folder has not already been selected, find the other folder that's open and close it
        const allFolders = document.querySelectorAll(".folder");
        //Put all of the folders through the checkIfOpen function
        selectedClass(allFolders, checkIfOpen)
        // The selectedClass function will do this function for each folder.
        function checkIfOpen(arr) {
            //Establish the children elements (the folder cover) of this folder.
            const children = arr.children[0];
            //If this folder is selected, remove the selectedFolder class to deselect it.
            if(hasClass(arr, "selectFolder")) {
                if(hasClass(arr, "selectFolder")){
                    removeClass(arr, "selectFolder");
                }
                // If this folder's cover is open, close it.
                if(hasClass(children, "openFolder")) {
                    removeClass(children, "openFolder");
                    addClass(arr, "closedFolder")
                    addClass(children, "closeFolder")
                }
            }
            else if(hasClass(arr, "folder")){
                addClass(thisElement, "selectFolder");
                removeClass(thisElement, "closedFolder");
                addClass(childrenEle, "openFolder");
                removeClass(childrenEle, "closeFolder");
            }
        }
    }
}


//My JS Ends beyond this point.
});