const slides = document.querySelectorAll('.slide');
const circles = document.querySelectorAll('.circle');

let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });

  circles.forEach((circle, i) => {
    circle.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
}

function goToSlide(index) {
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
}

document.querySelector('.arrow.next').addEventListener('click', nextSlide);
document.querySelector('.arrow.prev').addEventListener('click', prevSlide);

circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    goToSlide(index);
  });
});

showSlide(currentSlideIndex);


