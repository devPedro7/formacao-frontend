//JSON PARA OBJETO
const myJson = '{"nome":"Pedro", "idade":23, "job":"dev jr"}'

const jsonObjeto = JSON.parse(myJson)

console.log(jsonObjeto.nome)
console.log(typeof jsonObjeto)