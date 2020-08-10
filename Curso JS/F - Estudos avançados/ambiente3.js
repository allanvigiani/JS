let num = [5, 8, 9, 3]
num[4] = 6
num.push(7)
//num.length = mostrará quantos elementos o vetor tem
num.sort() //Ordenará em ordem CRESCENTE os elemento
console.log(`Nosso vetor é o ${num} e mostre os elementos :${num.length}`) 
console.log(`Primero elemento é ${num[2]}`)
 
let pos = num.indexOf(5)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`${pos}`)
}
