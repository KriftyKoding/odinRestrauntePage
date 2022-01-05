let foodicture = require('./food.jpg');

let imgCrabRavioli = require("./CrabAndRavioli.jpg");
let imgTravelCharcuterieBoard = require("./travelCharcuterieBoard.jpg");
let imgSteakandBrocoli = require("./steakandBrocolli.jpg");


function menu() {
    const element = document.getElementById("content");
    const headline = document.createElement('h1');
    headline.textContent = "Sno Restraunte"
    element.appendChild(headline);

    const menuList = document.createElement('div');
    menuList.setAttribute("class", "menuList");
    element.appendChild(menuList);

    const steakandBrocolli = document.createElement("div")
    steakandBrocolli.setAttribute("class", "menuItem");
    const imageSteakandBrocolli = document.createElement('IMG');
    imageSteakandBrocolli.setAttribute("src", imgSteakandBrocoli);
    imageSteakandBrocolli.setAttribute("width", "150");
    imageSteakandBrocolli.setAttribute("alt", "Steak and Brocolli Image");
    const copySteakandBrocolli = document.createElement('p');
    copySteakandBrocolli.textContent = "Steak and Brocolli"
    steakandBrocolli.appendChild(imageSteakandBrocolli);
    steakandBrocolli.appendChild(copySteakandBrocolli);
    menuList.appendChild(steakandBrocolli);

    const TravelCharcuterieBoard = document.createElement("div")
    TravelCharcuterieBoard.setAttribute("class", "menuItem");
    const imageTravelCharcuterieBoard = document.createElement('IMG');
    imageTravelCharcuterieBoard.setAttribute("src", imgTravelCharcuterieBoard);
    imageTravelCharcuterieBoard.setAttribute("width", "150");
    imageTravelCharcuterieBoard.setAttribute("alt", "Travel Charcuterie Board");
    const copyTravelCharcuterieBoard = document.createElement('p');
    copyTravelCharcuterieBoard.textContent = "~~~~~~Travel Charcuterie Board";
    TravelCharcuterieBoard.appendChild(imageTravelCharcuterieBoard);
    TravelCharcuterieBoard.appendChild(copyTravelCharcuterieBoard);
    menuList.appendChild(TravelCharcuterieBoard);
    
    const CrabRavioli = document.createElement("div")
    CrabRavioli.setAttribute("class", "menuItem");
    const imageCrabRavioli = document.createElement('IMG');
    imageCrabRavioli.setAttribute("src", imgCrabRavioli);
    imageCrabRavioli.setAttribute("width", "150");
    imageCrabRavioli.setAttribute("alt", "Crab Ravioli");
    const copyCrabRavioli = document.createElement('p');
    copyCrabRavioli.textContent = "Crab Ravioli"
    CrabRavioli.appendChild(imageCrabRavioli);
    CrabRavioli.appendChild(copyCrabRavioli);
    menuList.appendChild(CrabRavioli);
    
   
}

module.exports =  menu;