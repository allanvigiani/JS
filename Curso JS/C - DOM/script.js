let nota1 = Number(prompt("Nota 1: "))
let nota2 = Number(prompt("Nota 2: "))

let soma = nota1 + nota2
let media = soma / 2;

console.log(media)


if (media >= 7 && media <= 10) {
   console.log("Aprovado")
} else if (media >= 6 && media < 7) {
   console.log("Segunda chance")
} else if (media < 6) {
   console.log('Reprovado')
}
