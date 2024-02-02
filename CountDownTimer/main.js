
let seconds = 119;
let countDiv = document.querySelector("div");



let countDown = setInterval(() => {
         let min = Math.floor(seconds / 60);
         let remSconds = seconds % 60;
         
         countDiv.innerHTML = "0" + min + ":" + remSconds ;
if(seconds < 10){
    countDiv.innerHTML =  min + ":" +  "0" + remSconds ;
}
         if(min > 9){
            countDiv.innerHTML =  min + ":" + remSconds ;
         }
         if(seconds > 0){
            seconds -= 1;
          
         }
         if( min == 0){
            countDiv.style.color = "red";
         } 
         if( min == 0 && seconds == 0){
            countDiv.innerHTML = "Done";
         }
}, 100);



