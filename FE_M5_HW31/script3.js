const root = document.querySelector('.root');
const btn = document.querySelector('.btn');

let currentColor = 'blue';

btn.addEventListener('click', () => {
  const p = document.createElement('p');
  p.textContent = 'Произвольный текст';
  
  p.classList.add(currentColor);
  root.appendChild(p);
  
  currentColor = currentColor === 'blue' ? 'green' : 'blue';
});
