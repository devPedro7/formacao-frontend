// PODEMOS ACESSAR METODOS ATRAVÉS DA NOTAÇÃO " . " 
// MÉTODOS SÃO SEMELHANTES AS FUNÇÕES QUE JÁ POSSUEM ACÇÕES PRÓPRIAS NATIVAS
// CONCEITO DE POO

//PARA DISTINGUIR PROPIEDADES DE MÉTODOS: QUANDO FORMOS UTILIZAR A NOTAÇÃO " . " OS QUADRADOS AZUIS SÃO PROPIEDADES E OS ROXOS SÃO MÉTODOS

const num = [1,2,3]
const contNum = [4,5,6]

const allNum = num.concat(contNum) //AQUI ACESSAMOS O MÉTODO CONCAT QUE UNE ARRAYS. CONSEGUIMOS ACESSAR ATRAVÉS DA NOTAÇÃO " . "
console.log(allNum);

const nome = "pedro lucas"
console.log(nome.toUpperCase()); // ESTE MÉTODO PERMITE TRANSFORMARMOS AS STRINGS DIGITADAS EM MINÚSCULO PARA MAIÚSCULO
console.log(nome.indexOf("r")); // ACESSAMOS O INDICE(POSIÇÃO7 ) EM QUE DETERMINADA LETRA REPRESENTA NA STRING