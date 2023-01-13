var shortestPalindrome = function(s) {
    const copiaString = s
    const stringInvertida = s.split('').reverse().join('')
    let inverte = stringInvertida
    while(inverte !== s){
      s = s.slice(0,-1)
      inverte = inverte.slice(1)
    }
    return stringInvertida.slice(0, -s.length)+copiaString
  };