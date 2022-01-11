import _ from 'lodash';
import "./style/style.css";
import buildHTML from "./modules/buildHTML";
import homePage from "./modules/homePage";
import navBar from "./modules/navBar";
import contact from "./modules/contact";
import menu from "./modules/menu";

buildHTML();
navBar();
homePage();
// contact();
// menu();

function test() {
    console.log("Test for the win");
}


// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8" />
//     <title>RESTAURANT PAGE</title>
//     <link href="style.css" rel="stylesheet">
//     <script src="main.js" defer></script>

//   </head>
//   <body>
//       <header>sno restraunte</header>
//       <div id="navBar"></div>
//       <div id="content"></div>
//     </body>

// </html>

