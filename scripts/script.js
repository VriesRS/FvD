// JavaScript Document

/***********/
/* Menubar */
/***********/

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}




/****************************/
/*  Menu sluiten met escape */
/****************************/
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

/**********************/
/* light en Dark mode */
/**********************/

var themeBody = document.querySelector('body')

var colorSwitch = document.querySelector('nav ul ul button:first-of-type');

colorSwitch.addEventListener('click',checkmode);

function checkmode(){
    
    colorSwitch.classList.toggle("light")

    themeBody.classList.toggle('light')


}

/****************/
/* Spidey Theme */
/****************/

var spideyTheme = document.querySelector('nav ul ul li:last-of-type');

var muziek = document.querySelector('audio')

spideyTheme.addEventListener('click', checkTheme);

function checkTheme(){

    spideyTheme.classList.toggle("spidey")

    themeBody.classList.toggle("spidey")

    /* Muziek afspelen en stoppen bij start thema */

    if (muziek.paused) {
        muziek.play();
    } else {
        muziek.pause ();
    }

    


}

/***************************************************/
/***************** Progress Bar  *******************/
/*** https://www.youtube.com/watch?v=qYFkQa0Bbq0 ***/
/***************************************************/

let progress = document.getElementById('progressbar');

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + '%'

}










