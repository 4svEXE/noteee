function addBall(){
	ball.forEach((b, id) => {
		//ctx.beginPath();
		//ctx.arc(b.x , b.y , b.size , 0, 2 * Math.PI, true);
		//ctx.fillStyle = b.color;
		//ctx.fill();

		ballMovement(id)
	})
}

function addLetter(){
	ball.forEach((b, id) => {
		ctx.fillStyle =  b.color;
    ctx.font = "italic 12px 'JetBrains Mono'";
    ctx.fillText(b.letter, b.x , b.y);
	})
}
