Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const numbersDiv = document.querySelector('.numbers');

for (let i = 100; i >= 50; i -= 10) {
  const p = document.createElement('p');
  p.textContent = i;
  numbersDiv.appendChild(p); //appendChild добавляет только 1 елемент, а append много
}


...............................................................................
Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const strings = ["Lorem ipsum", "dolor sit amet", "consectetur adipiscing elit", "sed do eiusmod", "tempor incididunt", "ut labore et dolore magna aliqua"];
const stringsContainer = document.querySelector('.strings_container');

strings.forEach(function(string) {
  const p = document.createElement('p');
  p.textContent = string;
  stringsContainer.appendChild(p);
});

Находим div с классом "strings_container", затем проходимся по каждой строке массива с помощью метода forEach(). Для каждой строки создаем новый элемент <p> с помощью метода document.createElement(), устанавливаем его текстовое содержимое равным строке с помощью свойства textContent и добавляем его в div с помощью метода appendChild().
...............................................................................
Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const users = [
  { first_name: 'John', last_name: 'Doe', age: 25 },
  { first_name: 'Jane', last_name: 'Doe', age: 17 },
  { first_name: 'Bob', last_name: 'Smith', age: 32 },
  { first_name: 'Alice', last_name: 'Brown', age: 19 }
];

const usersContainer = document.querySelector('.users_container');

for (let user of users) {
  if (user.age >= 18) {
    const card = document.createElement('div');
    card.classList.add('user_card');
    card.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <p>Age: ${user.age}</p>
    `;
    usersContainer.appendChild(card);
  }
}
...................................
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Users</title>
</head>
<body>
  <div class="users_container">
    <!-- Карточки пользователей будут добавлены сюда -->
  </div>
  <script src="script.js"></script>
</body>
</html>
