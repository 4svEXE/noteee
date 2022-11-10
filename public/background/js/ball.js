let letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
let letterArr = []
for (var letter of letters) {
  letterArr.push(letter);
}

class Ball {
  constructor(x = 10, y = 10, speed = 2, size = 1, color = '#fff') {
    this.x = x
    this.y = y
    this.speed = speed
    this.size = size
    this.color = color
    this.angle = {
      x: randBool(),
    	y: randBool(),
    }
    this.letter = letterArr[rand(0, letterArr.length - 1)]
  }

  get top() {
    return Math.floor(this.y + this.size/2)
  }
  get bot() {
    return Math.floor(this.y - this.size/2)
  }
  get right() {
    return Math.floor(this.x + this.size/2)
  }
  get left() {
    return Math.floor(this.x - this.size/2)
  }
}

function newRandomBall() {
  let ball = {}
  ball.x = random(5, window.screen.width)
  ball.y = random(5, window.screen.height)
  ball.speed = random(1, 2)/10
  ball.size = random(1, 3)
  ball.color = colors[random(0, colors.length - 1)]

  return new Ball(ball.x, ball.y, ball.speed, ball.size, ball.color);
}
