//al darle click donde esta el email platzi@example.com debe aparecer el menu
//en este momento esta tiene display: none por lo q no se ve

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//
const menuHmIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

menuHmIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

//menu hamburguesa al dar clic muestre el menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}