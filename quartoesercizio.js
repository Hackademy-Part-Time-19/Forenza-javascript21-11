function palindromo(string) {
    let stringaProcessata = string.split(' ').join('')
    let parolaInversa = stringaProcessata.split('').reverse().join('')
    if (parolaInversa == stringaProcessata){
        return true
     }
 return false

}

let frase = palindromo("i topi non avevano nipoti") 

console.log(frase)

