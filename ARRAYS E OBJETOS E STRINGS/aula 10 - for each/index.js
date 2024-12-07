const numeros = [1,2,3,4,5,6,7]

numeros.forEach((i)=>{
    console.log(`O número é: ${i}`);
    
})


const posts = [
    {
        title: "Primeiro post",
        category: "PHP"
    },
    {
        title: "Segundo post",
        category: "JAVASCRIPT"
    },
    {
        title: "Terceiro post",
        category: "Java"
    },

]

posts.forEach((post)=>{
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
    
})