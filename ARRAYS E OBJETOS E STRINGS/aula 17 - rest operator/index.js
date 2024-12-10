//PODEMOS RECEBER VÁRIOS ARGUEMENTOS ATRAVÉS DO OPERADOR REST: ...
// DENTRO DOS PARAMETROS DAS FUNÇÕES, PASSAMOS O OPERADOR REST E DENOMINAMOS O NOME DELE: ...args

const somaInfinita = (...args)=>{

    let total = 0

    for(let i = 0; i < args.length; i++){

        total+= args[i]
    }

    return total
}

console.log(somaInfinita(3,6,7,9,13,17,22,33,37));
