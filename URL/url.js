//window.location.search.indexOf('index.html')

 //check if url hash contains string value 

if(window.location.hash ){ //hash is index.html#chat
    if(window.location.hash.indexOf('lahcen') === 1){ // 0 == # 1 == lahcen
      console.log("Yes");
    }
}else{
    console.log('No');
}