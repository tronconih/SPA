//EVENTS
const btnContatti = document.getElementById("contactButtonRel");
btnContatti.onclick = nextPage;
const btnHome = document.getElementById("home");
btnHome.onclick = previousPage;
const divIntro = document.getElementById("intro");

//FUNCTIONS
function nextPage(){
    divIntro.style.display = "none";
}

function previousPage(){
    divIntro.style.display = "grid"; 

}

const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("homeMenu");
const cit = document.getElementById("citation");
let isMobileMenuOpen = false; //boolean for the hamburger menu state

function menuMobile(){

    if(isMobileMenuOpen != true){
        menu.style.height= "100vh"; /* For 100% screen height */
        btnMenu.style.content = "url(images/cancel.svg)";
        btnMenu.style.rotate = "360deg";
    menu.style.left = "0";
        divIntro.style.visibility = "hidden";
        divIntro.style.transition = "opacity 2s";
        isMobileMenuOpen = true;
    }
    else{
        menu.style.height= "0"; /* For 100% screen height */
        btnMenu.style.content = "url(images/menu.svg)";
    btnMenu.style.rotate = "0deg"; 
        menu.style.left = "-100%";
        divIntro.style.visibility = "visible";
        isMobileMenuOpen = false;
}

}