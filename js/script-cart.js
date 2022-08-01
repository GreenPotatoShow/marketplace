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
        itemsLocalStorage [i] += 'itemCount:"' + items[i].count + '"';
    }
    localStorage.setItem('cart', itemsLocalStorage);
}

const wordCase = (countAll) => {
    if (countAll % 100 < 20 && countAll % 100 > 10){
        countAllDiv.innerHTML += ' товаров';
    }
    else if (countAll % 10 === 1){ countAllDiv.innerHTML += ' товар';}
    else if (countAll % 10 === 2 || countAll % 10 === 3 || countAll % 10 === 4){
        countAllDiv.innerHTML += ' товара';
    }
    else{countAllDiv.innerHTML += ' товаров';}
}

let items = [];
let itemName, itemCount, itemPrice;
let cartItemLine = document.querySelector('.cart-item-line-empty');
let cartItemLine2;
let buttonCountPlus = [], buttonCountMinus = [];
let counter = [];
let cost = [];
let totalCost = 0;
let countAllDiv, totalCostDiv;
let itemsLocalStorage = localStorage.getItem('cart').split(',');
for (let i = 0; i < itemsLocalStorage.length; i++){
    itemName = getName(itemsLocalStorage[i]);
    itemPrice = getPrice(itemsLocalStorage[i]);
    itemCount = getCount(itemsLocalStorage[i]);
    items[i] = new Item (itemName, itemPrice, itemCount);
}
let countAll = 0;
items.forEach((el) => {
    countAll += +el.count;
    totalCost += +el.count * +el.price;
});
if (countAll === 0){
    let empty = document.createElement('div');
    empty.classList.add('empty-cart');
    empty.innerHTML = 'Корзина пуста';
    cartItemLine.prepend(empty);
}
else{
    for (let i = 0; i<items.length; i++){
        if (+items[i].count !== 0){
            cartItemLine2 = document.createElement('div');
            cartItemLine2.classList.add('cart-item-line');
            cartItemLine.before(cartItemLine2);

            a = document.createElement('a');
            a.setAttribute('href', 'items/item' + (i+1) + '.html');
            a.style.width = '20vw';
            cartItemLine2.prepend(a);

            itemName = document.createElement('div');
            itemName.classList.add('cart-item-name');
            itemName.innerHTML = items[i].name;
            a.prepend(itemName);
            
            let div = document.createElement('div');
            div.classList.add('div');
            div.style.display = 'flex';
            a.after(div);

            buttonCountMinus[i] = document.createElement('button');
            buttonCountMinus[i].classList.add('button-counter');
            buttonCountMinus[i].innerHTML = '-';
            div.append(buttonCountMinus[i]);

            counter[i] = document.createElement('div');
            counter[i].classList.add('cart-item-counter');
            counter[i].innerHTML = items[i].count;
            buttonCountMinus[i].after(counter[i]);
        
            buttonCountPlus[i] = document.createElement('button');
            buttonCountPlus[i].classList.add('button-counter');
            buttonCountPlus[i].innerHTML = '+';
            counter[i].after(buttonCountPlus[i]);

            cost[i] = document.createElement('div');
            cost[i].classList.add('item-cost');
            cost[i].innerHTML = +items[i].count * +items[i].price;
            div.after(cost[i]);

            buttonCountMinus[i].addEventListener('click', () => {
                if (items[i].count > 0) {
                    items[i].count -= 1;
                    totalCost -= items[i].price;
                    countAll -= 1;
                    toLocalStorage(); 
                }
                if (countAll <= 0){
                    buttonOrder.setAttribute('disabled', true);
                    buttonOrder.classList.add('zero-items');
                    buttonOrder.classList.remove('button-order');
                }
                counter[i].innerHTML = items[i].count;
                counter[i].replaceWith(counter[i]);
                cost[i].innerHTML = +items[i].count * +items[i].price;
                countAllDiv.innerHTML = countAll;
                wordCase(countAll);
                totalCostDiv.innerHTML = totalCost;
            });
            buttonCountPlus[i].addEventListener('click', () => {
                items[i].count = +items[i].count + 1;
                counter[i].innerHTML = items[i].count;
                counter[i].replaceWith(counter[i]);
                cost[i].innerHTML = +items[i].count * +items[i].price;
                totalCost += +items[i].price;
                countAll += 1;
                countAllDiv.innerHTML = countAll;
                wordCase(countAll);
                totalCostDiv.innerHTML = totalCost;
                if (buttonOrder.classList.contains("zero-items")){
                    buttonOrder.classList.remove('zero-items');
                    buttonOrder.classList.add('button-order');
                    buttonOrder.removeAttribute('disabled');
                }
                toLocalStorage();
                localStorage.setItem((i) + 'itemCount', items[i].count);
            }
            );

        }
    }
    countAllDiv = document.createElement('div');
    countAllDiv.innerHTML = countAll;
    wordCase(countAll);
    countAllDiv.classList.add('count-all');
    document.querySelector('.cart-total>.chapter').after(countAllDiv);

    totalCostDiv = document.createElement('div');
    totalCostDiv.innerHTML = totalCost;
    totalCostDiv.classList.add('cost-total');
    countAllDiv.after(totalCostDiv);

    let buttonOrder = document.createElement('button');
    buttonOrder.innerHTML = 'Оформить';
    buttonOrder.classList.add('button-order');
    totalCostDiv.after(buttonOrder);
}
