//add Default Local Storage class on body
document.body.classList.add(localStorage.getItem("data-colors") || "red"); // or || 'red' default color
const el = document.querySelectorAll(".color-switcher li");
var classesList = [];

//loop on elements 
for (let i = 0; i < el.length; i++) {
    //get classes list
    classesList.push(el[i].getAttribute("data-color"));
    el[i].addEventListener("click", function () {
        //Remove all old classes from element 
        document.body.classList.remove(...classesList) // ex: ("red", "green", "purple", "black")
        //add current class to li element attribute
        document.body.classList.add(this.getAttribute("data-color"));
        // add to localStorage for later retrieval when user changes color 
        localStorage.setItem("data-colors", this.getAttribute("data-color"));


    });

}



