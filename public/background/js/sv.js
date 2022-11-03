if (!qs('head')) {
  const qs = el => document.querySelector(el)
}

//const qsa = el => document.querySelectorAll(el)
const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
//
// function randBool() {
//   if (random(0,1) == 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
qs('body').insertAdjacentHTML('beforeend', `<div class="scripts"></div>`)
const require = src =>{
	const sript = document.createElement('script')
	sript.src = src
	sript.async = true
	qs('.scripts').appendChild(sript)
}

require('../background/js/cofings.js')
require('../background/js/frames.js')
require('../background/js/ballMovement.js')
require('../background/js/ball.js')
require('../background/js/canvas.js')
require('../background/js/cursor.js')
require('../background/js/main.js')
