'use strict';
// store document selections in variables
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

// functions for opening and closing the modal
const openModalFunc = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModalFunc = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

// loop through all the three buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModalFunc);
}

btnCloseModal.addEventListener('click', closeModalFunc);
overlay.addEventListener('click', closeModalFunc)
// close modal on escape key pressed
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalFunc()
    }
})