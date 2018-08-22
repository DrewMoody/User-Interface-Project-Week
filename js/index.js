// JS goes here
const mainHeader = document.querySelector('.main-header');
const hamToggle = document.querySelectorAll('.main-header img');
const hamClosed = document.querySelector('#hamclosed');
const hamOpen = document.querySelector('#hamopen');
const nav = document.querySelector('.show-nav');

hamClosed.addEventListener('click', () => {
  mainHeader.classList.toggle('sticky');
  hamClosed.classList.toggle('hidden');
  hamOpen.classList.toggle('hidden');
  nav.classList.toggle('hidden');
})

hamOpen.addEventListener('click', () => {
  mainHeader.classList.toggle('sticky');
  hamClosed.classList.toggle('hidden');
  hamOpen.classList.toggle('hidden');
  nav.classList.toggle('hidden');
})