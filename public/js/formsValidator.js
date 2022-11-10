let textarea = document.querySelector('.custom-textarea');
let submit = document.querySelector('.airplan_button_body');
let img = document.querySelector('.bg-img');

function egg(arr, src) {
  let itsEgg = false
  arr.forEach((item, i) => {
    if (textarea.value == item) {
      img.src = src;
      letterArr = ['F','R','E','S','K','O'];
      ball = [];
      itsEgg = true;
    }
  });
  if (!itsEgg) img.src = '../img/loh.png';

}

const fresko = ['fresko', 'FRESKO', 'фреско', 'Фреско', 'ФРЕСКО']

submit.setAttribute('type', 'button');
textarea.oninput = () => {
  if (textarea.value.length > 0) {
    submit.setAttribute('type', 'submit');
  } else {
    submit.setAttribute('type', 'button');
  }

  egg(fresko, '../img/fresko.png');
}

submit.onclick = () => {
  dbToggle('.input-form', 'error', 3000);
}
