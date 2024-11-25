//AS FUNCOES TEM UM ESCOPO SEPARADO DO GLOBAL
//ESTE ESCOPO FAZ COM QUE AS VARIAVEIS DE FORA NÃO FUNCIONEM
//TENDO ISSO EM VISTA, PODEMOS DECLARAR NOVAS VARIAVEIS DENTRO DAS FUNCOES


let y = 10

function testandoEscopo(){
    let y = 20

    console.log(`Variavel dentro da funcao ${y}`);
    
}

testandoEscopo()

console.log(`Variável fora da função ${y}`);
