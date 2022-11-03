let cursor = {x: 300,y: 300}

document.onmousemove = function(e) {
	cursor.x = event.clientX
	cursor.y = event.clientY
}

setInterval(() => {
	if (ball.length < maxBalls) {
			ball.push(new Ball(cursor.x, cursor.y, 1, rand(1,4)))
	}
}, 1500)
