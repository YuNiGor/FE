// Написать скрипт, который отправляет запрос по адресу
// https://jsonplaceholder.typicode.com/users/1 и выводит данные в консоль.



fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// На основе скрипта из прошлого пункта создайте функцию,
// которая получает id пользователя и выводит в консоль данные пользователя.



function getUserData(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

getUserData(1);

// Доработайте функцию из прошлого пункта. Функция должна получать два аргумента:
// id пользователя и callback функцию, которая вызывается с данными с сервера.



function getUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error));
}

function displayUserData(userData) {
  console.log(userData);
}

getUserData(1, displayUserData);

// Создать функцию, которая получает данные о пользователе и выводит в интерфейс
// карточку пользователя с данными о нем. Имя, почта и телефон и еще запрос на
// получение фото по запросу: https://jsonplaceholder.typicode.com/photos.



function getUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error));
}

function displayUserCard(userData) {
  const card = document.createElement("div");
  card.innerHTML = `
    <h2>${userData.name}</h2>
    <p>Email: ${userData.email}</p>
    <p>Phone: ${userData.phone}</p>
  `;
  
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(data => {
      const photo = data.find(item => item.id === userId);
      card.innerHTML += `<img src="${photo.url}" alt="User Photo">`;
    })
    .catch(error => console.log(error));
  
  document.body.appendChild(card);
}

getUserData(1, displayUserCard);

// Создать процесс, который с использованием Promise.all выводит данные о первом
// и втором пользователе только после того, как оба загрузились.
// Подсказка: Создайте отдельно два Promise с запросами на первого и второго
// пользователя и оберните их в Promise.all.



const promise1 = fetch("https://jsonplaceholder.typicode.com/users/1").then(response => response.json());
const promise2 = fetch("https://jsonplaceholder.typicode.com/users/2").then(response => response.json());

Promise.all([promise1, promise2])
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Создать форму в интерфейсе, которая принимает title,
// body и userId и с этими данными отправляет запрос на сервер.
//Ответ сервера вывести в консоль.



const form = document.querySelector("#post-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.querySelector("#title-input").value;
  const body = document.querySelector("#body-input").value;
  const userId = document.querySelector("#userId-input").value;

  const postData = {
    title: title,
    body: body,
    userId: userId
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});

// Создать функцию, которая генерирует карточку с постом и использовать ее для
// отображения данных, пришедших с сервера. В качестве запроса на сервер
// используйте результат прошлого задания.



function createPostCard(postData) {
  const card = document.createElement("div");
  card.innerHTML = `
    <h2>${postData.title}</h2>
    <p>${postData.body}</p>
    <p>User ID: ${postData.userId}</p>
  `;
  document.body.appendChild(card);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => createPostCard(post));
  })
  .catch(error => console.log(error));