const modalOpenButton = document.querySelector('[data-modal-open]');
const modalCloseButton = document.querySelector('[data-modal-close]');
const modalContainer = document.querySelector('[data-modal-container]');

const modalOpenClass = 'modal-container--open';

modalOpenButton.addEventListener('click', () => {
  modalContainer.classList.add(modalOpenClass);
});

modalCloseButton.addEventListener('click', () => {
  modalContainer.classList.remove(modalOpenClass);
});
