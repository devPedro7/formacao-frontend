const user = prompt('Indentifique-se')
let m = 0


if(user === 'Pedro'){
    m = prompt('Insira um valor')

    if(m > 3){
        alert(`O usuário é o ${user} e ele inseriu o número ${m}`)
    }else{
        alert(`Infelizmente, você não atingiu a meta número: ${m}`)
    }
}