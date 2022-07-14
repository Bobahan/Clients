const menu = document.querySelector('#mobile-menu');
const menuLinkls = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinkls.classList.toggle('active')
})