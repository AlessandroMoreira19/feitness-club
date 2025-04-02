canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

ctx.beginPath()

ctx.lineWidth = 4;
ctx.strokeFill = 'blue'; //Cor da borda do retângulo
ctx.fillStyle = 'blue'; //Cor do retângulo
ctx.fillRect(10, 10, 50, 50);
ctx.strokeRect(10, 10, 50, 50)

ctx.lineWidth = 5;
ctx.strokeFill = "blue"; //Cor da borda do círculo
ctx.fillStyle = "blue"; //Cor do círculo
ctx.arc(200, 200, 50,
    Math.PI / 2, Math.PI * 1.5)
ctx.stroke()
ctx.fill()

ctx.closePath()