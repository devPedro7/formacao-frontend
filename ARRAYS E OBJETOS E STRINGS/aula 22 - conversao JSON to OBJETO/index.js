//JSON PARA OBJETO
const myJson = '{"nome":"Pedro", "idade":23, "job":"dev jr"}'

const jsonObjeto = JSON.parse(myJson)

console.log(jsonObjeto.nome)
console.log(typeof jsonObjeto)

//OBJETO PARA JSON

const novoJson = JSON.stringify(jsonObjeto)

console.log(novoJson);
console.log(typeof novoJson);