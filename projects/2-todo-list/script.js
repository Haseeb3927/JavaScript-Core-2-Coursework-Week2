function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = element.task;
    newLi.setAttribute(
      "class",
      " list-group-item d-flex justify-content-between align-items-center"
    );
    list.appendChild(newLi);

    let span = document.createElement("span");
    span.setAttribute("class", "badge bg-primary rounded-pill");

    newLi.appendChild(span);

    let checkedIcon = document.createElement("i");
    checkedIcon.setAttribute("class", "fa fa-check");
    checkedIcon.setAttribute("ariaHidden", "true");

    span.appendChild(checkedIcon);

    checkedIcon.addEventListener("click", () => {
      if (element.completed == false) {
        newLi.style.textDecoration = "line-through";
        element.completed = true;
      } else {
        newLi.style.textDecoration = "none";
        element.completed = false;
      }
    });
    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa fa-trash");
    deleteIcon.setAttribute("ariaHidden", "true");

    span.appendChild(deleteIcon);
    // this function deletes the tasks which have been mark completed.
    // To delete any task, we have to remove "if (newLi.style.textDecoration == "line-through") {}"
    deleteIcon.addEventListener("click", () => {
      //if (newLi.style.textDecoration == "line-through") {
      list.removeChild(newLi);
      //}
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript

///////////===========////////////
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
/////////////============///////////
populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let input = document.querySelector("#todoInput");

  const newTodo = {
    task: input.value,
    completed: false,
  };
  todos.push(newTodo);
  populateTodoList(todos);
  input.value = "";
}

/////////////==========ADVANCED==========/////////////////
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
let Div = document.querySelector(".col-sm");

let deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "Delete completed tasks";
Div.appendChild(deleteBtn);
deleteBtn.setAttribute("class", "btn btn-primary mb-3");
deleteBtn.style.marginTop = "20px";

function deleteAllCompletedTodos() {
  // Write your code here...
  let list = document.getElementById("todo-list");
  let listItems = document.querySelectorAll("li");
  listItems.forEach((toDo) => {
    if (toDo.style.textDecoration === "line-through") {
      list.removeChild(toDo);
    }
  });
}

deleteBtn.addEventListener("click", deleteAllCompletedTodos);
