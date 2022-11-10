let platform = {x: 0,y: 0,	width: 0,}
let colorId = 0
let ball = []

// add balls in canvas
for (var i = 0; i < sumOfBalls; i++) {
	if (newRandomBall()) {
		ball[i] = newRandomBall()
	}
}

function frame() {
	clearScene()
	addBall()
	addLetter()
}

let game = setInterval(frame,1000/fps)
let play = false
