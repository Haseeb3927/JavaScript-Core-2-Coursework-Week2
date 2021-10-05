function readingList(books) {
  // Write your code here...
  let bookCase = document.getElementById("content");
  let newUl = document.createElement("ul");
  let newH2 = document.createElement("h2");
  newH2.innerHTML = "Book List";
  books.forEach((element) => {
    let newLi = document.createElement("li");
    let newP1 = document.createElement("p1");
    newP1.innerHTML = element.title;
    let newP2 = document.createElement("p2");
    newP2.innerHTML = element.author;
    let newImg = document.createElement("img");
    newImg.setAttribute("src", element.cover);
    if (element.alreadyRead) {
      newLi.style.backgroundColor = "green";
    } else {
      newLi.style.backgroundColor = "red";
    }
    newLi.appendChild(newP1);
    newLi.appendChild(newP2);
    newLi.appendChild(newImg);
    newUl.appendChild(newLi);
    bookCase.appendChild(newH2);
    bookCase.appendChild(newUl);
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    cover: "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    cover: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    cover: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg",
  },
];

readingList(books);
