function shoppingList(arrayOfPeople) {
  // Write your code here...
  let shoppingList = document.getElementById("content");
  let newUl = document.createElement("ul");
  arrayOfPeople.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = element;
    newUl.appendChild(newLi);
  });
  shoppingList.appendChild(newUl);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
