//EVENTS
const contactButtonRef = document.getElementById("contactButtonRef");
contactButtonRef.onclick = nextPage;
const homeLinkRef = document.getElementById("homeLinkRef");
homeLinkRef.onclick = previousPage;
const homeGridRef = document.getElementById("homeGridRef");

//FUNCTIONS
function nextPage(){
    homeGridRef.style.display = "none";
}

function previousPage(){
    homeGridRef.style.display = "grid"; 
}

const menuButtonRef = document.getElementById("menuButtonRef");
const homeHeaderRef= document.getElementById("homeHeaderRef");
const citationHeadingRef = document.getElementById("citationHeadingRef");
let isMobileMenuOpen = false; //boolean for the hamburger menu state

function menuMobile(){

    if(isMobileMenuOpen != true){
        homeHeaderRef.style.height= "100vh"; /* For 100% screen height */
        menuButtonRef.style.content = "url(images/cancel.svg)";
        menuButtonRef.style.rotate = "360deg";
        homeHeaderRef.style.left = "0";
        homeGridRef.style.visibility = "hidden";
        homeGridRef.style.transition = "opacity 2s";
        isMobileMenuOpen = true;
    }
    else{
        homeHeaderRef.style.height= "0"; /* For 100% screen height */
        menuButtonRef.style.content = "url(images/menu.svg)";
        menuButtonRef.style.rotate = "0deg"; 
        homeHeaderRef.style.left = "-100%";
        homeGridRef.style.visibility = "visible";
        isMobileMenuOpen = false;
}

}