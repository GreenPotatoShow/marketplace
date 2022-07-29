function Item(name, price, count) {
    this.name = name;
    this.count = count;
    this.price = price;
}


let counter = document.createElement('div');
let cart = document.querySelector('.cart');
cart.prepend(counter);
let chapter = document.querySelector('.chapter');
let itemNames = ['Название товара1', 'Название товара2', 'Название товара3', 'Название товара4', 'Название товара5 Название товара5 Название товара5', 'Название товара6', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus fugit et unde voluptatum perspiciatis quam iure vero eaque? Illum repudiandae ipsum voluptas accusantium saepe magnam earum mollitia laboriosam doloribus eligendi!', 'Название товара8', 'Название товара9', 'Название товара10', 'ItemName11', 'Название товара 12'];
let itemPrices = [15000, 30000, 330000, 40000, 50000, 1000000000, 70000, 5, 320, 50000, 3000, 100000];
let items = [];
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
    itemName.innerHTML = itemNames[i];
    img.after(itemName);

    let itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.innerHTML = itemPrices[i];
    itemName.after(itemPrice);

    buttons[i] = document.createElement('button');
    buttons[i].classList.add('button-cart');
    buttons[i].innerHTML = 'Добавить в корзину';
    a.after(buttons[i]);

    buttons[i].addEventListener('click', () => {
        localStorage.clear();
        if  (items[i].count == 0){
            items[i].count = 1; 
            buttons[i].classList.add('button-cart-clicked');
            buttons[i].classList.remove('button-cart');
            buttons[i].innerHTML = 'Добавлено';
        }
        else if (items[i].count >= 1){
            items[i].count = 0; 
            buttons[i].classList.remove('button-cart-clicked');
            buttons[i].classList.add('button-cart');
            buttons[i].innerHTML = 'Добавить в корзину';
        }
        countAll = 0;
        for (let item of items){
            countAll += +item.count;
        }
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
        localStorage.setItem('count', items.length);
        for (let i = 0; i < items.length; i++){
            nameLocalStorage = String(i) + 'itemName';
            localStorage.setItem(nameLocalStorage, items[i].name);
            nameLocalStorage = String(i) + 'itemCount';
            localStorage.setItem(nameLocalStorage, items[i].count);
            nameLocalStorage = String(i) + 'itemPrice';
            localStorage.setItem(nameLocalStorage, items[i].price);
        }
    });
}

if (localStorage.getItem('count') == undefined) {
    for (let i = 0; i < itemNames.length; i++){
        items[i] = new Item (itemNames[i], itemPrices[i], 0);
    }
    localStorage.setItem('count', items.length);
    let nameLocalStorage;
    for (let i = 0; i < items.length; i++){
        nameLocalStorage = String(i) + 'itemName';
        localStorage.setItem(nameLocalStorage, items[i].name);
        nameLocalStorage = String(i) + 'itemCount';
        localStorage.setItem(nameLocalStorage, items[i].count);
        nameLocalStorage = String(i) + 'itemPrice';
        localStorage.setItem(nameLocalStorage, items[i].price);
    }
}
else{
    for (let i = 0; i < itemNames.length; i++){
        items[i] = new Item (itemNames[i], itemPrices[i], localStorage.getItem(i + 'itemCount'));
        if (items[i].count != 0) { 
            buttons[i].classList.add('button-cart-clicked');
            buttons[i].innerHTML = 'Добавлено';
        }
    }
    let countAll = 0;
    for (let item of items){
        countAll += +item.count;
    }
    if (countAll != 0){
        if (!counter.classList.contains('counter')){
            counter.classList.add('counter')
        };
        counter.innerHTML =  countAll;
    }
}
