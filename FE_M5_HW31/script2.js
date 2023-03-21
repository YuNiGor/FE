const resizeButton = document.getElementById('resize_button');
const square = document.getElementById('square');

resizeButton.addEventListener('click', function() {
  const width = square.offsetWidth + 20;
  const height = square.offsetHeight + 20;
  square.style.width = `${width}px`;
  square.style.height = `${height}px`;
});

const addButton = document.getElementById('add-paragraph');
const root = document.querySelector('.root');

addButton.addEventListener('click', () => {
  const paragraph = document.createElement('p');
  paragraph.innerText = 'Текст параграфа';
  paragraph.style.color = 'blue';
  root.appendChild(paragraph);
});
