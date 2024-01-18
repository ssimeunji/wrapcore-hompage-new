  const wrapper = document.querySelector('.slide_list');
  const slides = document.querySelectorAll('.slide_item');
  let currentSlide = 0;

  function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    wrapper.style.transition = 'transform 0.5s ease-in-out';
    wrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  // 자동으로 슬라이드 변경 (4초마다)
  setInterval(nextSlide, 4000);
  
  const render = () => {
    showSlide();
    nextSlide();
    setInterval();

};

render();
$(window).resize(function () {
  render();
});
