function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    let width = 0;
    const interval = setInterval(frame, 100);
  
    function frame() {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width++;
        progressBar.style.width = width + '%';
      }
    }
  }
  
  updateProgressBar();
  