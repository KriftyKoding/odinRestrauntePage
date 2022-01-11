function contact() {
    
    const element = document.getElementById("content");
    const headline = document.createElement('h1');
    headline.textContent = "sno restraunte"

    const inputName = document.createElement("INPUT");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("value", "Name");

    const inputEmail = document.createElement("INPUT");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("value", "Email");

    const inputText = document.createElement("textarea");
    inputText.innerText = "Comments...."

    element.appendChild(headline);
    element.appendChild(inputName);
    element.appendChild(inputEmail);
    element.appendChild(inputText);
    
}

module.exports =  contact;