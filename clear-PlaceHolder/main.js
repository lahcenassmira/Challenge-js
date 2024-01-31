
const input = document.querySelector("#txt");
const placeHolder = document.querySelector("input[placeholder]");
const label = document.querySelector("#label");
const txtLabel = document.createTextNode("Enter your Name :")
// console.log(placeHolder);
input.onfocus = function () {
    'use strict';

    this.setAttribute("data-place", this.getAttribute("placeholder"));
    if (this.placeholder === 'Enter your Name') {
        this.placeholder = "";
        label.appendChild(txtLabel);
        label.style.display = "block";
       
    }
}
input.onblur = function () {
    'use strict';
    if (this.placeholder === '') {
        this.placeholder = "Enter your Name";
        label.style.display = "none";
       
       
    }
}