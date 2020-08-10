function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano ) {
        alert('[ERROR] Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')//usado para usar as imagens diretamente pelo JS
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src' , 'img02/criancaH.png')
                
            }else if (idade > 10 && idade < 21){
                //jovem
                img.setAttribute('src' , 'img02/jovem-M.png')
            }else if (idade >= 21 && idade < 60){
                //adulto 
                img.setAttribute('src' , 'img02/adulto-M.png')
            }else {
                //idoso
                img.setAttribute('src' , 'img02/idoso-M.png')
            }
        }else if (fsex[1]) {
            gênero = 'Mulher'
            } if (idade >= 0 && idade <= 10) {
            //criança
            img.setAttribute('src' , 'img02/crianca-F.png')
            }else if (idade > 10 && idade < 21){
            //jovem
            img.setAttribute('src' , 'img02/jovem-F.png')
            }else if (idade >= 21 && idade < 60){
            //adulto 
            img.setAttribute('src' , 'img02/adulto-F.png')
            }else {
            //idoso
            img.setAttribute('src' , 'img02/idoso-F.png')
        }
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img) //adicionar um conteúdo/elemento 
    }
        
}