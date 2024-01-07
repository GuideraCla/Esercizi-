// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori.
//  Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
 try { 
   const risultato = callback (a + b) 
    console.log(risultato)
} catch (errore) {
    console.error(errore.message) 
}
}

function displayResult(result) {
 if (typeof result !== 'number') {
   throw new Error ("Non è un numero!")
 } 
 return result
}

performOperation(5, 3, displayResult);