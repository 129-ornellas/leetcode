var reverse = function (x) {
    let numeroContrario = parseInt(x.toString().split('').reverse().join('')) // transforma a string em número
    numeroContrario = Math.abs(numeroContrario)
    const verificaBitPositivo = (2 ** 31)
    if (Math.abs(x) >= 0) {
        if (numeroContrario >= verificaBitPositivo) {
            return 0
        }
        else if(x<0){
            return numeroContrario * (-1)
        }
        return numeroContrario
    }
};

console.log(reverse(-123))
console.log(reverse(-2147483648))