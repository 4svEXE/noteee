const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))

document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="scripts"></div>`)
const require = src =>{
	const sript = document.createElement('script')
	sript.src = src
  sript.defer = true
	sript.async = true
	document.querySelector('.scripts').appendChild(sript)
}

require('../background/js/cofings.js')
require('../background/js/frames.js')
require('../background/js/ballMovement.js')
require('../background/js/ball.js')
require('../background/js/canvas.js')
require('../background/js/cursor.js')
require('../background/js/main.js')
