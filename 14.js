// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e 
// restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

function filterOutOdds (...parameter) {
    return parameter.filter(number => (number % 3) === 0);
}

const parameterNumber = filterOutOdds(3, 7, 25, 35, 42)

console.log(parameterNumber);