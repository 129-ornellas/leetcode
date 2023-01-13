var reverse = function (x) {
    let number = parseInt(x.toString().split('').reverse().join('')) // transforma a string em número
    const verificaBitNegativo = ((-2) ** 31)
    const verificaBitPositivo = (2 ** 31)
    if (x > 0) {
        number = number * (-1)
        if ((number <= verificaBitNegativo) || (number >= verificaBitPositivo)) {
            return 0
        }
        else {
            return mutiplicaNumero
        }
    }
    return number
};