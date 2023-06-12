//DECLARATIONS
let btnHome = document.getElementById("home");
let btnMenu = document.getElementById("btnMenu");
let divGrill2 = document.getElementById("grill2");
<<<<<<< Updated upstream
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
    btnMenu.onclick = menuMobile;  
    //assignments to reset the transition
    btnMenu.style.rotate = "0deg"; 

    //GRID 1

    //GRID 2
    divGrill2.style.gridTemplateColumns = "50% 30%";
    divGrill2.style.gridTemplateRows = "repeat(4, 50%[row-start])";
    document.getElementById("contacts").style.marginTop = "20%";
        //single area settings
            //pic
            pic.style.gridColumn = "1";
            pic.style.gridRow = "1/4";

            //name
            nome.style.gridColumn = "2";
            nome.style.gridRow = "1";
            //email
            email.style.gridColumn = "2";
            email.style.gridRow = "2";
            //phone number
            phone.style.gridColumn = "2";
            phone.style.gridRow = "3";
            //socials
            socials.style.gridColumn = "1/3";
            socials.style.gridRow = "4";
}

function menuMobile(){
    btnMenu.src = "images/cancel.svg";
    btnMenu.style.rotate = "360deg";
    menu.style.top = "0";
    hamburger = true;
    btnMenu.onclick = changeLayout;
    //transition reset
    btnMenu.style.transition = "rotate 0.5s";
}
