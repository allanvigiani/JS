function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERROR 404] Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 &&  idade <=10) {
                //Criança
                img.setAttribute('src' , 'img/criancaM.png')
            }else if (idade > 10 && idade <= 20) {
                //Jovem
                img.setAttribute('src' , 'img/jovemM.png')
            }else if (idade > 20 && idade <= 60) {
                //Adulto
                img.setAttribute('src' , 'img/adultoM.png')
            }else{
                //Idoso
                img.setAttribute('src' , 'img/idosoM.png')
            }
        }else if (fsex[1].checked) {
            genero = 'mulher'
            }if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src' , 'img/criancaF.png')
            }else if (idade > 10 && idade <= 20) {
                //Jovem
                img.setAttribute('src' , 'img/jovemF.png')
            }else if (idade > 20 && idade <= 60) {
                //Adulto
                img.setAttribute('src' , 'img/adultoF.png')
            }else{
                //idoso
                img.setAttribute('src' , 'img/idosoF.png')
            }
            res.innerHTML = `Detectamos <strong>${genero}</strong> de <strong>${idade}</strong> anos.`
            res.appendChild(img)
            
    }
}