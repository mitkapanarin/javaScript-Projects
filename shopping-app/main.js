const shop = document.getElementById("card");
//console.log(shop)

const dataShop = [
  {
    id: "ab",
    image: "assets/blouse.jpg",
    name: "Women shirt",
    material: "cotton",
    collor: "blue",
    price: "$15.00",
  },
  {
    id: "cd",
    image: "assets/casual.jpg",
    name: "Casual shirt",
    material: "cotton",
    collor: "blue",
    price: "$15.00",
  },
  {
    id: "ef",
    image: "assets/sport.jpg",
    name: "Sport shirt",
    material: "cotton",
    collor: "blue",
    price: "$15.00",
  },
];

let basket = [];

const allProducts = () => {
  return (shop.innerHTML = dataShop
    .map((d) => {
      const { id, image, name, material, collor, price } = d;
      return `
<div id=product-id-${id} class = "content">
<div class="left">
  <img width="100" src=${image} alt=""/>
</div>
<div class="right">
  <h3>${name}</h3>
  <p>${material}</p>
  <p>${collor}</p>
  <p>${price}</p>
</div>
</div>
<div class="buttons">
  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
  <div id="cartAmount" class="cartAmount">0</div>
  <i onclick="increment(${id})"class="bi bi-plus-lg"></i>
</div>
`;
    })
    .join(""));
};

console.log(allProducts);
allProducts();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((d) => d.id === selectedItem.id);

  if(search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  }
  else{
    search.item += 1;
  }
 
  console.log(basket);
  update();
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((d) => d.id === selectedItem.id);

  if(search.item === 0) return;
  else{
    search.item -= 1;
  }
 
  console.log(basket);
  update();
};

let update = () => {
  console.log("the update function is running");
};

