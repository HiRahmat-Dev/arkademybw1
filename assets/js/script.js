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
let edit = document.querySelector('.grup-edit .edit');
let close = document.querySelector('button.close');

edit.addEventListener('click', function() {
  dataModal.style.display = 'flex';
});
close.addEventListener('click', function() {
  dataModal.style.display = 'none';
});


