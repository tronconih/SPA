//DECLARATIONS
let btnHome = document.getElementById("home");
let btnMenu = document.getElementById("btnMenu");
let divGrill2 = document.getElementById("grill2");
<<<<<<< Updated upstream
let menu = document.getElementById("menu");
let w = window.innerWidth;
let hamburger = false; //boolean for the hamburger menu state
divContacts.style.display = "none";
>>>>>>> Stashed changes

//EVENTS
let mobile = checkDevice();
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
btnHome.onclick = previousPage;

//FUNCTIONS
function nextPage(){

    divContacts.style.display = "grid";
}

function previousPage(){

=======
    divContacts.style.display = "grid";
}

function checkDevice(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        changeLayout();
        return true;
      }else{
        // false for not mobile device
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
    menu.style.zIndex = "5";
    menu.style.backgroundColor = "lightblue";
    menu.style.transition = "top 1s"; // animation of the top that switch from -200 to 0 px
    btnMenu.style.transition = "rotate 0.5s"; // animation of the top that switch from -200 to 0 px
    btnMenu.onclick = menuMobile;  
    //assignments to reset the transition
    btnMenu.style.rotate = "0deg"; 

    
    alert("phone");
    btnMenu.src = "images/menu.png";
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
    btnMenu.src = "images/cancel.svg";
    btnMenu.style.rotate = "360deg";
    menu.style.top = "0";
}
=======
let divContacts = document.getElementById("contacts");
let menu = document.getElementById("menu");
let w = window.innerWidth;
divContacts.style.display = "none";
>>>>>>> Stashed changes
    hamburger = true;
    btnMenu.onclick = changeLayout;
    //transition reset
    btnMenu.style.transition = "rotate 0.5s";
}
