updateCounter();
const itemNumber = +window.location.href.slice(window.location.href.indexOf('items/') + 10,-5) - 1;

document.title = items[itemNumber].name;

const header = document.querySelector('.chapter');
header.innerHTML = items[itemNumber].name;

const image = document.querySelector('.item-image');
image.setAttribute('src', '../attachments/picture' + (itemNumber+1) + '.jpg');
image.onerror = () => {
    image.setAttribute('src', 'https://source.unsplash.com/random/500x500?sig=' + itemNumber);
}

const description = document.querySelector('.description');
description.innerHTML = descriptions[Math.floor(Math.random() * descriptions.length)];

const price = document.querySelector('.descr-item-price');
price.innerHTML = items[itemNumber].price + " p";

const buttonCart = document.querySelector('.item-button-cart');

const cart = localStorage.getItem('cart');
const parsedCart = JSON.parse(cart);

const inCart = parsedCart.find(item => item.id === itemNumber)

if (!inCart) {
    buttonCart.innerHTML = 'Добавить в корзину';
    buttonCart.classList.add('item-button-cart');
}
else {
    buttonCart.innerHTML = 'Добавлено';
    buttonCart.classList.remove('item-button-cart');
    buttonCart.classList.add('item-button-cart-clicked');
}

buttonCart.addEventListener('click', () => {
    const cart = localStorage.getItem('cart');
    const parsedCart = JSON.parse(cart);
    let newCart;

    const inCart = parsedCart.find(item => item.id === itemNumber)
    if (!inCart) {
        newCart = [...parsedCart, items[itemNumber]];
        buttonCart.classList.remove('item-button-cart');
        buttonCart.classList.add('item-button-cart-clicked');
        items[itemNumber].count = 1;
        buttonCart.innerHTML = 'Добавлено';
    }
    else {
        const itemObject = parsedCart.find((item) => +item.id === +itemNumber);
        const itemIndex = parsedCart.indexOf(itemObject);
        parsedCart.splice(itemIndex, 1);
        newCart = parsedCart;
        buttonCart.classList.add('item-button-cart');
        buttonCart.classList.remove('item-button-cart-clicked');
        items[itemNumber].count = 0;
        buttonCart.innerHTML = 'Добавить в корзину';
    }

    localStorage.setItem('cart', JSON.stringify(newCart));
    updateCounter();
});