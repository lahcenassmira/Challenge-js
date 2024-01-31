
const text = document.querySelector("#text");
const textLive = document.querySelector("#text-live");
const TitleLive = document.querySelector("#Title-live");
const contentLive = document.querySelector("#content-live");

text.addEventListener("input", ()=>{
    TitleLive.textContent = text.value
  
})
textLive.addEventListener("input", ()=>{
    contentLive.textContent = textLive.value
  
})

