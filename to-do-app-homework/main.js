const form = document.getElementById("form");
const inputText = document.getElementById("inputText");
const tasks = document.getElementById("tasks");
const dateInput = document.getElementById("dateInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  console.log(inputText.value);
  console.log(dateInput.value);
  data.push({
    id: Math.random(),
    task: inputText.value,
    date: dateInput.value,
    status: false,
  });
  printResult();

  inputText.value = ''
  dateInput.value = ''
});

let data = [
  {
    id: Math.random(),
    task: "do the laundry",
    date: "2023-02-19",
    status: true,
  },
  {
    id: Math.random(),
    task: "cook lunch",
    date: "2023-02-19",
    status: false,
  },
  {
    id: Math.random(),
    task: "practise jS",
    date: "2023-02-19",
    status: false,
  },
];

console.log(data)
const printResult = () => {
  const resultCard = data
    .map((item) => {
      return `
      <div class="form-check task">
        <input class="form-check-input" type="checkbox"  id="flexCheck">
        <label onClick="statusChange(${item.id})" class="form-check-label d-flex flex-column" for="flexCheckDefault">
            ${item.status? `<strike>${item.task}</strike>`:`<span>${item.task}</span>`}
            
            <span class="text-secondary">${item.date}</span>
        </label>
        <span class="options">
          <i onClick="editPost(${item.id})" class="fa-solid fa-pen-to-square"></i>
          <i onClick="deletePost(${item.id})" class="fa-solid fa-trash-can"></i>
        </span>
      </div>
      `;
    })
    .join("");
  return (tasks.innerHTML = resultCard);
};

const statusChange = (id) => {
  const findTask = data.find(item=>item.id === id)
  const updateTask = {...findTask, status: !findTask.status}

  deletePost(id)
  data.push(updateTask)
  // console.log(findTask)
  printResult();
  console.log(data)
}

const deletePost =(id)=>{
  // console.log('delete this', id)
  data = data.filter(item=> item.id !== id) // filter returns all data except 1 piece
  // console.log(data)
  printResult();
}

const editPost=(id)=>{
  // console.log(id)
  // find array method only returns 1 piece of data
  const findData = data.find(item=> item.id == id)  //const findData = data.filter(item=> item.id == id) ???????
  inputText.value = findData.task                   //diference FIND and FILTER

  dateInput.value = findData.date
  deletePost(id)
}

  



printResult();


// const sample = [1,2,3,4,5,6,7,8,9,10].filter(item=> item>=5)
// console.log(sample)



// crud - create read update delete