// import homePage from "./homePage";
// import contact from "./contact"
// import menu from "./menu"

const homePage = require('./homePage');
const menu = require('./menu');
const contact = require('./contact');





function navBar() {
    const element = document.getElementById("content");
    const elementNav = document.getElementById("navBar");
    
    const navHome = document.createElement("BUTTON");
    navHome.innerHTML = "Home";  
    navHome.addEventListener("click", navHomeFunction);
    elementNav.appendChild(navHome);
    
    const navMenu = document.createElement("BUTTON");
    navMenu.innerHTML = "Menu";  
    navMenu.addEventListener("click", navMenuFunction);
    elementNav.appendChild(navMenu);
    
    const navContact = document.createElement("BUTTON");
    navContact.innerHTML = "Contact Us";  
    navContact.addEventListener("click", navContactFunction);
    elementNav.appendChild(navContact);

    function navMenuFunction() {
        element.innerHTML = ""; 
        menu();
    }
    function navContactFunction() {
        element.innerHTML = ""; 
        contact();
    }
    function navHomeFunction() {
        element.innerHTML = ""; 
        homePage();
    }

    
}

module.exports =  navBar;