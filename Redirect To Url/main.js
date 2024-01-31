

const click = document.querySelector('#click');




click.addEventListener("click", (e) => {
 e.preventDefault();

 window.location.href = 'dashboard.html';

})