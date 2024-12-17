//MÉTODOS SÃO PROPIEDADES QUE POSSUEM UMA FUNÇÃO
//É INVOCADO DA MESMA FORMA QUE AS FUNÇÕES

const animal = {
    nome: "Bob",
    tipo: "cachorro",
    latido: function(som){
        console.log("Latido do animal: "+som);
    }
}

animal.latido("Auau")


//MAIS SOBRE MÉTODOS
//PODEMOS REFERENCIAR OS METODOS DOS NOSSOS OBJETOS COM O PRÓPRIO OBJETO, OU COM A PALAVRA RESERVADA: this
//O this POSSUI DIVERSAS FUNCIONALIDADES, UMA DELAS É REFERENCIAR ALGO QUE ESTÁ UTILIZANDO ELE

const pessoa = {
    nome: "Pedro",
    idade: 23,
    cargo: "dev",

    getNome: function(){
        return this.nome
        //UTILIZAR ESSA FUNÇÃO SERIA O MESMO QUE: console.log(pessoa.nome)
    },
    setNome: function(novoNome) {
         this.nome = novoNome
         //COM O this EU APONTO PARA O ATRIBUTO NOME E MUDO O VALOR DELE COM O PARAMETRO
    }

}

console.log(pessoa.getNome()) //PEDRO
pessoa.setNome("Jakson")
console.log(pessoa.getNome()) //JAJSON