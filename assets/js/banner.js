const list = document.querySelector('.slide_list');
const items = document.querySelectorAll('.slide_item');
const buttons = document.querySelector('.slide_buttons');
const paginations = document.querySelector('.paginations');
const lastIndex = items.length - 1;
let selected = 0;
let interval;

// Util Functions
const setTransition = (value) => {
  list.style.transition = value;
};

const setTranslate = ({ index, reset }) => {
  if (reset) list.style.transform = `translate(-${list.clientWidth}px, 0)`;
  else list.style.transform = `translate(-${(index + 1) * list.clientWidth}px, 0)`;
};

const activePagination = (index) => {
  [...paginations.children].forEach((pagination) => {
    pagination.classList.remove('on');
  });
  paginations.children[index].classList.add('on');
};

// Make prev and next buttons.
const handlePrev = () => {
  selected -= 1;
  setTransition('transform 1s linear');
  setTranslate({ index: selected });
  if (selected < 0) {
    selected = lastIndex;
    setTimeout(() => {
      setTransition('');
      setTranslate({ index: selected });
    }, 2000);
  }
  if (selected >= 0) activePagination(selected);
};

const handleNext = () => {
  console.log(selected);
  selected += 1;
  setTransition('transform 1s linear');
  setTranslate({ index: selected });
  if (selected > lastIndex) {
    selected = 0;
    setTimeout(() => {
      setTransition('');
      setTranslate({ index: selected });
    }, 1000);
  }
  if (selected <= lastIndex) activePagination(selected);
};

const makeButton = () => {
  if (items.length > 1) {
    const prevButton = document.createElement('button');
    prevButton.classList.add('slide_buttons_prev');
    prevButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
    prevButton.addEventListener('click', handlePrev);

    const nextButton = document.createElement('button');
    nextButton.classList.add('slide_buttons_next');
    nextButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
    nextButton.addEventListener('click', handleNext);

    buttons.appendChild(prevButton);
    buttons.appendChild(nextButton);
  }
};

// Make the pagination buttons.
const handlePagination = (e) => {
  if (e.target.dataset.num) {
    selected = parseInt(e.target.dataset.num);
    setTransition('all 1s linear');
    setTranslate({ index: selected });
    activePagination(selected);
  }
};

const makePagination = () => {
  if (items.length > 1) {
    for (let i = 0; i < items.length; i++) {
      const button = document.createElement('button');
      button.dataset.num = i;
      button.classList.add('pagination');
      if (i === 0) {
        button.classList.add('on');
      }
      paginations.appendChild(button);
      paginations.addEventListener('click', handlePagination);
    }
  }
};

// Clone the first and last elements.
const cloneElement = () => {
  list.prepend(items[lastIndex].cloneNode(true));
  list.append(items[0].cloneNode(true));
  setTranslate({ reset: true });
};

// Automatically play the slide
const autoplayIterator = () => {
  selected += 1;
  setTransition('all 1s linear');
  setTranslate({ index: selected });
  if (selected > lastIndex) {
    activePagination(0);
    clearInterval(interval);
    setTimeout(() => {
      selected = 0;
      setTransition('');
      setTranslate({ reset: true });
      autoplay({ duration: 3000 });
    }, 1000);
  }
  if (selected <= lastIndex) activePagination(selected);
};

const autoplay = ({ duration }) => {
  interval = setInterval(autoplayIterator, duration);
};

const render = () => {
  makeButton();
  makePagination();
  cloneElement();
  autoplay({ duration: 3000 });
};
render();