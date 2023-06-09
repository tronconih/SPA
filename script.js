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
    menu.style.zIndex = "5";
    menu.style.backgroundColor = "lightblue";
    menu.style.transition = "top 1s"; // animation of the top that switch from -200 to 0 px
    btnMenu.style.transition = "rotate 0.5s"; // animation of the top that switch from -200 to 0 px
    btnMenu.onclick = menuMobile;  
    //assignments to reset the transition
    btnMenu.style.rotate = "0deg"; 

    //GRID 1
    divIntro.style.gridTemplateColumns = "80%";
    divIntro.style.gridTemplateRows = "repeat(6, 20%[row-start])";
    divIntro.style.marginTop = "20%";
        //single area settings
            //first button
            btn1.style.gridColumn = "1";
            btn1.style.gridRow = "4";
            //second button
            btn2.style.gridColumn = "1";
            btn2.style.gridRow = "5";
            //third button
            btn3.style.gridColumn = "1";
            btn3.style.gridRow = "6";

}

function menuMobile(){
    menu.style.top = "0";
}