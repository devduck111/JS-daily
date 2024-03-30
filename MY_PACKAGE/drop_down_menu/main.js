const menuToggle = document.querySelector('.menuToggle')
const header = document.querySelector('header')
menuToggle.onclick = function(){
    header.classList.toggle('active')
}