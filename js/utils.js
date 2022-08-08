class Item {
  constructor(id, name, price, count = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

const items = [
    new Item(0, '1', 100),
    new Item(1, '2', 1000),
    new Item(2, '3', 10000),
    new Item(3, '4', 100000),
];

const updateCounter = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const counterEl = document.querySelector('.counter');
    if (cart && !(Array.isArray(cart) && cart.length === 0)) {
        counterEl.innerHTML = cart.length;
        counterEl.style.display = 'block';
    } else {
        counterEl.style.display = 'none';
    }
}
