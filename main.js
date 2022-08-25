//al darle click donde esta el email platzi@example.com debe aparecer el menu
//en este momento esta tiene display: none por lo q no se ve

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}