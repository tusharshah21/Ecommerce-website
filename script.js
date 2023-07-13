const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Cartoon T-Shirt',
        image: 'products/f1.jpg',
        price: 1200
    },
    {
        id: 2,
        name: 'Cartoon T-Shirt',
        image: 'products/f2.jpg',
        price: 1200
    },
    {
        id: 3,
        name: 'Cartoon T-Shirt',
        image: 'products/f3.jpg',
        price: 1200
    },
    {
        id: 4,
        name: 'Cartoon T-Shirt',
        image: 'products/f4.jpg',
        price: 1200
    },
    {
        id: 5,
        name: 'Cartoon T-Shirt',
        image: 'products/f5.jpg',
        price: 1200
    },
    {
        id: 6,
        name: 'Cartoon T-Shirt',
        image: 'products/f6.jpg',
        price: 1200
    }
    ,{
        id: 7,
        name: 'Cartoon T-Shirt',
        image: 'products/f7.jpg',
        price: 1200
    }
    ,{
        id: 8,
        name: 'Cartoon T-Shirt',
        image: 'products/f8.jpg',
        price: 1200
    }
    ,{
        id: 9,
        name: 'Cartoon T-Shirt',
        image: 'products/n1.jpg',
        price: 1200
    }
    ,{
        id: 10,
        name: 'Cartoon T-Shirt',
        image: 'products/n2.jpg',
        price: 1200
    }
    ,{
        id: 11,
        name: 'Cartoon T-Shirt',
        image: 'products/n3.jpg',
        price: 1200
    }
    ,{
        id: 12,
        name: 'Cartoon T-Shirt',
        image: 'products/n4.jpg',
        price: 1200
    }
    ,{
        id: 13,
        name: 'Cartoon T-Shirt',
        image: 'products/n5.jpg',
        price: 1200
    }
    ,{
        id: 14,
        name: 'Cartoon T-Shirt',
        image: 'products/n6.jpg',
        price: 1200
    }
    ,{
        id: 15,
        name: 'Cartoon T-Shirt',
        image: 'products/n7.jpg',
        price: 1200
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}