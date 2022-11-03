qs('.game').insertAdjacentHTML('beforeend', `<canvas id=""></canvas>`)

const canvas = qs('canvas'), ctx = canvas.getContext('2d')

canvas.width = document.body.clientWidth - 10
canvas.height = document.body.clientHeight - 10

canvas.style.background = ''

window.addEventListener(`resize`, event => {
	canvas.width = document.body.clientWidth - 10
	canvas.height = document.body.clientHeight - 10
}, false);

const clearScene = () => ctx.clearRect(0, 0, canvas.width, canvas.height);
