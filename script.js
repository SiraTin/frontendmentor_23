let color = document.getElementById('changeColor');
let show = document.querySelectorAll('.d_hide');

function changeColor(){
    show[0].classList.toggle('show');
    show[1].classList.toggle('show');
    color.classList.toggle('changeColor');
}

let color2 = document.getElementById('changeFooter');
let show2 = document.querySelector('.share2');
let hide = document.querySelector('.responsive');

function changeFooter(){
    show2.classList.toggle('show2');
    hide.classList.toggle('hide');
}