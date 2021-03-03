function media(numeros){
    const media = numeros.reduce((total, numero) => total + numero, 0)
    const total = media / numeros.length
    return total
}

const numeros = [1,2,4,23]

console.log((media(numeros)))