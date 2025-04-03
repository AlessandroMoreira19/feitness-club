function drawCircle(ctx, x, y, raio, t1, t2, cor) {
    ctx.beginPath();
    ctx.fillStyle = cor; //Cor do Círculo
    ctx.arc(x, y, raio, t1, t2);
    ctx.fill()
    ctx.closePath();
}

function drawRect(ctx, x, y, width, height, cor) {
    ctx.beginPath();
    ctx.fillStyle = cor; //Cor do retângulo
    ctx.fillRect(x, y, width, height);
    ctx.closePath();
}

function drawTriangle(ctx, i1, i2, i3, i4, i5, i6, cor) {
    ctx.moveTo(i1, i2)
    ctx.lineTo(i3, i4)
    ctx.lineTo(i5, i6)
    ctx.fill()
    ctx.fillStyle = cor;
}

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");


drawCircle(ctx, 290, 100, 50, Math.PI / 2, Math.PI * 3, 'yellow');
drawRect(ctx, 0, 300, 400, 200, '#808080');
drawRect(ctx, 54, 230, 25, 70, '#844A1F')
drawRect(ctx, 340, 290, 25, 70, '#844A1F')


drawTriangle(ctx, 206, 145, 155, 201, 210, 200, '#F46F53')
drawTriangle(ctx, 206, 145, 256, 201, 210, 200, '#F46F53')

drawCircle(ctx, 352, 280, 35, Math.PI / 2, Math.PI * 3, 'green');
drawCircle(ctx, 67, 220, 35, Math.PI / 2, Math.PI * 3, 'green');



drawRect(ctx, 155, 200, 100, 100, '#844A1F');
drawRect(ctx, 165, 220, 30, 30, '#548BF7');
drawRect(ctx, 215, 220, 30, 30, '#548BF7');
drawRect(ctx, 195, 250, 20, 50, '#624423');


drawCircle(ctx, 4, 300, 50, Math.PI / 2, Math.PI * 3, '#548BF7');
drawRect(ctx, 0, 290, 54, 120, '#548BF7');
drawRect(ctx, 0, 340, 155, 120, '#548BF7');
drawCircle(ctx, 154, 390, 50, Math.PI / 2, Math.PI * 3, '#548BF7');