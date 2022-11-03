let platform = {x: 0,y: 0,	width: 0,}
let colorId = 0
let ball = []

// add balls in canvas
for (var i = 0; i < sumOfBalls; i++) {
	ball[i] = newRandomBall()
}

function frame() {
	clearScene()
	addBall()
	addLetter()
}

let game = setInterval(frame,1000/fps)
let play = false

// play_Game.onclick = () => {
// 	if (!play) {
// 		play_Game.innerHTML = 'play'
// 		clearInterval(game)
// 	} else {
// 		play_Game.innerHTML = 'pause'
// 		game = setInterval(frame,1000/fps)
// 	}
// 	play = !play
// }
