/////////==========Part-1==========///////////

//blue button selected
let blueButton = document.querySelector("#blueBtn");
//orange button selected
let orangeButton = document.querySelector("#orangeBtn");
// green button selected
let greenButton = document.querySelector("#greenBtn");
//jumbotron selected
let jumbotron = document.querySelector(".jumbotron");
//donate button selected
let donateButton = document.querySelector(".btn-primary");
//volunteer button selected
let volunteerButton = document.querySelector(".btn-secondary");

/// EvenListener for Blue Button
blueButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#588fbd";
  donateButton.style.backgroundColor = "#ffa500";
  volunteerButton.style.color = "white";
  volunteerButton.style.backgroundColor = "black";
});

/// EventListener for Orange Button
orangeButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateButton.style.backgroundColor = "#5751fd";
  volunteerButton.style.color = "white";
  volunteerButton.style.backgroundColor = "#31b0d5";
});

/// EventListener for Green Button
greenButton.addEventListener("click", () => {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateButton.style.backgroundColor = "black";
  //volunteerButton.style.color = "white";
  volunteerButton.style.backgroundColor = "#8c9c08";
});
///////////=======Part 2=======///////////////

// Selecting Email input
let emailInput = document.getElementById("exampleInputEmail1");

// Selecting Name input
let nameInput = document.getElementById("example-text-input");

// Selecting describe yourself input
let descriptionInput = document.getElementById("exampleTextarea");

// Selecting whole Form
let Form = document.querySelector("form");

/// Let's validate it by using EventListener

Form.addEventListener("submit", validateForm);
// how function ValidateForm works
function validateForm(event) {
  // preventing the page from refreshing
  event.preventDefault(event);
  // Checking validity of each input according to instructions
  if (!emailInput.value.includes("@") || emailInput.value.length === 0) {
    emailInput.style.backgroundColor = "red";
  } else if (nameInput.value.length === 0) {
    nameInput.style.backgroundColor = "red";
  } else if (descriptionInput.value.length === 0) {
    descriptionInput.style.backgroundColor = "red";
  } else {
    alert("thank you for filling out the form");
  }
}
