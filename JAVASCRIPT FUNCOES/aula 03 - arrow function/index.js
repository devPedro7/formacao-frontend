//funcao anonima / arrow function possui a forma resumida as funcoes

let arrow = ()=>{
    console.log('Esta é uma arrow function')
}

//arrow()

//Arrow function com argumento
const identificador = (numero)=>{
    if(numero % 2 === 0){
        console.log(`O número inserido é um par ${numero}`);
        return
    }else{
        console.log(`O número inserido é um impar ${numero}`);
        return
    }
}

identificador(2)
identificador(3)
identificador(4)
identificador(7)