//DECLARATIONS
let btnContatti = document.getElementById("btnContacts");
let btnHome = document.getElementById("home");
let btnMenu = document.getElementById("btnMenu");
let divContacts = document.getElementById("contacts");
let menu = document.getElementById("menu");
let w = window.innerWidth;
let hamburger = false; //boolean for the hamburger menu state
let divGrill2 = document.getElementById("grill2");
let pic = document.getElementById("myPic");
let nome = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("number");
let socials = document.getElementById("socials");
divContacts.style.display = "none";

//EVENTS
let mobile = checkDevice();

btnHome.onclick = previousPage;

//FUNCTIONS
function nextPage(){
    divContacts.style.display = "grid";
}

function previousPage(){
    divContacts.style.display = "none";
}

function menuMobile(){

    if(hamburger != true){
        menu.style.height= "100vh"; /* For 100% screen height */
        btnMenu.style.content = "url(images/cancel.svg)";
        btnMenu.style.rotate = "360deg";
    menu.style.left = "0";
        divContacts.style.visibility = "hidden";
        divContacts.style.transition = "opacity 2s";
        hamburger = true;
    }
    else{
        menu.style.height= "0"; /* For 100% screen height */
        btnMenu.style.content = "url(images/menu.svg)";
    btnMenu.style.rotate = "0deg"; 
        menu.style.left = "-100%";
        divContacts.style.visibility = "visible";
        hamburger = false;
}
}