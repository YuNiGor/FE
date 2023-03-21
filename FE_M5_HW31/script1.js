// JS код
const btn = document.querySelector('.btn');
const square = document.querySelector('.square');

btn.addEventListener('click', function() {
  square.classList.add('blue');
  console.log(square.style.backgroundColor);
});
