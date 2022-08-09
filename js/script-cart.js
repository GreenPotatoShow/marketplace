updateCounter();

const wordCase = (countAll) => {
    if (countAll % 100 < 20 && countAll % 100 > 10) {
        return ' товаров';
    }
    else if (countAll % 10 === 1) { return ' товар';}
    else if (countAll % 10 === 2 || countAll % 10 === 3 || countAll % 10 === 4) {
        return ' товара';
    }
    else {return ' товаров';}
}

const cartItemLine = document.querySelector('.cart-item-line-empty');
const cart = localStorage.getItem('cart');
if (cartEmpty()) {
    const empty = document.createElement('div');
    empty.classList.add('empty-cart');
    empty.innerHTML = 'Корзина пуста';
    cartItemLine.prepend(empty);
}
else {
    const parsedCart = JSON.parse(cart);
    let totalCost = 0, countAll = 0;
    parsedCart.forEach((el) => {
        countAll += +el.count;
        totalCost += +el.count * +el.price;

        const cartItemLine2 = document.createElement('div');
        cartItemLine2.classList.add('cart-item-line');
        cartItemLine.before(cartItemLine2);

        const a = document.createElement('a');
        a.setAttribute('href', 'items/item' + (el.id+1) + '.html');
        a.style.width = '20vw';
        cartItemLine2.prepend(a);

        const itemName = document.createElement('h4');
        itemName.classList.add('cart-item-name');
        itemName.innerHTML = el.name;
        a.prepend(itemName);
        
        const div = document.createElement('div');
        div.classList.add('div');
        div.style.display = 'flex';
        a.after(div);

        const buttonMinus = document.createElement('button');
        buttonMinus.classList.add('button-counter');
        buttonMinus.innerHTML = '-';
        div.append(buttonMinus);

        const counter = document.createElement('div');
        counter.classList.add('cart-item-counter');
        counter.innerHTML = el.count;
        buttonMinus.after(counter);

        const buttonPlus = document.createElement('button');
        buttonPlus.classList.add('button-counter');
        buttonPlus.innerHTML = '+';
        counter.after(buttonPlus);

        const cost = document.createElement('div');
        cost.classList.add('item-cost');
        cost.innerHTML = +el.count * +el.price;
        div.after(cost);

        buttonMinus.addEventListener('click', () => {
            if (el.count > 0) {
                el.count -= 1;
                totalCost -= el.price;
                countAll -= 1;
                localStorage.setItem('cart', JSON.stringify(parsedCart));
            }
            if (countAll <= 0) {
                buttonOrder.setAttribute('disabled', true);
                buttonOrder.classList.add('zero-items');
                buttonOrder.classList.remove('button-order');
            }
            counter.innerHTML = el.count;
            cost.innerHTML = +el.count * +el.price;
            countAllDiv.innerHTML = countAll;
            countAllDiv.innerHTML += wordCase(countAll);
            totalCostDiv.innerHTML = totalCost;
            updateCounter();
        });
        buttonPlus.addEventListener('click', () => {
            el.count = +el.count + 1;
            counter.innerHTML = el.count;
            cost.innerHTML = +el.count * +el.price;
            totalCost += +el.price;
            countAll += 1;
            countAllDiv.innerHTML = countAll;
            countAllDiv.innerHTML += wordCase(countAll);
            totalCostDiv.innerHTML = totalCost;
            if (buttonOrder.classList.contains("zero-items")) {
                buttonOrder.classList.remove('zero-items');
                buttonOrder.classList.add('button-order');
                buttonOrder.removeAttribute('disabled');
            }
            localStorage.setItem('cart', JSON.stringify(parsedCart));
            updateCounter();
        });
    });

    const countAllDiv = document.createElement('div');
    countAllDiv.innerHTML = countAll;
    countAllDiv.innerHTML += wordCase(countAll);
    countAllDiv.classList.add('count-all');
    document.querySelector('.cart-total>.chapter').after(countAllDiv);

    const totalCostDiv = document.createElement('div');
    totalCostDiv.innerHTML = totalCost;
    totalCostDiv.classList.add('cost-total');
    countAllDiv.after(totalCostDiv);

    const buttonOrder = document.createElement('button');
    buttonOrder.innerHTML = 'Оформить';
    buttonOrder.classList.add('button-order');
    totalCostDiv.after(buttonOrder);
}