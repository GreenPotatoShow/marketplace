updateCounter();

const goods = document.getElementById('goods');
for (let i = 0; i < items.length; i++) {
    const itemCard = document.createElement('div');
    itemCard.classList.add('item-card');

    const a = document.createElement('a');
    a.setAttribute('href', 'items/item'+ (i+1) +'.html');
    itemCard.prepend(a);

    const img = document.createElement('img');
    img.classList.add('item');
    let imgAddress = 'attachments/picture'+ (i+1) +'.jpg';
    img.setAttribute('src', imgAddress);
    img.onerror = () => {
        img.setAttribute('src', 'https://source.unsplash.com/random/500x500?sig=' + i);
    }
    a.prepend(img);

    const itemName = document.createElement('h4');
    itemName.classList.add('item-name');
    itemName.innerHTML = items[i].name || 'Нет названия';
    img.after(itemName);

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.innerHTML = items[i].price || 0;
    itemName.after(itemPrice);

    const button = document.createElement('button');
    button.classList.add(`${i}`);
    const cart = localStorage.getItem('cart');
    if (cart){
    const parsedCart = JSON.parse(cart);

    const itemObject = parsedCart.find((item) => +item.id === i);

    if (itemObject) {
        button.classList.add('button-cart-clicked');
        button.innerHTML = 'Добавлено';
    }
    else {
        button.classList.add('button-cart');
        button.innerHTML = 'Добавить в корзину';
    }
    }
    else {
        button.classList.add('button-cart');
        button.innerHTML = 'Добавить в корзину';
    }
    
    button.addEventListener('click', (event) => {
        const index = event.target.classList[0];
        const itemToAdd = items[index];
        const cart = localStorage.getItem('cart');

        let newCart;
        if (cart) {
            const parsedCart = JSON.parse(cart);
            const itemObject = parsedCart.find((item) => +item.id === +index);
            const itemIndex = parsedCart.indexOf(itemObject);
            if (itemIndex === -1) {
                newCart = [...parsedCart, itemToAdd];
                button.classList.remove('button-cart');
                button.classList.add('button-cart-clicked');
                button.innerHTML = 'Добавлено';
                itemToAdd.count = 1;
            }
            else {
                parsedCart.splice(itemIndex, 1);
                newCart = parsedCart;
                button.classList.add('button-cart');
                button.classList.remove('button-cart-clicked');
                button.innerHTML = 'Добавить в корзину';
                itemToAdd.count = 0;
            }
        } else {
            newCart = [itemToAdd];
            button.classList.remove('button-cart');
            button.classList.add('button-cart-clicked');
            button.innerHTML = 'Добавлено';
            itemToAdd.count = 1;
        }

        localStorage.setItem('cart', JSON.stringify(newCart));
        updateCounter();
    });

    a.after(button);
    goods.append(itemCard);
}
