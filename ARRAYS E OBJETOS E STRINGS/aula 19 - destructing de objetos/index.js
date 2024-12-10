const userDetails = {

    firstname: "Pedro",
    lastname: "Lucas",
    job: "dev"
}

const {firstname, lastname, job} = userDetails

//console.log(firstname);

//RENOMEANDO AS VARIAVEIS
//SUPONDO QUE TEMOS OUTRA VARIAVEL NO NOSSO CODIGO QUE SE CHAMA FIRSTNAME

const {firstname: primeiroNome} = userDetails
console.log(`Usuário: ${primeiroNome}`);

