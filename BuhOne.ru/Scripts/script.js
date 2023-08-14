// section1
document.addEventListener('DOMContentLoaded', () => {
  const slides1 = document.querySelectorAll('.section1 .slide');
  const circles1 = document.querySelectorAll('.section1 .circle');

  let currentSlideIndex1 = 0;

  function showSlide1(index) {
    slides1.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });

    circles1.forEach((circle, i) => {
      circle.classList.toggle('active', i === index);
    });
  }

  function nextSlide1() {
    currentSlideIndex1++;
    if (currentSlideIndex1 >= slides1.length) {
      currentSlideIndex1 = 0;
    }
    showSlide1(currentSlideIndex1);
  }

  function prevSlide1() {
    currentSlideIndex1--;
    if (currentSlideIndex1 < 0) {
      currentSlideIndex1 = slides1.length - 1;
    }
    showSlide1(currentSlideIndex1);
  }

  function goToSlide1(index) {
    currentSlideIndex1 = index;
    showSlide1(currentSlideIndex1);
  }


  function handleNextSlide1Click() {
   nextSlide1();
  }

  function handlePrevSlide1Click() {
   prevSlide1();
  }


  const nextSlide1Button = document.querySelector('.section1 .arrow.next');
  const prevSlide1Button = document.querySelector('.section1 .arrow.prev');

  nextSlide1Button.addEventListener('click', handleNextSlide1Click);
  prevSlide1Button.addEventListener('click', handlePrevSlide1Click);

  circles1.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      goToSlide1(index);
    });
  });

  showSlide1(currentSlideIndex1);
});


// section4
document.addEventListener('DOMContentLoaded', () => {
  const slides4 = document.querySelectorAll('.section4 .slide');
  const circles4 = document.querySelectorAll('.section4 .circle');

  let currentSlideIndex4 = 0;

  function showSlide4(index) {
    slides4.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });

    circles4.forEach((circle, i) => {
      circle.classList.toggle('active', i === index);
    });
  }

  function nextSlide4() {
    currentSlideIndex4++;
    if (currentSlideIndex4 >= slides4.length) {
      currentSlideIndex4 = 0;
    }
    showSlide4(currentSlideIndex4);
  }

  function prevSlide4() {
    currentSlideIndex4--;
    if (currentSlideIndex4 < 0) {
      currentSlideIndex4 = slides4.length - 1;
    }
    showSlide4(currentSlideIndex4);
  }

  function goToSlide4(index) {
    currentSlideIndex4 = index;
    showSlide4(currentSlideIndex4);
  }

  function handleNextSlide4Click() {
    nextSlide4();
  }

  function handlePrevSlide4Click() {
    prevSlide4();
  }

  const nextSlide4Button = document.querySelector('.section4 .arrow.next');
  const prevSlide4Button = document.querySelector('.section4 .arrow.prev');

  nextSlide4Button.addEventListener('click', handleNextSlide4Click);
  prevSlide4Button.addEventListener('click', handlePrevSlide4Click);

  circles4.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      goToSlide4(index);
    });
  });

  showSlide4(currentSlideIndex4);
});


// section5
document.addEventListener('DOMContentLoaded', () => {
  const slides5 = document.querySelectorAll('.section5 .slide');
  const circles5 = document.querySelectorAll('.section5 .circle');

  let currentSlideIndex5 = 0;

  function showSlide5(index) {
    slides5.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });

    circles5.forEach((circle, i) => {
      circle.classList.toggle('active', i === index);
    });
  }

  function nextSlide5() {
    currentSlideIndex5++;
    if (currentSlideIndex5 >= slides5.length) {
      currentSlideIndex5 = 0;
    }
    showSlide5(currentSlideIndex5);
  }

  function prevSlide5() {
    currentSlideIndex5--;
    if (currentSlideIndex5 < 0) {
      currentSlideIndex5 = slides5.length - 1;
    }
    showSlide5(currentSlideIndex5);
  }

  function goToSlide5(index) {
    currentSlideIndex5 = index;
    showSlide5(currentSlideIndex5);
  }

  function handleNextSlide5Click() {
    nextSlide5();
  }

  function handlePrevSlide5Click() {
    prevSlide5();
  }

  const nextSlide5Button = document.querySelector('.section5 .arrow.next');
  const prevSlide5Button = document.querySelector('.section5 .arrow.prev');

  nextSlide5Button.addEventListener('click', handleNextSlide5Click);
  prevSlide5Button.addEventListener('click', handlePrevSlide5Click);

  circles5.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      goToSlide5(index);
    });
  });

  showSlide5(currentSlideIndex5);
});


// header
function scrollToElement(element) {
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop
  });
}

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);
    if (targetSection) {
      scrollToElement(targetSection);
    }
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    const isHeaderFixed = window.scrollY > 0;
    header.classList.toggle('fixed-header', isHeaderFixed);
  }
});

let prevScrollPos = window.pageYOffset;
const header = document.querySelector('header');

function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollPos) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', handleScroll);



