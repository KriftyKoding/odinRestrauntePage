

function navBar() {
    const element = document.getElementById("navBar");
    const navHome = document.createElement("BUTTON");
    navHome.innerHTML = "Home";  
    const navMenu = document.createElement("BUTTON");
    navMenu.innerHTML = "Menu";  
    const navContact = document.createElement("BUTTON");
    navContact.innerHTML = "Contact Us";  

    //appendChild
    element.appendChild(navHome);
    element.appendChild(navMenu);
    element.appendChild(navContact);
}

module.exports =  navBar;