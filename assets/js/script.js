let burger = document.querySelectorAll('.burger a');
let menuProfil = document.getElementById('menu-profil');
let allPage = document.querySelector('.container-fluid');

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
    }
  });
}


let dataModal = document.querySelector('.bg-modal');
let modalContent = document.querySelector('.modal-content');
let panggilModal = document.querySelectorAll('.panggil-modal');
let modalDel = document.querySelector('.modal-del')
let close = document.querySelector('button.close');

let tampilModal = () => {
  dataModal.classList.add('modal-active');
  modalContent.style.transform = 'scale(1)';
}
let tutupModal = () => {
  dataModal.classList.remove('modal-active');
  modalContent.style.transform = 'scale(0)';
}



for (let i = 0; i < panggilModal.length; i++) {
  panggilModal[i].onclick = tampilModal;
  modalContent.style.transform = 'scale(0)';
}

close.onclick = tutupModal;
window.onclick = (event) => {
  if (event.target == dataModal) {
    dataModal.classList.remove('modal-active');
    modalContent.style.transform = 'scale(0)';
  }
}

modalDel.onclick = function() {
 
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: 'Deleted!',
        text: 'Your book has been deleted.',
        icon: 'success',
        confirmButtonColor: '#2aa745'
      })
    }
  })
}


