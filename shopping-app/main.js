const shop = document.getElementById("card");
//console.log(shop)


const dataShop = [
  {
    image: "assets/blouse.jpg",
    product: "Women shirt",
    material: "cotton",
    collor: "blue",
    price: "$15.00",
  },
  {
    image: "assets/casual.jpg",
    product: "Casual shirt",
    material: "cotton",
    collor: "blue",
    price: "$15.00",
  },
  {
    image: "assets/sport.jpg",
    product: "Sport shirt",
    material: "cotton",
    collor: "blue",
    price: "$15.00",
  },
];

const allProducts = () => {
  return (shop.innerHTML = dataShop.map((d) => {
  const {image, product, material, collor, price} = d 
  return `
<div class="left">
  <img width="100" src=${image} alt=""/>
</div>
<div class="right">
  <p>${product}</p>
  <p>${material}</p>
  <p>${collor}</p>
  <p>${price}</p>
</div>
`
  }).join(""));
};

console.log(allProducts);