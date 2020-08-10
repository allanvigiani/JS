function contar() {
    var ini =  document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //alert('[ERROR] Faltam dados para a contagem.')  
    }else{
        res.innerHTML = 'Contando..'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value) 
        if(p <= 0){
            res.innerHTML = 'Passo não pode ser 0 e foi alterado para 1: '
            p = 1
        }
        //Contagem crescente
        if(i < f){
            for(var c = i; c <= f; c = c + p ){ //var c = crescente
                res.innerHTML += ` ${c} \u{1F449}`
        }
        //Contagem decrescente
        }else{
            for(var d = i; d >= f; d = d - p) //var d = decrescente
                res.innerHTML += `${d} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}
