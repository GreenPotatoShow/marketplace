
let itemNumber = 8;
let mainPart = document.querySelector('.main-part');
let count = +localStorage.getItem('count');
nameLocalStorage = String(itemNumber - 1) + 'itemName';
itemName = localStorage.getItem(nameLocalStorage);
nameLocalStorage = String(itemNumber - 1) + 'itemCount';
itemCount = +localStorage.getItem(nameLocalStorage);
nameLocalStorage = String(itemNumber - 1) + 'itemPrice';
itemPrice = +localStorage.getItem(nameLocalStorage);
document.title = itemName;

let header = document.createElement('div');
header.classList.add('chapter');
header.innerHTML = itemName;
mainPart.prepend(header);

let item = document.createElement('div');
item.classList.add('item-flex');
header.after(item);

let image = document.createElement('img');
image.setAttribute('src', '../attachments/picture' + itemNumber + '.jpg');
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
price.innerHTML = itemPrice + " p";
price.classList.add('decription-item-price');
priceBox.prepend(price);

let buttonCart = document.createElement('button');
if (itemCount == 0){
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
for (let i = 0; i < count; i++){
    nameLocalStorage = String(i) + 'itemCount';
    countAll += +localStorage.getItem(nameLocalStorage);
}
if (countAll != 0){
    if (!counter.classList.contains('counter')){
        counter.classList.add('counter')
    };
    counter.innerHTML =  countAll;
}

buttonCart.addEventListener('click', () => {
    if (itemCount == 0){
        buttonCart.classList.remove('item-button-cart');
        buttonCart.classList.add('item-button-cart-clicked');
        itemCount += 1;
        countAll += 1;
        buttonCart.innerHTML = 'Добавлено';
    }
    else{
        buttonCart.classList.add('item-button-cart');
        buttonCart.classList.remove('item-button-cart-clicked');
        countAll -= itemCount;
        itemCount = 0;
        buttonCart.innerHTML = 'Добавить в корзину';
    }
    localStorage.setItem((itemNumber - 1) + 'itemCount', itemCount);
    if (countAll == 0){
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