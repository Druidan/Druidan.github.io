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
const folioList = document.querySelectorAll(".folioList");
const itemDisplayDiv = document.querySelectorAll(".folioDisplay");



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
        funcOnClass(allFolders, checkIfOpen)
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

function populatePortfolio() {
    for (project in portfolio) {
        const folioListDiv = elemByClass(folioList);
        const listClass = portfolio[project].listClass;
        const listItem = document.createElement('li');
        addClass(listItem, 'folioItem');
        addClass(listItem, `${listClass}`);
        listItem.setAttribute('onclick', 'event.stopPropagation()')
        clickClass(listItem, displayFolioItem);
        listItem.append(`${portfolio[project].title}`);
        folioListDiv.prepend(listItem);
    }
}

function displayFolioItem() {
    const displayDiv = elemByClass(itemDisplayDiv);
    while (displayDiv.firstChild) displayDiv.removeChild(displayDiv.firstChild);
    for(project in portfolio) {
        if (hasClass(this, portfolio[project].listClass)){
            const itemTitleEl = document.createElement('h3');
            itemTitleEl.append(`${portfolio[project].title}`)
            displayDiv.append(itemTitleEl);
            if(portfolio[project].pic !== null){
                const itemPic = document.createElement('img');
                itemPic.setAttribute('src', `${portfolio[project].pic}`);
                addClass(itemPic, 'folioPic');
                displayDiv.append(itemPic);
            }
            if(portfolio[project].description !== null || portfolio[project].description !== ''){
                const itemDesc = document.createElement('p');
                addClass(itemDesc, 'descriptionText');
                itemDesc.append(`${portfolio[project].description}`);
                displayDiv.append(itemDesc);
            }
            if(portfolio[project].deployed !== null || portfolio[project].deployed !== ''){
                const deployedLink = document.createElement('a');
                deployedLink.setAttribute('href', `${portfolio[project].deployed}`);
                deployedLink.setAttribute('onclick', 'event.stopPropagation()');
                deployedLink.setAttribute('target', '_blank');
                addClass(deployedLink, 'deployedLink');
                const deployedButton = document.createElement('button');
                addClass(deployedButton, 'deployedButton');
                deployedButton.append('Visit Site');
                deployedLink.append(deployedButton);
                displayDiv.append(deployedLink);
            }
        } 
    }
}

populatePortfolio();

//Click Events
clickClass(folder, swapFolder);


//My JS Ends beyond this point.
});