const shop = document.getElementById("shop");
//console.log(shop)

let dataShop = [
  {
    id: 1,
    image: "assets/blouse.jpg",
    name: "Women shirt",
    material: "cotton",
    collor: "blue",
    price: 15.0,
    quantity: 0,
  },
  {
    id: 2,
    image: "assets/casual.jpg",
    name: "Casual shirt",
    material: "cotton",
    collor: "blue",
    price: 15.0,
    quantity: 0,
  },
  {
    id: 3,
    image: "assets/sport.jpeg",
    name: "Sport shirt",
    material: "cotton",
    collor: "blue",
    price: 15.0,
    quantity: 3,
  },
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

const allProducts = () => {
  return (shop.innerHTML = dataShop
    .map((d) => {
      const { id, image, name, material, collor, price, quantity } = d;
      console.log(id)
      return `
          <div id="product-id-${id}" class="content">
          <div class="left">
            <img width="100" src=${image} alt=""/>
          </div>
          <div class="right">
            <h3>${name}</h3>
            <p>${material}</p>
            <p>${collor}</p>
            <p>$ ${price}</p>
          </div>
          </div>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id="cartAmount" class="cartAmount">${quantity}</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
`;
    })
    .join(""));
};

let increment = (id) => {
  dataShop = dataShop.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  allProducts();
  calculation()

  console.log(dataShop)
};


let decrement = (id) => {
  dataShop = dataShop.map((item) =>
  item.id === id ? { ...item, quantity: item.quantity <=0 ? 0: item.quantity - 1 } : item
);
allProducts();
calculation()

};

let update = (id) => {};

let calculation = () => {
  const makeBill = dataShop.map(item=> item.quantity * item.price)
  const sum = makeBill.reduce((a,b)=>a+b,0)
  console.log(sum)
};

calculation();

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;
        let filterData = dataShop.find((x) => x.id === id);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);

    return (label.innerHTML = `
    <h2>Total Bill : $ ${amount}</h2>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `);
  } else return;
};

TotalAmount();


allProducts();

