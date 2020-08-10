var agora = new Date()
var hora = agora.getHours() + "." + agora.getMinutes()
console.log(`São/É ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
        console.log('Boa tarde!')
} else if (hora <= 24) {
        console.log('Boa noite!')
}