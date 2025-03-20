let numero = prompt("Digite um número: ")
numero = parseInt(numero)

let resultado = 1
for (let i=1; i<numero; i ++){
    resultado = resultado * i
}

console.log(""+numero+"! é = " + resultado)