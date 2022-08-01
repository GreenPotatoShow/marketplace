class Item{
    constructor(name, price, count){
        this.name = name;
        this.price = price;
        this.count = count;
    }
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
        itemsLocalStorage [i] += 'itemCount:"' + items[i].count + '"';
    }
    localStorage.setItem('cart', itemsLocalStorage);
}

let counter = document.createElement('div');
let cart = document.querySelector('.cart');
cart.prepend(counter);
let chapter = document.querySelector('.chapter');
let itemNames = ['Название товара1', 'Название товара2', 'Название товара3', 'Название товара4', 'Название товара5 Название товара5 Название товара5', 'Название товара6', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit et unde voluptatum perspiciatis quam iure vero eaque? Illum repudiandae ipsum voluptas accusantium saepe magnam earum mollitia laboriosam doloribus eligendi!', 'Название товара8', 'Название товара9', 'Название товара10', 'ItemName11', 'Название товара 12'];
let itemPrices = [15000, 30000, 330000, 40000, 50000, 1000000000, 70000, 5, 320, 50000, 3000, 100000];
let items = [];
let itemsLocalStorage = [];
let buttons = [];
let goods = document.createElement('div');
goods.classList.add('goods');
chapter.after(goods);
for (let i = 0; i < itemNames.length; i++){
    let itemCard = document.createElement('div');
    itemCard.classList.add('item-card');
    goods.append(itemCard);
    
    let a = document.createElement('a');
    a.setAttribute('href', 'items/item'+ (i+1) +'.html');
    itemCard.prepend(a);

    let img = document.createElement('img');
    img.classList.add('item');
    let imgAddress = 'attachments/picture'+ (i+1) +'.jpg';
    img.setAttribute('src', imgAddress);
    img.onerror = () => {
        img.setAttribute('src', 'https://source.unsplash.com/random/500x500?sig=' + i);
    }
    a.prepend(img);

    let itemName = document.createElement('div');
    itemName.classList.add('item-name');
    if (itemName[i] === undefined){
        itemName[i] = 'Нет названия';
    }
    itemName.innerHTML = itemNames[i];
    img.after(itemName);

    let itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    if (itemPrice[i] === undefined){
        itemPrice[i] = 0;
    }
    itemPrice.innerHTML = itemPrices[i];
    itemName.after(itemPrice);

    buttons[i] = document.createElement('button');
    buttons[i].classList.add('button-cart');
    buttons[i].innerHTML = 'Добавить в корзину';
    a.after(buttons[i]);

    buttons[i].addEventListener('click', () => {
        localStorage.clear();
        if  (+items[i].count === 0){
            items[i].count = 1; 
            buttons[i].classList.add('button-cart-clicked');
            buttons[i].classList.remove('button-cart');
            buttons[i].innerHTML = 'Добавлено';
        }
        else if (+items[i].count >= 1){
            items[i].count = 0; 
            buttons[i].classList.remove('button-cart-clicked');
            buttons[i].classList.add('button-cart');
            buttons[i].innerHTML = 'Добавить в корзину';
        }
        countAll = 0;
        items.forEach((el) => {countAll += +el.count;});
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
        toLocalStorage();
    });
}

if (!localStorage.getItem('cart')) {
    for (let i = 0; i < itemNames.length; i++){
        items[i] = new Item (itemNames[i], itemPrices[i], 0);
    }
    toLocalStorage();
}
else{
    for (let i = 0; i < itemNames.length; i++){
        let count = getCount(localStorage.getItem('cart').split(',')[i]);
        items[i] = new Item (itemNames[i], itemPrices[i], count);
        if (+items[i].count !== 0) { 
            buttons[i].classList.add('button-cart-clicked');
            buttons[i].innerHTML = 'Добавлено';
        }
    }
    let countAll = 0;
    items.forEach((el) => {countAll += +el.count;});
    if (countAll !== 0){
        if (!counter.classList.contains('counter')){
            counter.classList.add('counter')
        };
        counter.innerHTML =  countAll;
    }
}
