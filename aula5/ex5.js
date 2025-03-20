let A = prompt("Digite A: ")
A = parseFloat(A)

let B = prompt("Digite B: ")
B = parseFloat(B)

let C = prompt("Digite C: ")
C = parseFloat(C)

if(A>B && A>C){
    console.log(A)
    if (B>C){
        console.log(B)
        console.log(C)
    }else{
        console.log(C)
        console.log(B)
    }
}else if (B>C){
    console.log(B);
    if (A>C){
        console.log(A)
        console.log(C)
    }else{
        console.log(C)
        console.log(A)
    }
}else{
    console.log(C)
    if (A>B){
        console.log(A)
        console.log(B)
    }else{
        console.log(B)
        console.log(A)
    }
}