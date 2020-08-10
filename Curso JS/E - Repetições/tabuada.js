function gerar(){
    var num = document.getElementById('txtn')
    //var tab = document.getElementById('seltab')
    var res = document.getElementById('res')
    
    if(num.value.length == 0){
        alert('Por favor, digite um número.') 
        res.innerhtml= '<strong>IMPOSSIVEL CRIAR TABUADA</strong>'      
    }else{
        var n = Number(num.value)
        res.innerHTML = ''

        //var c = 1       
        /*while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c = c + 1 //Ou c++
        */
        for(var c = 1; c <= 10; c++){
            res.innerHTML += `${n} x ${c} = ${n*c}</br>`
            console.log('\n')            
        }           
     }
}
