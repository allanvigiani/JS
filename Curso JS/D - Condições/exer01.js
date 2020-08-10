
function carregar() {
    var nome = prompt('Digite seu nome.')
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var saud = document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Horário atual: ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#d5dbb9'
        saud.innerHTML = `Bom dia, ${nome}`
        
    }else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#edc990'
        saud.innerHTML = `Boa tarde, ${nome}`
    }else{
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#025c95'
        saud.innerHTML = `Boa noite, ${nome}`
    }
}
