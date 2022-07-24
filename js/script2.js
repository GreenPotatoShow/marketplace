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
let buttonCountPlus, buttonCountMinus;
let counter;
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
    for (let item of items){
        if (item.count != 0){
            cartItemLine2 = document.createElement('div');
            cartItemLine2.classList.add('cart-item-line');
            cartItemLine.before(cartItemLine2);
            itemName = document.createElement('div');
            itemName.classList.add('cart-item-name');
            itemName.innerHTML = item.name;
            cartItemLine2.prepend(itemName);
            
            buttonCountMinus = document.createElement('button');
            buttonCountMinus.innerHTML = '-';
            itemName.after(buttonCountMinus);

            counter = document.createElement('div');
            counter.innerHTML = item.count;
            buttonCountMinus.after(counter);
        
            buttonCountPlus = document.createElement('button');
            buttonCountPlus.innerHTML = '+';
            counter.after(buttonCountPlus);

            buttonCountMinus.addEventListener('click', () => {
                if (item.count > 0) {item.count -= 1;}
                counter.innerHTML = item.count;
                counter.replaceWith(counter);
            }
            );
            buttonCountPlus.addEventListener('click', () => {
                item.count = +item.count + 1;
                counter.innerHTML = item.count;
                counter.replaceWith(counter);
            }
            );
        }
    }
}
