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
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
//click imagenes para q se agranden en detall
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
//listado productos
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHmIcon.addEventListener('click', toggleMobileMenu);
//carrito
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
//click imagenes para q se agranden en detall
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) { //si el menu mobile esta abierto
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//menu hamburguesa al dar clic muestre el menu
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) { //si el menu mobile esta abierto
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

//carrito compras
function toggleCarritoAside() {
    //cada vez q querramos abrir el carrito de compras, si le damos clic vamos a cerrar el menu mobile
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive'); 
 
    if (!ismobileMenuClosed) { //si el menu mobile esta abierto
        mobileMenu.classList.add('inactive');
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 
 
    if (!isProductDetailClosed) { 
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {

shoppingCartContainer.classList.add('inactive'); //siempre q tratemos de abrir un nuevo producto le pongamos inactive

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

//Listado de productos creamos un array y dentro metemos cada objeto
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Guitarra electrica',
    price: 120,
    image: 'https://images.pexels.com/photos/164774/pexels-photo-164774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Arpa',
    price: 120,
    image: 'https://images.pexels.com/photos/12970722/pexels-photo-12970722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Flauta dulce',
    price: 120,
    image: 'https://images.pexels.com/photos/221563/pexels-photo-221563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Guitarra Electrica',
    price: 120,
    image: 'https://images.pexels.com/photos/9221756/pexels-photo-9221756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Batería',
    price: 120,
    image: 'https://images.pexels.com/photos/9008741/pexels-photo-9008741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Violín',
    price: 120,
    image: 'https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Percusión menor',
    price: 120,
    image: 'https://images.pexels.com/photos/7285177/pexels-photo-7285177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Bateria y planta',
    price: 120,
    image: 'https://images.pexels.com/photos/9644665/pexels-photo-9644665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

/*  
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/

//recorremos todo el array (product es llave del array productList)
function renderProducts(arr) {
    for(product of arr ) { //arr seria el productList
        //creamos desde js toda la tarjeta q esta en comentarios arriba para insertarlas en el html
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        //product = {name, price, img} -> product.image
        productImg.setAttribute('src', product.image);
        //darle eventos, cuando el usuario le de click a la imagen
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //le ponemos hijos a los padres
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

//llamamos la funcion poniendole como parametro el array con el q quiero trabajar
renderProducts(productList);

