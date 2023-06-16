//EVENTS
const contactButtonRef = document.getElementById("contactButtonRef");
contactButtonRef.onclick = nextPage;
const homeLinkRef = document.getElementById("homeLinkRef");
homeLinkRef.onclick = previousPage;
const homeLinkDrawerRef = document.getElementById("homeLinkDrawerRef");
homeLinkDrawerRef.onclick = previousPage;
const homeWrapperRef = document.getElementById("homeWrapperRef");
const contactWrapperRef = document.getElementById("contactWrapperRef");
contactWrapperRef.style.display = "none";
//boolean for the hamburger header state
let isMobileDrawerOpen = false;

//FUNCTIONS
function nextPage() {
    homeWrapperRef.style.display = "none";
    contactWrapperRef.style.display = "grid";
}

function previousPage() {
    homeWrapperRef.style.display = "grid";
    contactWrapperRef.style.display = "none";
    if (isMobileDrawerOpen) closeDrawer();
}

const drawerToggleRef = document.getElementById("drawerToggleRef");
const homeHeaderRef = document.getElementById("homeHeaderRef");
const homeDrawerRef = document.getElementById("homeDrawerRef");
const citationHeadingRef = document.getElementById("citationHeadingRef");

function drawerMobile() {
    !isMobileDrawerOpen  ? openDrawer() : closeDrawer();
}

function openDrawer() {
    drawerToggleRef.style.content = "url(images/cancel.svg)";
    drawerToggleRef.style.rotate = "360deg";
    homeDrawerRef.style.left = "0";
    isMobileDrawerOpen = true;
}

function closeDrawer() {
    /* For 100% screen height */
    drawerToggleRef.style.content = "url(images/menu.svg)";
    drawerToggleRef.style.rotate = "0deg";
    homeDrawerRef.style.left = "-110vw";
    isMobileDrawerOpen = false;
}

//function created to manage the problem of the css priorities (js-CSS > css)
function manageWindowResize() {
    if (window.outerWidth > 900){
        homeDrawerRef.style.display = "none";
        closeDrawer();
        drawerToggleRef.style.content = "url(images/menu.svg)";
    } 
    else homeDrawerRef.style.display = "flex";
}