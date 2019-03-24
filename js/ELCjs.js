document.addEventListener("DOMContentLoaded", function() { 
    //My JS starts past this point.

//Global Page States
let introUp = true;
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
const linkedInBtn = document.querySelectorAll(".fa-linkedin");
const gitHubBtn = document.querySelectorAll(".fa-github");
const twitterBtn = document.querySelectorAll(".fa-twitter");
const faceBookBtn = document.querySelectorAll(".fa-facebook-square");
const resumeDownloadBtn = document.querySelectorAll(".downloadResume");
const contactBtn = document.querySelectorAll(".contactMeItem");
const contactSection = document.querySelectorAll(".contactMeSection");
// const contactSubmitBtn = document.querySelectorAll("");
const vgWordGuessGameBtn = document.querySelectorAll(".vgWGPic");
const swCombatGameBtn = document.querySelectorAll(".swCombat");
const whaleTriviaBtn = document.querySelectorAll(".whaleTrivia");
const rpsMultiBtn = document.querySelectorAll(".rpsPic");
const allPortfolioItems = document.querySelectorAll(".portfolioItemWrapper");

portfolioBtn.forEach(function(elm){ 
    elm.addEventListener('click', function(){
        if(!portfolioUp){
            portfolioHeader.forEach(function(pSection){
                removeClass(pSection, "buryIt")
            });
            allPortfolioItems.forEach( function(item){ 
                addClass(item, "pImgAnimate")
            });
            introSection.forEach(function(iSection){
                if(!hasClass(iSection, "buryIt")){
                    addClass(iSection, "buryIt")
                }
            });
            aboutSection.forEach(function(aSection){
                if(!hasClass(aSection, "buryIt")){
                    addClass(aSection, "buryIt")
                }
            });
            contactSection.forEach(function(cSection){
                if(!hasClass(cSection, "buryIt")){
                    addClass(cSection, "buryIt")
                }
            });
            portfolioUp = true;
            introUp = false;
            aboutMeUp = false;
            contactUp = false;
        }
    }, false);
});

homeMenuBtn.forEach(function(elm){ 
    elm.addEventListener('click', function(){
        //Do a thing
    }, false);
});

featuresMenuBtn.forEach(function(elm){ 
    elm.addEventListener('click', function(){
        //Do a thing
    }, false);
});

aboutBtn.forEach(function(elm){ 
    elm.addEventListener('click', function(){
        if(!aboutMeUp){
            aboutSection.forEach(function(aSection){
                    removeClass(aSection, "buryIt")
            });
            portfolioHeader.forEach(function(pSection){
                if(!hasClass(pSection, "buryIt")){
                    addClass(pSection, "buryIt")
                }
            });
            allPortfolioItems.forEach( function(item){ 
                if(!hasClass(item, "buryIt")){
                    removeClass(item, "pImgAnimate");
                }
            });
            introSection.forEach(function(iSection){
                if(!hasClass(iSection, "buryIt")){
                    addClass(iSection, "buryIt")
                }
            });
            contactSection.forEach(function(cSection){
                if(!hasClass(cSection, "buryIt")){
                    addClass(cSection, "buryIt")
                }
            });
            portfolioUp = false;
            introUp = false;
            aboutMeUp = true;
            contactUp = false;
        }
    }, false);
});

contactBtn.forEach(function(elm){ 
    elm.addEventListener('click', function(){
        if(!contactUp){
            contactSection.forEach(function(cSection){
                    removeClass(cSection, "buryIt")
            });
            portfolioHeader.forEach(function(pSection){
                if(!hasClass(pSection, "buryIt")){
                    addClass(pSection, "buryIt")
                }
            });
            allPortfolioItems.forEach( function(item){ 
                if(!hasClass(item, "buryIt")){
                    removeClass(item, "pImgAnimate");
                }
            });
            introSection.forEach(function(iSection){
                if(!hasClass(iSection, "buryIt")){
                    addClass(iSection, "buryIt")
                }
            });
            aboutSection.forEach(function(aSection){
                if(!hasClass(aSection, "buryIt")){
                    addClass(aSection, "buryIt")
                }
            });
            portfolioUp = false;
            introUp = false;
            aboutMeUp = false;
            contactUp = true;
        }
    }, false);
});

// contactSubmitBtn.forEach(function(elm){ 
//     elm.addEventListener('click', function(){
//         //Do a thing
//     }, false);
// });

//This beautiful little series of functions essentially creates functions that add or remove classes by pluging in the right arguments. I found this sweet puppy which was made by Jake Trent at "https://jaketrent.com/post/addremove-classes-raw-javascript/". -- UPDATE: And Now I might not use it because it works for IDs but not classes, as far as I can tell :(   
function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className)
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
    }
function addClass(el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
    }
function removeClass(el, className) {
        if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        el.className=el.className.replace(reg, ' ')
    }
}

//Constructors and Prototypes
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
} 
    
//My JS Ends beyond this point.
});