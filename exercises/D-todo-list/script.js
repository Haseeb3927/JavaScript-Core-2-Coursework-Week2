function todoList(todos) {
  // Write your code here...
  let lists = document.getElementById("content");
  let newUl = document.createElement("ul");
  todos.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = element.todo;
    newUl.appendChild(newLi);
    lists.appendChild(newUl);
    newLi.addEventListener("click", () => {
      if (newLi.style.textDecoration === "line-through") {
        //newLi.style.removeProperty("text-decoration");
        //We can use any of these lines :)
        newLi.style.textDecoration = "none";
      } else {
        newLi.style.textDecoration = "line-through";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
