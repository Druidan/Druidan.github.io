document.addEventListener("DOMContentLoaded", function() { 
    //My JS starts past this point.

//Global Button Grab
const homeMenuBtn = document.getElementsByClassName("fa-home");
const featuresMenuBtn = document.getElementsByClassName("fa-angle-double-down");
const portfolioBtn = document.getElementsByClassName("portfolioNavItem");
const aboutBtn = document.getElementsByClassName("aboutNavItem");
const linkedInBtn = document.getElementsByClassName("fa-linkedin");
const gitHubBtn = document.getElementsByClassName("fa-github");
const twitterBtn = document.getElementsByClassName("fa-twitter");
const faceBookBtn = document.getElementsByClassName("fa-facebook-square");
const resumeDownloadBtn = document.getElementsByClassName("downloadResume");
const contactBtn = document.getElementsByClassName("contactMeItem");
const contactSubmitBtn = document.getElementsByClassName("");
const vgWordGuessGameBtn = document.getElementsByClassName("vgWGPic");
const swCombatGameBtn = document.getElementsByClassName("swCombat");
const whaleTriviaBtn = document.getElementsByClassName("whaleTrivia");
const rpsMultiBtn = document.getElementsByClassName("rpsPic");
const allPortfolioItems = document.querySelectorAll(".portfolioItemWrapper");

[].forEach.call(portfolioBtn,function(elm){
    elm.addEventListener('click', function(){
    for(let i = 0; i <allPortfolioItems.length; i++){ //Dear god vanilla JS is so much more complicated for the small things. I got this from Milind Anantwar at Stack Overflow - Source: "https://stackoverflow.com/questions/32586594/how-to-add-a-class-to-multiple-elements"
        allPortfolioItems[i].classList.add("pImgAnimate");
    }
    }, false);
});

[].forEach.call(homeMenuBtn,function(elm){
    elm.addEventListener('click', function(){
        //Do a thing
    }, false);
});

[].forEach.call(featuresMenuBtn,function(elm){
    elm.addEventListener('click', function(){
        //Do a thing
    }, false);
});

[].forEach.call(aboutBtn,function(elm){
    elm.addEventListener('click', function(){
        //Do a thing
    }, false);
});

[].forEach.call(contactBtn,function(elm){
    elm.addEventListener('click', function(){
        //Do a thing
    }, false);
});

[].forEach.call(contactSubmitBtn,function(elm){
    elm.addEventListener('click', function(){
        //Do a thing
    }, false);
});

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