function Item(name, count, price) {
    this.name = name;
    this.count = count;
    this.price = price;
}

let items = [];
let count = localStorage.getItem('count');
let nameLocalStorage;
let itemName, itemCount, itemPrice;
let cartItemLine = document.querySelector('.cart-item-line');
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
    empty.innerHTML = 'The cart is empty';
    cartItemLine.prepend(empty);
}
