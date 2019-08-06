document.addEventListener("DOMContentLoaded", function () {
    //My JS starts past this point.

    //Global HTML Grab
    const folder = document.querySelectorAll(".folder");
    const folioList = document.querySelectorAll(".folioList");
    const skillsSection  = document.querySelectorAll(".skillsDiv");
    const itemDisplayDiv = document.querySelectorAll(".folioDisplay");
    const contactName = document.querySelectorAll(".nameBox");
    const contactEmail = document.querySelectorAll(".emailBox");
    const contactMessage = document.querySelectorAll(".messageBox");
    const submitBtn = document.querySelectorAll(".submitBtn");

    //Global Page States
    let backFoldersOpen = false;
    let mailSent = false;

    // Sounds array
    const sounds = ['./assets/sounds/paper1.mp3', './assets/sounds/paper2.mp3', './assets/sounds/paper3.mp3', './assets/sounds/paper4.mp3', './assets/sounds/paper5.mp3', ]

    // Dynamically create the portfolio list in the portfolio folder
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

    // Dynamically create the skill list in the biography folder
    function populateSkills() {
        for (skill in skills) {
            const skillsDiv = elemByClass(skillsSection);
            const skillAnchor = document.createElement('a');
            skillAnchor.setAttribute('onclick', 'event.stopPropagation()');
            skillAnchor.setAttribute('href', skills[skill].link);
            skillAnchor.setAttribute('target', '_blank');
            skillAnchor.setAttribute('rel', 'noopener noreferrer');
            const listClass = skills[skill].listClass;
            addClass(skillAnchor, 'skillItem');
            addClass(skillAnchor, `${listClass}`);
            const skillItem = document.createElement('img');
            skillItem.setAttribute('src', skills[skill].pic);
            skillItem.setAttribute('alt', `${skills[skill].skill} Logo`);
            addClass(skillItem, 'skillPic');
            const skillTitle = document.createElement('h2');
            addClass(skillTitle, 'skillName');
            skillTitle.append(`${skills[skill].skill}`);
            skillAnchor.append(skillTitle);
            skillAnchor.prepend(skillItem);
            skillsDiv.append(skillAnchor);
        }
    }

    function swapFolder(folder) {
        //Establish a variable that will hold the specific element that is clicked.
        let thisElement;

        //Define the thisElement variable as the clicked folder, even if the cover was clicked instead.

        if (hasClass(folder.srcElement, "folderCover")) {
            thisElement = folder.srcElement.parentElement
        } else if (hasClass(folder.srcElement, "folder")) {
            thisElement = folder.srcElement
        } else if (!hasClass(folder.srcElement, "folder")) {
            thisElement = folder.srcElement.closest('.folder')
        }

        //Establish a variable to hold this folder's cover element.
        const childrenEle = thisElement.children[1];

        // If this folder is already selected and open, deselect it and close it.
        if (hasClass(thisElement, "selectFolder")) {
            const allaudiotags = document.querySelectorAll("audio");
            if (allaudiotags.length > 0) {
                allaudiotags.forEach(audio => {
                    audio.remove();
                });
            }
            const paper = new Sound(sounds[Math.floor(Math.random() * sounds.length)])
            paper.play();
            removeClass(thisElement, "selectFolder");
            if (hasClass(thisElement, "frontFolder")) {
                removeClass(thisElement, "frontZ");
            }
            if (hasClass(thisElement, "presentFolder")) {
                removeClass(thisElement, "presentFolder");
                if (hasClass(thisElement, "middleFolder")) {
                    addClass(thisElement, "replaceFolder");
                } else if (hasClass(thisElement, "backFolder")) {
                    addClass(thisElement, "replaceBackFolder");
                }
                backFoldersOpen = false;
            }
            if (hasClass(childrenEle, "openFolder")) {
                removeClass(childrenEle, "openFolder");
                addClass(thisElement, "closedFolder")
                addClass(childrenEle, "closeFolder");
            }
        } else {
            // If this folder has not already been selected, find the other folder that's open and close it
            const allFolders = document.querySelectorAll(".folder");
            const allaudiotags = document.querySelectorAll("audio");
            if (allaudiotags.length > 0) {
                allaudiotags.forEach(audio => {
                    audio.remove();
                });
            }
            const paper = new Sound(sounds[Math.floor(Math.random() * sounds.length)])
            paper.play();
            //Put all of the folders through the checkIfOpen function
            funcOnClass(allFolders, checkIfOpen)
            // The selectedClass function will do this function for each folder.
            function checkIfOpen(arr) {
                //Establish the children elements (the folder cover) of this folder.
                const children = arr.children[1];
                //If this folder is not selected, select it and open it.
                if (!hasClass(arr, "selectFolder")) {
                    addClass(thisElement, "selectFolder");
                    if (!hasClass(thisElement, "frontFolder") && backFoldersOpen === false) {
                        addClass(thisElement, "presentFolder");
                        if (hasClass(thisElement, "replaceFolder") || hasClass(thisElement, "replaceBackFolder")) {
                            removeClass(thisElement, "replaceFolder");
                            removeClass(thisElement, "replaceBackFolder");
                        }
                        backFoldersOpen = true;
                    } else if (hasClass(thisElement, "frontFolder") && backFoldersOpen === true) {
                        addClass(thisElement, "presentFolder");
                        setTimeout(function () {
                            removeClass(thisElement, "presentFolder");
                        }, 600)
                        if (hasClass(thisElement, "replaceFolder")) {
                            removeClass(thisElement, "replaceFolder");
                        }
                        backFoldersOpen = false;
                    };
                    if (hasClass(thisElement, "frontFolder")) {
                        addClass(thisElement, "frontZ");
                    }
                    removeClass(thisElement, "closedFolder");
                    addClass(childrenEle, "openFolder");
                    removeClass(childrenEle, "closeFolder");
                }
                //Close any other open folders.
                else if (hasClass(arr, "selectFolder") && thisElement !== arr) {
                    removeClass(arr, "selectFolder")
                    if (hasClass(arr, "frontFolder")) {
                        removeClass(arr, "frontZ");
                    }
                    if (hasClass(children, "openFolder")) {
                        removeClass(children, "openFolder");
                        addClass(arr, "closedFolder")
                        addClass(children, "closeFolder");
                    }
                    addClass(arr, "closedFolder");
                    if (hasClass(arr, "presentFolder")) {
                        removeClass(arr, "presentFolder");
                        if (!hasClass(arr, "frontFolder")) {
                            backFoldersOpen = false;
                        };
                        if (hasClass(arr, "backFolder")) {
                            setTimeout(function () {
                                addClass(arr, "replaceBackFolder");
                            }, 500);
                        } else {
                            setTimeout(function () {
                                addClass(arr, "replaceFolder");
                            }, 500);
                        }
                    }
                    removeClass(children, "openFolder")
                    addClass(children, "closeFolder");
                }
            }
        }
    }

    function displayFolioItem() {
        const displayDiv = elemByClass(itemDisplayDiv);
        while (displayDiv.firstChild) displayDiv.removeChild(displayDiv.firstChild);
        for (project in portfolio) {
            if (hasClass(this, portfolio[project].listClass)) {
                const itemTitleEl = document.createElement('h3');
                itemTitleEl.append(`${portfolio[project].title}`);
                addClass(itemTitleEl, 'folioItemTitle');
                displayDiv.append(itemTitleEl);
                if (portfolio[project].pic !== null) {
                    const itemPic = document.createElement('img');
                    itemPic.setAttribute('src', `${portfolio[project].pic}`);
                    addClass(itemPic, 'folioPic');
                    displayDiv.append(itemPic);
                }
                if (portfolio[project].description !== null && portfolio[project].description !== '') {
                    const itemDesc = document.createElement('p');
                    addClass(itemDesc, 'descriptionText');
                    itemDesc.append(`${portfolio[project].description}`);
                    displayDiv.append(itemDesc);
                }
                if (portfolio[project].videoWalkthrough) {
                    const itemVidLink = document.createElement('a');
                    itemVidLink.setAttribute('href', `${portfolio[project].videoWalkthrough}`);
                    itemVidLink.setAttribute('onclick', 'event.stopPropagation()');
                    itemVidLink.setAttribute('target', '_blank');
                    if (portfolio[project].deployed !== null && portfolio[project].deployed !== '') {
                        addClass(itemVidLink, 'vidDiv');
                    } else {
                        addClass(itemVidLink, 'vidDivDep')
                    };
                    addClass(itemVidLink, 'paperLink');
                    const itemIcon = document.createElement('i');
                    addClass(itemIcon, 'fab');
                    addClass(itemIcon, 'fa-youtube');
                    const itemWalk = document.createElement('p');
                    addClass(itemWalk, 'youtubeText');

                    itemWalk.append('Walkthrough');
                    itemVidLink.append(itemIcon);
                    itemVidLink.append(itemWalk);
                    displayDiv.append(itemVidLink);
                }
                if (portfolio[project].deployed !== null && portfolio[project].deployed !== '') {
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
                if (portfolio[project].repo) {
                    const itemRepo = document.createElement('a');
                    itemRepo.setAttribute('href', `${portfolio[project].repo}`);
                    itemRepo.setAttribute('onclick', 'event.stopPropagation()');
                    itemRepo.setAttribute('target', '_blank');
                    addClass(itemRepo, 'repoDiv');
                    const itemRepoIcon = document.createElement('i');
                    addClass(itemRepoIcon, 'fab');
                    addClass(itemRepoIcon, 'fa-github');
                    addClass(itemRepoIcon, 'repoLink');
                    addClass(itemRepoIcon, 'paperLink');
                    itemRepo.append(itemRepoIcon);
                    displayDiv.append(itemRepo);
                }
            }
        }
    }

    function sendMessage(event) {
        if(!mailSent){
            event.preventDefault();
            mailSent = true;

            const contactInfo = {
                name: elemByClass(contactName).value,
                email: elemByClass(contactEmail).value,
                message: elemByClass(contactMessage).value,
            };

            axios.post('/message', contactInfo)
                .then(response => {
                    if (response.data) {
                        if (response.data.success === true) {
                            elemByClass(contactMessage).value = '';
                            elemByClass(contactMessage).placeholder = 'Thank you for your message! I will get back to you as soon as possible.';
                        }
                    } else {
                        elemByClass(contactMessage).value = '';
                        elemByClass(contactMessage).placeholder = 'It looks like there is a problem at the moment. I\'m working on fixing it, and we should be up and running again soon. Thank you for your patience!';
                    }
                })
                .catch(err => q(err));
        } else {
            alert("You've already sent a message today! Please try again later.");
        }        
    };

    populatePortfolio();
    populateSkills();

    //Click Events
    clickClass(folder, swapFolder);
    clickClass(submitBtn, sendMessage);

    //My JS Ends beyond this point.
});