const results = document.getElementById('results')

const fetchData = async () => {
    const data = await fetch('https://api.sampleapis.com/recipes/recipes')
        .then((res) => res.json())
        .then(res => printResult(res))
    console.log(data)
    return data
};

fetchData()

const printResult = (res) => {
    const cardData = res.slice(0,3).map((item) => 
    `<div class="card">
    <img src=${item.photoUrl} class="card-img-top image" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="text-end">Preparation time: ${item.prepTime} min</p>
      <p class="text-end">Cooking time: ${item.cookTime} min</p>
      <p class="text-end">Servings: ${item.servings}</p>
      <p class="text-start">Ingredients</p>
      <p class="text-end">${item.ingredients}</p>
      <div class="d-flex gap-2">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Description
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#"></a>${item.directions}
            </li>
          </ul>
        </div>
        <div class="dropdown-nutritions">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Nutritions
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#"></a>
              <p class="text-end">calories: ${item.calories}</p>
              <p class="text-end">fat: ${item.fat}</p>
              <p class="text-end">cholesterol: ${item.cholesterol} mg</p>
              <p class="text-end">sodium: ${item.sodium}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
        `).join('')
    return (results.innerHTML = cardData);
}

