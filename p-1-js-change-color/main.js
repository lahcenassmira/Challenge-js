


let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

  if( window.localStorage.getItem("color")){
    exp.style.backgroundColor  = window.localStorage.getItem("color");
    lis.forEach((li) => {
            // remove active class from all lis 
            lis.forEach((li) => {
                li.classList.remove("active"); 
            });
    });
    // add active class to current color
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
  }
  

lis.forEach((li)=> {
    li.addEventListener("click", (e) => {
       
         e.currentTarget.classList.add("active");
        //  add current color to local storge 
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        // change div background color
         exp.style.backgroundColor = e.currentTarget.dataset.color

        
    });
});