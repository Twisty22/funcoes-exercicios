const imprimirNome = (nome) =>{
    console.log(`Olá, ${nome}`)
    return
}
/*
const imprimirNome = function(nome){
    console.log(`Olá, ${nome}`)
    return
}
*/
function imprimirTabuada(numero){
    for(let i = 1; i <= 10; i++){
        console.log(numero * i)
    }
    return
}

imprimirNome("Diego")
imprimirTabuada(2)
imprimirTabuada(3)
imprimirTabuada(4)
imprimirTabuada(5)
// mudança para fazer merge request