//DECLARATIONS
let btnContatti = document.getElementById("btnContacts");
let btnHome = document.getElementById("home");
let btnMenu = document.getElementById("btnMenu");
let divIntro = document.getElementById("intro");
let menu = document.getElementById("menu");
let w = window.innerWidth;
let hamburger = false; //boolean for the hamburger menu state
let cit = document.getElementById("citation");
let btn1 = document.getElementById("btnCourses");
let btn2 = document.getElementById("btnAbout");
let btn3 = document.getElementById("btnContacts");


//EVENTS
btnContatti.onclick = nextPage;
btnHome.onclick = previousPage;

//FUNCTIONS
function nextPage(){
    divIntro.style.display = "none";
}

function previousPage(){
    divIntro.style.display = "grid"; 

}

function menuMobile(){

    if(hamburger != true){
        menu.style.height= "100vh"; /* For 100% screen height */
        btnMenu.style.content = "url(images/cancel.svg)";
        btnMenu.style.rotate = "360deg";
    menu.style.left = "0";
        divIntro.style.visibility = "hidden";
        divIntro.style.transition = "opacity 2s";
        hamburger = true;
    }
    else{
        menu.style.height= "0"; /* For 100% screen height */
        btnMenu.style.content = "url(images/menu.svg)";
    btnMenu.style.rotate = "0deg"; 
        menu.style.left = "-100%";
        divIntro.style.visibility = "visible";
        hamburger = false;
}

}