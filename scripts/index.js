const burgerButton = document.querySelector('.header__burger-button');
const burgerMenu = document.querySelector('.burger-menu');
const burgerButtonImage = document.querySelector(
  '.header__burger-button-image'
);
const header = document.querySelector('header');

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  if (burgerMenu.classList.contains('open')) {
    burgerButtonImage.src = './images/Cross.png';
    header.classList.add('shadow');
    burgerButton.classList.add('no-hover');
  } else {
    burgerButtonImage.src = './images/Burger.png';
    header.classList.remove('shadow');
    burgerButton.classList.remove('no-hover');
  }
});
