function meuAlert() {
    alert("Olá Mundo!");
}

function mudarTexto() {
    document.getElementById("meuparagrafo").innerHTML = "Outro Texto"
}

function mudarTexto2() {
    document.getElementById("meuparagrafo2").innerHTML = "Mooca"
}


function somar(id1, id2) {
    var num1 = document.getElementById(id1).value;
    var num2 = document.getElementById(id2).value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    alert("Soma: " + (num1 + num2))
}