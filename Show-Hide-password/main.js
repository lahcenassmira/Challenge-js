


const password =  document.querySelector('#pass');

const button = document.querySelector("#show");

button.addEventListener("click", function(){
  
   if(password.type === "password"){
    password.setAttribute("type", "text");
    button.innerHTML = "Hide Password";
   }else {
     
   password.setAttribute("type", "password");
   button.innerHTML = "Show Password";

   }
   
});