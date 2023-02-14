const results = document.getElementById("results");

// https://api.sampleapis.com/coffee/hot

const fetchData = async () => {
  const data = await fetch("https://api.sampleapis.com/coffee/hot")
    .then((res) => res.json())
    .then((res) => printResult(res));
  console.log(data);
  return data;
};

fetchData();

const printResult = (res) => {
  const cardData = res.map(
    (item) => `
  <div class="card">
  <img src=${item.image} class="card-img-top image" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `
  ).join('');
  return (results.innerHTML = cardData);
};

// const sampleData = ['i am', 'you are', 'they are'].map((item)=> `${item} - good`)
// console.log(sampleData)
