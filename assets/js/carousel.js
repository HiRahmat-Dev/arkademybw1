

const track = document.querySelector('.track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const slideWidth = track.querySelector('.current__slide').clientWidth;


let urutan = 1;
track.style.transform = `translateX(${-slideWidth * urutan}px)`;

const zoomIn = (currentSlide, targetSlide) => {
  currentSlide.classList.remove('current__slide');
  targetSlide.classList.add('current__slide');
}

nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current__slide');
  const nextSlide = currentSlide.nextElementSibling;
  const widthNextSlide = nextSlide.clientWidth;
  zoomIn(currentSlide, nextSlide);
  urutan++;
  track.style.transform = `translateX(${-widthNextSlide * urutan}px)`;
});


// console.log(slides);

prevButton.addEventListener('click', () => {
  
  const currentSlide = track.querySelector('.current__slide');
  const prevSlide = currentSlide.previousElementSibling;
  const widthPrevSlide = prevSlide.clientWidth;
  zoomIn(currentSlide, prevSlide);
  urutan--;
  track.style.transform = `translateX(${-widthPrevSlide * urutan}px)`;
});


// console.log();

// kalo nexButton diklik, pindah ke kanan
//    gimana supaya semua ikut pindah?
//    



