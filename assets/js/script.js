const burger = document.querySelectorAll('.burger a');
const menuProfil = document.getElementById('menu-profil');
const allPage = document.querySelector('.container-fluid');

for (let i = 0; i < burger.length; i++) {
  burger[i].addEventListener('click', function() {
    if(menuProfil.classList.contains('geser-kiri') && allPage.classList.contains('menu-aktif') == false) {
      menuProfil.classList.replace('geser-kiri', 'geser-kanan');
      allPage.classList.add('menu-aktif');
      burger[0].classList.add('fade-out');
    } else {
      menuProfil.classList.replace('geser-kanan', 'geser-kiri');
      allPage.classList.remove('menu-aktif');
      burger[0].classList.remove('fade-out');
    };
  });
};


const dataModal = document.querySelector('.bg-modal');
const modalContent = document.querySelector('.modal-content');
const panggilModal = document.querySelectorAll('.panggil-modal');
const close = document.querySelector('button.close');

let tampilModal = () => {
  dataModal.classList.toggle('modal-active');
  modalContent.style.transform = 'scale(1)';
};

let tutupModal = () => {
  dataModal.classList.toggle('modal-active');
  modalContent.style.transform = 'scale(0.8)';
};



panggilModal.forEach( modal => {
  modal.onclick = tampilModal;
  modalContent.style.transform = 'scale(0.8)';
});
//* atau bisa pakai for() {};
// for (let i = 0; i < panggilModal.length; i++) {
//   panggilModal[i].onclick = tampilModal;
//   modalContent.style.transform = 'scale(0.8)';
// };




close.onclick = tutupModal;
window.onclick = e => {
  if (e.target == dataModal) {
    dataModal.classList.toggle('modal-active');
    modalContent.style.transform = 'scale(0.8)';
  };
};



const track = document.querySelector('.track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const currentSlide = track.querySelector('.current__slide')
const slideWidth = slides[0].clientWidth;


let urutan = 1;
track.style.transform = `translateX(${-slideWidth * urutan}px)`;

nextButton.addEventListener('click', () => {

  urutan++;
  track.style.transform = `translateX(${-slideWidth * urutan}px)`;
});

prevButton.addEventListener('click', () => {

  urutan--;
  track.style.transform = `translateX(${-slideWidth * urutan}px)`;
});


// console.log();

// kalo nexButton diklik, pindah ke kanan
//    gimana supaya semua ikut pindah?
//    




