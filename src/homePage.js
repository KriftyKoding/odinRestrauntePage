let foodicture = require('./food.jpg');

function homePage() {
    const element = document.getElementById("content");
    const image = document.createElement('IMG');
    image.setAttribute("src", foodicture);
    image.setAttribute("width", "304");
    image.setAttribute("height", "228");
    image.setAttribute("alt", "Food dislayed on Table");
    const headline = document.createElement('h1');
    headline.textContent = "Sno Restraunte"
    const copy = document.createElement('p');
    copy.textContent = "Sno Restraunte is great becaue lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam adipiscing vitae proin sagittis nisl. Turpis massa tincidunt dui ut ornare lectus sit. Non nisi est sit amet facilisis magna etiam tempor. Urna molestie at elementum eu facilisis sed odio morbi quis. In aliquam sem fringilla ut morbi tincidunt augue interdum. Viverra justo nec ultrices dui sapien. Ultrices sagittis orci a scelerisque. Volutpat commodo sed egestas egestas fringilla. Pellentesque massa placerat duis ultricies lacus sed turpis. Sodales ut etiam sit amet nisl purus. Viverra aliquet eget sit amet. Tellus mauris a diam maecenas. Neque ornare aenean euismod elementum nisi quis eleifend quam. Justo nec ultrices dui sapien eget mi proin sed libero. Risus quis varius quam quisque id. Massa placerat duis ultricies lacus sed turpis tincidunt id."
    element.appendChild(image);
    element.appendChild(headline);
    element.appendChild(copy);
}

module.exports =  homePage;