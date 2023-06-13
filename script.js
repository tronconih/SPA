//EVENTS
const btnHome = document.getElementById("home");
btnHome.onclick = previousPage;
const divContacts = document.getElementById("contacts");
divContacts.style.display = "block";

//FUNCTIONS
function nextPage(){
    divContacts.style.display = "grid";
}

function previousPage(){
    divContacts.style.display = "none";
}

const menuButtonRel = document.getElementById("menuButtonRel");
const menu = document.getElementById("menu");
//boolean for the hamburger menu state
let isMobileMenuOpen = false; 
const divGrill2 = document.getElementById("grill2");

function menuMobile(){

    if(isMobileMenuOpen != true){
        //For 100% screen height 
        menu.style.height= "100vh"; 
        menuButtonRel.style.content = "url(images/cancel.svg)";
        menuButtonRel.style.rotate = "360deg";
        menu.style.left = "0";
        divContacts.style.visibility = "hidden";
        divContacts.style.transition = "opacity 2s";
        isMobileMenuOpen = true;
    }
    else{
         //For 100% screen height
        menu.style.height= "0";
        menuButtonRel.style.content = "url(images/menu.svg)";
        menuButtonRel.style.rotate = "0deg"; 
        menu.style.left = "-100%";
        divContacts.style.visibility = "visible";
        isMobileMenuOpen = false;
    }
}