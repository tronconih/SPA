//DECLARATIONS
let btnContatti = document.getElementById("btnContacts");
let btnHome = document.getElementById("home");
let btnMenu = document.getElementById("btnMenu");
let divIntro = document.getElementById("intro");
let menu = document.getElementById("menu");
let w = window.innerWidth;
//EVENTS
let mobile = checkDevice();
btnHome.onclick = previousPage;

//FUNCTIONS
function nextPage(){
    divIntro.style.display = "none";
}

function previousPage(){
    divIntro.style.display = "grid"; 
}

function checkDevice(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        changeLayout();
        return true;
      }else{
        // false for not mobile device
        alert("desktop");
        return false;
    }
}

function changeLayout(){
    alert("phone");
    btnMenu.src = "images/menu.png";
    btnMenu.style.zIndex = "10";
    //MENU
    menu.style.display = "block";
    menu.style.position = "fixed";
    menu.style.top = "-200px";
    menu.style.right = "0";
    menu.style.left = "0";
    menu.style.transition = "top 1s"; // animation of the top that switch from -200 to 0 px
    menu.style.backgroundColor = "lightblue";

    btnMenu.onclick = menuMobile;
    //GRID

}

function menuMobile(){
    menu.style.top = "0";
}