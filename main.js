//al darle click donde esta el email platzi@example.com debe aparecer el menu
//en este momento esta tiene display: none por lo q no se ve
//menu Desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//menu Mobile
const menuHmIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//carrito compras
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHmIcon.addEventListener('click', toggleMobileMenu);
//carrito
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {

    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) { //si el menu mobile esta abierto
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//menu hamburguesa al dar clic muestre el menu
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) { //si el menu mobile esta abierto
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

//carrito compras
function toggleCarritoAside() {
    //cada vez q querramos abrir el carrito de compras, si le damos clic vamos a cerrar el menu mobile
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive'); 
 
    //aside.classList.toggle('inactive');

    if (!ismobileMenuClosed) { //si el menu mobile esta abierto
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}