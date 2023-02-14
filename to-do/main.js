const displayList = document.getElementById("display_lists");
const form = document.getElementById("form");
const comments = document.getElementById("comments");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = {
    id: 123231,
    task: comments.value,
    status: false,
  };
  allTodoList.push(newTask)
  console.log(allTodoList);
  showTodos();showTodos();

});

let allTodoList = [
  {
    id: "abc",
    task: "homework",
    status: true,
  },
  {
    id: "def",
    task: "cook lunch",
    status: false,
  },
  {
    id: "ghi",
    task: "attend classes",
    status: false,
  },
  {
    id: "jkl",
    task: "do the laundry",
    status: false,
  },
];

const updateFn =(id)=>{
    console.log('sjyhhbjsdfc')
    allTodoList = allTodoList.map(item=>{
        if(item.id === id.id){
            // excalamatory symbol
            return {...item, status: item.status? true: false}
        }
        else{
            return item
        }
    })
    showTodos()
    console.log(allTodoList)
}

const showTodos = () => {
  var template = allTodoList
    .map(
      (item, index) => {
        if(item.status == true){
            return `
            <label id=${item.id} onclick="updateFn(${item.id})">
                <strike>
                    <input type="checkbox" class="input-checkbox" />${item.task}
                </strike>
            </label>
            `
        }
        else{
            return `
            <label id=${item.id} onclick="updateFn(${item.id})">
                <input type="checkbox" class="input-checkbox" />${item.task}
            </label>
            `
        }
      }
    )
    .join("");
  return (displayList.innerHTML = template);
};

showTodos();


const data = [1,2,3,4,5,6,7]
const data2 = [9,10,8,11,12,13,14]

const newData = [...data, data2]