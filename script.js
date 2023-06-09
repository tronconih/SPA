//DECLARATIONS
let btnContatti = document.getElementById("btnContacts");
let btnHome = document.getElementById("home");
let btnMenu = document.getElementById("btnMenu");
let divIntro = document.getElementById("intro");
let menu = document.getElementById("menu");
let w = window.innerWidth;
let hamburger = false; //boolean for the hamburger menu state
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
    //alert("phone");
    hamburger = false;
    btnMenu.src = "images/menu.svg";
    btnMenu.style.zIndex = "10";
    btnMenu.style.position = "relative";
    //MENU
    menu.style.marginTop = "0px";
    menu.style.display = "block";
    menu.style.position = "fixed";
    menu.style.top = "-15%";
    menu.style.right = "0";
    menu.style.left = "0";
    menu.style.backgroundColor = "lightblue";
    menu.style.transition = "top 1s"; // animation of the top that switch from -200 to 0 px
    btnMenu.style.transition = "rotate 0.5s"; // animation of the top that switch from -200 to 0 px
    //assignments to reset the transition
    btnMenu.style.rotate = "0deg"; 

    btnMenu.onclick = menuMobile;
    //GRID

}

function menuMobile(){
    menu.style.top = "0";
}