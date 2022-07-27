
let itemNumber = 1;
let mainPart = document.querySelector('.main-part');
nameLocalStorage = String(itemNumber - 1) + 'itemName';
itemName = localStorage.getItem(nameLocalStorage);
nameLocalStorage = String(itemNumber - 1) + 'itemCount';
itemCount = localStorage.getItem(nameLocalStorage);
nameLocalStorage = String(itemNumber - 1) + 'itemPrice';
itemPrice = localStorage.getItem(nameLocalStorage);
document.title = itemName;

let header = document.createElement('div');
header.classList.add('chapter');
header.innerHTML = itemName;
mainPart.prepend(header);

let image = document.createElement('img');
image.setAttribute('src', 'attachments/picture' + itemNumber + '.jpg');
image.classList.add('item-image');
header.after(image);