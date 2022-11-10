function ballMovement(i){
  if (ball[i]) {
    let a = ball[i]

  	//прорахунок колізій кульки по Х
  	if (a.angle.x) {
  		a.x > 5?
  		 a.x -= a.speed:
  		 a.angle.x = false
  	} else {
  		a.x < canvas.width - 5?
  		 a.x += a.speed:
  		 a.angle.x = true
  	}

  	//прорахунок колізій кульки по У
  	if (a.angle.y) {
  		a.y > 5?
  		 a.y -= a.speed:
  		 a.angle.y = false
  	} else {
  		a.y < canvas.height - 5?
  		 a.y += a.speed:
  		 a.angle.y = true
  	}

  	//прорахунок зіткнення кульки із стінами
  	if (a.y >= platform.y - 5 && a.y <= platform.y - platform.width) {
  		if (a.x >= platform.x && a.x <= platform.x + platform.width) {
  			a.angle.y = true
  		}
  	}

  	a.speed -= a.size / 100000
  	// a.size += a.size / 1000000

  	const togAll = (id) => {
  		if ( random(1,100) == 100 || (b.size <= 1 && a.size > 1)) {
  			ball.push(new Ball(b.x, b.y, 1, ball[id].size + b.size/2, '#373737'))
  			ball.splice(id, 1)
  			ball.splice(ball.indexOf(b), 1)
        return false
  		} else {
        ball[id].angle.x? ball[id].angle.x = false: ball[id].angle.x = true
        b.angle.x? b.angle.x = false: item = b.angle.x
        ball[id].angle.y? ball[id].angle.y = false: ball[id].angle.y = true
        b.angle.y? b.angle.y = false: b.angle.y = true

        a.speed += b.size / 100
        b.speed += a.size / 100

        if (colorId == colors.length) colorId = 0
        ball[id].color = colors[colorId++]
      }
  	}

  	//прорахунок зіткнення кульок із кульками
   for (var b of ball) {
  		if (a.left == b.right && a.top >= b.bot && a.bot <= b.top) {
  			togAll(i)
  		}
  		if (a.right == b.left && a.top >= b.bot && a.bot <= b.top) {
  			togAll(i)
  		}
  		if (a.top == b.bot && a.right <= b.left && a.left >= b.right) {
  			togAll(i)
  		}
  		if (a.bot == b.top && a.right >= b.left && a.left <= b.right) {
  			togAll(i)
  		}
  	}
  }
}
