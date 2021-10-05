function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((person) => {
    let personName = document.createElement("h1");
    personName.innerHTML = person.name;
    let personJob = document.createElement("h2");
    personJob.innerHTML = person.job;
    content.appendChild(personName);
    content.appendChild(personJob);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
