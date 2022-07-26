function Item(name, count, price) {
    this.name = name;
    this.count = count;
    this.price = price;
}

let items = [];
let count = localStorage.getItem('count');
let nameLocalStorage;
let itemName, itemCount, itemPrice;
let cartItemLine = document.querySelector('.cart-item-line-empty');
let cartItemLine2;
let buttonCountPlus = [], buttonCountMinus = [];
let counter = [];
let cost = [];
for (let i = 0; i < count; i++){
    nameLocalStorage = String(i) + 'itemName';
    itemName = localStorage.getItem(nameLocalStorage);
    nameLocalStorage = String(i) + 'itemCount';
    itemCount = localStorage.getItem(nameLocalStorage);
    nameLocalStorage = String(i) + 'itemPrice';
    itemPrice = localStorage.getItem(nameLocalStorage);
    items[i] = new Item (itemName, itemCount, itemPrice);
}
let countAll = 0;
for (let item of items){
    countAll += item.count;
}
if (countAll == 0){
    let empty = document.createElement('div');
    empty.classList.add('empty-cart');
    empty.innerHTML = 'Корзина пуста';
    cartItemLine.prepend(empty);
}
else{
    for (let i = 0; i<items.length; i++){
        if (items[i].count != 0){
            cartItemLine2 = document.createElement('div');
            cartItemLine2.classList.add('cart-item-line');
            cartItemLine.before(cartItemLine2);
            itemName = document.createElement('div');
            itemName.classList.add('cart-item-name');
            itemName.innerHTML = items[i].name;
            cartItemLine2.prepend(itemName);
            
            let div = document.createElement('div');
            div.classList.add('div');
            div.style.display = 'flex';
            itemName.after(div);

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
                if (items[i].count > 0) {items[i].count -= 1;}
                counter[i].innerHTML = items[i].count;
                counter[i].replaceWith(counter[i]);
                cost[i].innerHTML = +items[i].count * +items[i].price;
            }
            );
            buttonCountPlus[i].addEventListener('click', () => {
                items[i].count = +items[i].count + 1;
                counter[i].innerHTML = items[i].count;
                counter[i].replaceWith(counter[i]);
                cost[i].innerHTML = +items[i].count * +items[i].price;
            }
            );
        }
    }
}
