// CRIANDO PROPIEDADES EM UM OBJETO
// PARA ADICIONAR UMA NOVA PROPIEDADE AO OBJETO QUE AINDA NÃO EXISTE, CHAMAOS O OBJETO + A NOTAÇÃO " . " + NOME DA PROPIEDADE E O VALOR QUE VAI RECEBER
// PODEMOS REMOVER PROPIEDADES DE UM OBJTO CHAMANDO A FUNÇÃO "delete" = delete objeto.propiedade

const carro = {
    motor: 1.0,
    marca: "FIAT",
    nome: "UNO"
}

console.log(carro);

// ADICIONANDO UMA NOVA PROPIEDAEDE
carro.portas = 4
console.log(carro);

// DELETANDO UMA PROPIDADE
delete carro.portas
console.log(carro);


