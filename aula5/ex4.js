i = prompt("Digite a nota lab: ")
i = parseFloat(i)
x = prompt("Digite a nota semestral: ")
x = parseFloat(x)
v = prompt("Digite a nota final: ")
v = parseFloat(v)

m = ((i * 2) + (x * 3) + (v * 5))/10
console.log("Sua média é "+m+"")


if (m >= 8){
    m = "A"
    console.log(m)
}
else if (7 <= m && m < 8){
    m = "B"
    console.log(m)
}
else if (6 <= m && m < 7){
    m = "C"
    console.log(m)
}
else if (5 <= m && m < 6){
    m = "D"
    console.log(m)
}
else if (m < 5){
    m = "E"
    console.log(m)
}