const categorieslist = document.getElementById('categorieslist');
const addonslist = document.getElementById('addonslist');


// Обработчик события прокрутки страницы
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 0) {
    categorieslist.classList.add('sticky');
    addonslist.style.marginTop = categorieslist.offsetHeight + 'px';
  } else {
    categorieslist.classList.remove('sticky');
    addonslist.style.marginTop = 0;
  }
});
