let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];
console.log(basket)

let calculation = () => {
  const makeBill = basket.map((item) => item.quantity * item.price);
  const sum = makeBill.reduce((a, b) => a + b, 0);
  return sum
};



let TotalAmount = () => {
  ShoppingCart.innerHTML= calculation()
};

TotalAmount();