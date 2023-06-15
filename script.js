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
const drawerWrapperRef = document.getElementById("drawerWrapperRef");
let isMobileDrawerOpen = false; //boolean for the hamburger header state

function drawerMobile(){

    if(isMobileDrawerOpen != true){
        openDrawer();
    }
    else{
        closeDrawer();
    }

}

function openDrawer(){
    /* For 100% screen height */
    // homeDrawerRef.style.visibility = "visible"; 
    // homeDrawerRef.style.height= "100vh";
    // homeDrawerRef.style.width= "100vw";
    drawerToggleRef.style.content = "url(images/cancel.svg)";
    drawerToggleRef.style.rotate = "360deg";
    drawerWrapperRef.style.left = "0";
    isMobileDrawerOpen = true;
}

function closeDrawer(){
    /* For 100% screen height */
    drawerToggleRef.style.content = "url(images/menu.svg)";
    drawerToggleRef.style.rotate = "0deg"; 
    drawerWrapperRef.style.left = "-110vw";
    isMobileDrawerOpen = false;
}

//function created to manage the problem of the css priorities (js-CSS > css)
function manageWindowResize(){
    if(window.outerWidth > 900){
        closeDrawer();
    }
    else{
        
    }
}