//PODEMOS ADICIONAR ELEMENTOS NO FIM DE UM ARRAY UTILIZANDO A FUNÇÃO push 
const array = [1,2,3,4,5]
array.push(6,7)
console.log(array); // o numero 6 e 7 sao adicionados

//PODEMOS REMOVER ELEMENTOS NO FIM DE UM ARRAY UTILIZANDO A FUNÇÃO pop
array.pop()
console.log(array);

//PODEMOS RESGATAR O VALOR DO ITEM REMOVIDO DO ARRAY
//DEVEMOS CRIAR UMA VARIÁVEL QUE RECEBE O ARRAY + FUNÇÃO pop
const itemRemovido = array.pop()
console.log(itemRemovido);