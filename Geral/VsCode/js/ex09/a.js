let vet = [6,5,5,4,7]
vet.push(9)
console.log(vet.length())
let num = []
for (let i = 0; i < vet.length; i++) {
    num[i] = vet[i] ** 2
    
}
/*
for (let i = 0; i < vet.length; i++) {
    console.log(num[i])
    
}
*/
for (const i in vet) {
    //console.log(num[i])
}
console.log(num.indexOf(9))
