//TEMOS UMA ESTRUTURA MAIS SIMPLES DE ACESSAR OS ELEMENTOS DO ARRAY DO QUE O for e o forEach

//BASICAMENTE CONSEGUIMOS CHAMAR CADA ELEMENTOS DA LISTA POR UM NOME E ACESSÁ-LOS MAIS FACILMENTE

const somaInfinita2 = (...args)=>{

    let total = 0

    for(num of args){
        total+= num
    }
    return total
}

console.log(somaInfinita2(1,2,3));
