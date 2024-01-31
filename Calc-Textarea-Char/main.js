
const count = document.getElementById('count');
const txt = document.getElementById('text');
const MaxLength = txt.getAttribute('maxlength');

txt.oninput = function () {
    count.innerHTML = MaxLength - this.value.length;
    count.innerHTML == 0 ? count.style.color = "red" : count.style.color = "white";
}


