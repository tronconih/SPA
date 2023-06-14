//EVENTS
const contactButtonRef = document.getElementById("contactButtonRef");
contactButtonRef.onclick = nextPage;
const homeLinkRef = document.getElementById("homeLinkRef");
homeLinkRef.onclick = previousPage;
const homeLinkDrawerRef = document.getElementById("homeLinkDrawerRef");
homeLinkDrawerRef.onclick = previousPage;   
const homeGridRef = document.getElementById("homeGridRef");

//FUNCTIONS
function nextPage(){
    homeGridRef.style.display = "none";
}

function previousPage(){
    homeGridRef.style.display = "grid"; 
}

const drawerToggleRef = document.getElementById("drawerToggleRef");
const homeHeaderRef= document.getElementById("homeHeaderRef");
const homeDrawerRef= document.getElementById("homeDrawerRef");
const citationHeadingRef = document.getElementById("citationHeadingRef");
let isMobileHeaderOpen = false; //boolean for the hamburger header state

function headerMobile(){

    if(isMobileHeaderOpen != true){
        openDrawer();
    }
    else{
        closeDrawer();
    }

}

function openDrawer(){
    /* For 100% screen height */
    homeDrawerRef.style.visibility = "visible"; 
    homeDrawerRef.style.height= "100vh"; 
    drawerToggleRef.style.content = "url(images/cancel.svg)";
    drawerToggleRef.style.rotate = "360deg";
    homeDrawerRef.style.left = "0";
    document.getElementsByTagName("BODY")[0].style.overflowY = "hidden";
    isMobileHeaderOpen = true;
}

function closeDrawer(){
    /* For 100% screen height */
    homeDrawerRef.style.height= "0"; 
    drawerToggleRef.style.content = "url(images/menu.svg)";
    drawerToggleRef.style.rotate = "0deg"; 
    homeDrawerRef.style.left = "-100%";
    document.getElementsByTagName("BODY")[0].style.overflowY = "auto";
    isMobileHeaderOpen = false;
}

//function created to manage the problem of the css priorities (js-CSS > css)
function manageWindowResize(){
    if(w > window.outerWidth){
        isMobileHeaderOpen = false;
        document.getElementsByTagName("BODY")[0].style.overflowY = "auto";
        closeDrawer();
        homeDrawerRef.style.height= "50px";
    }
    else{
        homeDrawerRef.style.height= "0";
        homeGridRef.style.height= "auto";
    }
}