let btn = document.querySelector('.background__adress');

function copy(text) {
  let input = document.createElement('input');
  document.body.appendChild(input);
  input.value = text;
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
}

btn.addEventListener('click', (e) => {
  copy(btn.value);
});
