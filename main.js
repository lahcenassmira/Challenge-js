


const inSearch =  document.getElementById("search");
const list = document.querySelector(".list");
 const items = Array.from(list.children) 
  function search(){
    const result = items.filter(item => {
        return item.textContent.toLowerCase().includes(inSearch.value.toLowerCase()) ;
    })

  
   
    list.innerHTML = '';
  
    if(result.length === 0){
       const msgError = document.createElement("h1");
       const msg = document.createTextNode("Not Found");
       msgError.appendChild(msg);
       list.appendChild(msgError);
    }
   
    result.map(elem => {
        const li = document.createElement("li");
        const textli = document.createTextNode(elem.textContent);

        li.appendChild(textli);
        list.appendChild(li);
    })


  }

  inSearch.addEventListener('input', search)

