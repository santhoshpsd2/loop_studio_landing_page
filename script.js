const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close_button');

const mobile_menu = document.querySelector('.mobile_menu');

hamburger.addEventListener('click',()=>{
    mobile_menu.classList.add('active');
})

close.addEventListener('click', ()=>{
    mobile_menu.classList.remove('active');
})