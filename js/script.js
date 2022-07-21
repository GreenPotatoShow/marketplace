function Item(name) {
    this.name=name;
    this.count=0;
}


let counter = document.createElement('div');
let cart = document.querySelector('.cart');
cart.prepend(counter);
let itemNames = document.querySelectorAll('.item-name');
let items = [];
for (let i = 0; i < itemNames.length; i++){
    items[i] = new Item (itemNames[i].innerHTML);
}
let buttons = document.querySelectorAll('button.button-cart');
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        if  (items[i].count == 0){
            items[i].count = 1; 
            buttons[i].classList.add('button-cart-clicked');
            buttons[i].classList.remove('button-cart');
            buttons[i].innerHTML='Добавлено';
        }
        else if (items[i].count == 1){
            items[i].count = 0; 
            buttons[i].classList.remove('button-cart-clicked');
            buttons[i].classList.add('button-cart');
            buttons[i].innerHTML='Добавить в корзину';
        }
        let countAll = 0;
        for (let item of items){
            countAll += item.count;
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
    });
}
