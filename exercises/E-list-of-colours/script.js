function listOfColours(colours) {
  // Write your code here...
  let newContent = document.getElementById("content");
  let selection = document.createElement("select");
  colours.forEach((element) => {
    let newOption = document.createElement("option");
    newOption.innerHTML = element;
    selection.appendChild(newOption);
  });
  selection.addEventListener("click", () => {
    //any of these can be used
    //selection.addEventListener("change", () => {
    let newP = document.createElement("p");
    newP.innerHTML = selection.value;
    newP.style.backgroundColor = selection.value;
    let createdPara = newContent.getElementsByTagName("p");
    if (createdPara.length) {
      newContent.removeChild(createdPara[0]);
    }
    newContent.appendChild(newP);
  });
  newContent.appendChild(selection);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
