const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__name');
const body = document.querySelector('body');
const arr = document.querySelectorAll('.card__button');
const popupBtn = document.querySelector('.popup__button');
const back = document.querySelector('.background');

arr.forEach((el, id) => {
  el.addEventListener('click', () => {
    show(el.value);
  });
});

function show(text) {
  popup.classList.add('active');
  body.classList.add('active');
  popupName.innerHTML = `Покупка товара: ${text}`;

  window.scrollTo(0, 0);

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target == popupBtn || target == back) {
      popup.classList.remove('active');
      body.classList.remove('active');
    }
  });
}
