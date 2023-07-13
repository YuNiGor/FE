const root = document.querySelector("#root");
const leftTrigger = document.querySelector(".triggers .left");
const rightTrigger = document.querySelector(".triggers .right");

let postNumber = 1;

function createPost(title, body) {
  root.innerHTML = "";
  const titleP = document.createElement("p");
  const bodyP = document.createElement("p");
  const container = document.createElement("div");

  titleP.innerText = title;
  bodyP.innerText = body;

  titleP.classList.add("subheader");
  container.classList.add("container");

  container.append(titleP, bodyP);
  root.append(container);
}

function loadPost() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
    .then((response) => response.json())
    .then(({ title, body }) => createPost(title, body))
    .catch((error) => console.log(error));
}

leftTrigger.addEventListener("click", () => {
  postNumber--;
  loadPost();
});

rightTrigger.addEventListener("click", () => {
  postNumber++;
  loadPost();
});

loadPost();
