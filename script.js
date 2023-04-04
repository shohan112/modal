'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked!');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    modal.style.display = 'block';
  });
}
btnCloseModal.addEventListener('click', () => {
  console.log('sgf');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  modal.style.display = 'None';
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
