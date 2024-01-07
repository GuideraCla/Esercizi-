// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.

function runCallbacks(callbacks) {
  callbacks.forEach (callbacks => callbacks()) 
}
function firstCallback() {
  console.log("Ciao,")
}
function secondCallback() {
  console.log("sono")
}

function thirdCallback() {
  console.log("Claudio")
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);