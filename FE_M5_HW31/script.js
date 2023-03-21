
const btn = document.querySelector('.btn');
const square = document.querySelector('.square');

btn.addEventListener('click', function() {
  square.style.backgroundColor = 'green';
  square.style.width = '100px';
  square.style.height = '100px';
});

