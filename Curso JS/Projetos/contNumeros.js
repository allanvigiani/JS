let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou é um número repetido.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione algum valor para realizar essa ação.')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma =  0
        let media = 0
        for(let pos in valores){
            soma += valores[pos] 

            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]    
               
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados <i>${total}</i> números</p>`
        res.innerHTML += `<p>O maior valor é <i>${maior}</i></p>`
        res.innerHTML += `<p>O menor valor é <i>${menor}</i></p>`
        res.innerHTML += `<p>A soma de todos os valores é <i>${soma}</i></p>`
        res.innerHTML += `<p>A média de todos os valores é <i>${media}</i></p>`
    }
}