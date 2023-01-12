var isValid = function(s) {
    let entradasValidas = {
         "(" : ")",
         "{" : "}",
         "[" : "]"
     };
     let listaDeEntradas = new Array();
     for(let entrada = 0; entrada <s.length; entrada++){
 
         if(s.charAt(entrada) === entradasValidas[listaDeEntradas[listaDeEntradas.length-1]]){
             listaDeEntradas.pop();
         }
         else{
             listaDeEntradas.push(s.charAt(entrada));
         }
     }
     return (listaDeEntradas.length == 0);
 };
 