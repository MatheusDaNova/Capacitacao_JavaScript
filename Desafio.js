let nomes = [
    { nome:"matheus", idade:19 },
    { nome:"marcus", idade:9 },
    { nome:"manuela",  idade:11 },
    { nome:"mariana",idade:38 },
    { nome:"naomi", idade:19 },
    { nome:"noah", idade:9 },
    { nome:"josé",idade:70 },
    { nome:"Mario", idade:17 }
]

const nomesComM = nomes.filter(nomeComM => nomeComM.nome[0] === 'm' || nomeComM.nome[0] === 'M' )

var soma = 0

if(nomesComM !=0){
    for (var i=0; i<nomesComM.length ; i++){
        soma+=nomesComM[i].idade; 
        var n = nomesComM.length
        var media = soma / n

        delete nomesComM[i].idade
    }
    console.log(nomesComM)
    console.log("Média: " + media)

    
}





