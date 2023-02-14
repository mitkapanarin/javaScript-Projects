const form = document.getElementById('form');
const input = document.getElementById('input')
const tasks = document.getElementById('tasks');
const msg = document.getElementById('msg')
const dateInput = document.getElementById('dateInput')



form.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log("button clicked");
  formValidation();
})

let data = [{
  id: 1,
  task: 'do the laundry',
  date: 'date1',
  status: 'status1'
},
{
  id: 2,
  task: 'cook lunch',
  date: 'date2',
  status: 'status2'
},
{
  id: 3,
  task: 'practise jS',
  date: 'date3',
  status: 'status3'
}
]

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
  });
  
  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("success");
      msg.innerHTML = "";
      acceptData();
    }
  };

  
  let acceptData = () => {
    data["task"] = input.value;
    console.log(data);
    createPost();
  };

  let createPost = () => {
    tasks.innerHTML = `
    <div class="form-check task">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label d-flex flex-column" for="flexCheckDefault">
            <span>${data.task}</span>
            <span class="text-secondary">${data.date}, 2023</span>
            <span class="options">
                <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
                <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
            </span>
        </label>
    </div>
   `
   input.value = "";
}


