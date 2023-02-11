const listBurger = document.querySelector('.navigation');
const buttonBurger = document.querySelector('.header__menu');

buttonBurger.addEventListener('click', () => {
  buttonBurger.classList.toggle('active');
  listBurger.classList.toggle('active');
});
