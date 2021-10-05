function highlightWords(paragraph, colours) {
  // Write your code here...
  const newContent = document.getElementById("content");
  const newP = document.createElement("p");
  const newSelected = document.createElement("select");
  const splittedP = paragraph.split(" ");
  colours.forEach((name) => {
    const newOption = document.createElement("option");
    newOption.innerText = name;
    newSelected.appendChild(newOption);
  });
  splittedP.forEach((word) => {
    const newSpan = document.createElement("span");
    newSpan.innerText = word + " ";
    newP.appendChild(newSpan);
    //adding event listener to each span of splitted paragraph
    newSpan.addEventListener("click", () => {
      if (newSelected.value == "none") {
        newSpan.style.backgroundColor = "transparent";
      } else {
        newSpan.style.backgroundColor = newSelected.value;
      }
    });
  });

  newContent.appendChild(newP);
  newContent.appendChild(newSelected);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
