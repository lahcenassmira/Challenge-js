

const mytext = "Hello from the world!";
// console.log(mytext.length)
const button = document.querySelector("button");
let i = 0;
button.addEventListener("click", function () {
    let typeWriter = setInterval(function () {
        document.querySelector("#type").textContent += mytext[i];
        i += 1;
        if (mytext[i] === undefined) {
         clearInterval(typeWriter);
        }
    }, 100);
})
