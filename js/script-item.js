class Item{
    constructor(name, price, count){
        this.name = name;
        this.price = price;
        this.count = count;
    }
}

const getName = (string) => {
    let begin = string.indexOf('itemName') + 10;
    let end = string.indexOf('"', begin);
    return string.slice(begin, end);
}

const getPrice = (string) => {
    let begin = string.indexOf('itemPrice') + 11;
    let end = string.indexOf('"', begin);
    return +string.slice(begin, end);
}

const getCount = (string) => {
    let begin = string.indexOf('itemCount') + 11;
    let end = string.indexOf('"', begin);
    return +string.slice(begin, end);
}

const toLocalStorage = () => {
    for (let i = 0; i < items.length; i++){
        itemsLocalStorage [i] = 'itemName:"' + items[i].name + '"';
        itemsLocalStorage [i] += 'itemPrice:"' + items[i].price + '"';
        itemsLocalStorage [i] += 'itemCount:"' + items[i].count + '";';
    }
    localStorage.setItem('cart', itemsLocalStorage);
}

let itemNumber = +window.location.href.slice(window.location.href.indexOf('items/') + 10,-5) - 1;
let mainPart = document.querySelector('.main-part');
let itemsLocalStorage = localStorage.getItem('cart').split(';,');
let items = [];
let itemName, itemCount, itemPrice;

for (let i = 0; i < itemsLocalStorage.length; i++){
    itemName = getName(itemsLocalStorage[i]);
    itemPrice = getPrice(itemsLocalStorage[i]);
    itemCount = getCount(itemsLocalStorage[i]);
    items[i] = new Item (itemName, itemPrice, itemCount);
}

document.title = items[itemNumber].name;

let header = document.createElement('div');
header.classList.add('chapter');
header.innerHTML = items[itemNumber].name;
mainPart.prepend(header);

let item = document.createElement('div');
item.classList.add('item-flex');
header.after(item);

let image = document.createElement('img');
image.setAttribute('src', '../attachments/picture' + (itemNumber+1) + '.jpg');
image.onerror = () => {
    image.setAttribute('src', 'https://source.unsplash.com/random/500x500?sig=' + itemNumber);
}
image.classList.add('item-image');
item.prepend(image);

let describeFlex = document.createElement('div');
describeFlex.classList.add('describe-flex');
image.after(describeFlex);

let description = document.createElement('div');
description.classList.add('description');
description.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aut reiciendis at saepe! Ex magnam perspiciatis nisi vero, laboriosam totam ullam suscipit iste quis expedita, dignissimos odit exercitationem maiores facere. Hey lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aut reiciendis at saepe! Ex magnam perspiciatis nisi vero, laboriosam totam ullam suscipit iste quis expedita, dignissimos odit exercitationem maiores facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aut reiciendis at saepe! Ex magnam perspiciatis nisi vero, laboriosam totam ullam suscipit iste quis expedita, dignissimos odit exercitationem maiores facere.';
describeFlex.prepend(description);

let priceBox = document.createElement('div');
priceBox.classList.add('price-box');
description.after(priceBox);

let price = document.createElement('div');
price.innerHTML = items[itemNumber].price + " p";
price.classList.add('decription-item-price');
priceBox.prepend(price);

let buttonCart = document.createElement('button');
if (+items[itemNumber].count === 0){
    buttonCart.innerHTML = 'Добавить в корзину';
    buttonCart.classList.add('item-button-cart');
}
else{
    buttonCart.innerHTML = 'Добавлено';
    buttonCart.classList.add('item-button-cart-clicked');
}
priceBox.after(buttonCart);

let counter = document.createElement('div');
cart = document.querySelector('.cart');
cart.prepend(counter);

let countAll = 0;
itemsLocalStorage.forEach((el) =>{countAll += getCount(el);})

if (countAll !== 0){
    if (!counter.classList.contains('counter')){
        counter.classList.add('counter')
    };
    counter.innerHTML =  countAll;
}

buttonCart.addEventListener('click', () => {
    if (+items[itemNumber].count === 0){
        buttonCart.classList.remove('item-button-cart');
        buttonCart.classList.add('item-button-cart-clicked');
        items[itemNumber].count += 1;
        countAll += 1;
        buttonCart.innerHTML = 'Добавлено';
    }
    else{
        buttonCart.classList.add('item-button-cart');
        buttonCart.classList.remove('item-button-cart-clicked');
        countAll -= items[itemNumber].count;
        items[itemNumber].count = 0;
        buttonCart.innerHTML = 'Добавить в корзину';
    }
    toLocalStorage();
    if (countAll === 0){
        counter.innerHTML = '';
        counter.classList.remove('counter');
    }
    else{
        if (!counter.classList.contains('counter')){
            counter.classList.add('counter')
        };
        counter.innerHTML =  countAll;
    }
});